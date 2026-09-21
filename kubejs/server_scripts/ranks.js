// ============================================================================
// Sistema de rangos de chat (admin / vip / streamer / member)
// ----------------------------------------------------------------------------
// Como funciona:
//   Cada rango es un EQUIPO de scoreboard vanilla ("rank_admin", "rank_vip", ...)
//   con un color y un prefijo. Minecraft vanilla ya usa el color/prefijo del
//   equipo de un jugador para decorar su nombre en el chat, en la lista de
//   jugadores (tab) y en la etiqueta sobre su cabeza - no hace falta tocar
//   los paquetes de chat a mano, y funciona aunque el jugador este offline
//   cuando se le asigna el rango.
//
//   IMPORTANTE: esto es 100% visual/cosmetico. Dar el rango "admin" con este
//   comando NO da permisos reales de operador. Los permisos de verdad se
//   siguen dando con /op como siempre.
// ============================================================================

const RANKS = {
  member:   { color: 'gray',         prefix: '' },
  vip:      { color: 'green',        prefix: '§a[VIP] §r' },
  streamer: { color: 'light_purple', prefix: '§d[STREAMER] §r' },
  admin:    { color: 'red',          prefix: '§c[ADMIN] §r' }
}

function teamNameFor(rank) {
  return 'rank_' + rank
}

function runAsConsole(source, command) {
  try {
    source.server.commands.performPrefixedCommand(source.withPermission(4), command)
  } catch (e) {
    console.error('[ranks] fallo al ejecutar comando interno: ' + command, e)
  }
}

// Crea o actualiza los 4 equipos de rango cuando arranca el servidor.
ServerEvents.loaded(event => {
  const server = event.server
  const scoreboard = server.scoreboard
  const consoleSource = server.createCommandSourceStack()

  Object.keys(RANKS).forEach(rank => {
    const name = teamNameFor(rank)
    const def = RANKS[rank]

    if (!scoreboard.getPlayerTeam(name)) {
      runAsConsole(consoleSource, 'team add ' + name)
    }
    runAsConsole(consoleSource, 'team modify ' + name + ' color ' + def.color)
    if (def.prefix) {
      const json = JSON.stringify({ text: def.prefix })
      runAsConsole(consoleSource, 'team modify ' + name + ' prefix ' + json)
    }
    runAsConsole(consoleSource, 'team modify ' + name + ' friendlyFire true')
  })

  console.info('[ranks] equipos de rango listos: ' + Object.keys(RANKS).join(', '))
})

function currentRankOf(server, playerName) {
  const team = server.scoreboard.getPlayersTeam(playerName)
  if (!team) return 'member'
  const id = team.name
  return id.indexOf('rank_') === 0 ? id.substring(5) : 'member'
}

function setRank(source, playerName, rankName) {
  rankName = ('' + rankName).toLowerCase()
  if (!RANKS[rankName]) {
    source.sendFailure(Text.red('Rango desconocido "' + rankName + '". Usa /rank list para ver los validos.'))
    return 0
  }

  // Quita al jugador de cualquier equipo de rango que tuviera antes.
  runAsConsole(source, 'team leave ' + playerName)
  // member = sin equipo (sin prefijo), asi que si el rango pedido es member, ya esta.
  if (rankName !== 'member') {
    runAsConsole(source, 'team join ' + teamNameFor(rankName) + ' ' + playerName)
  }

  source.sendSuccess(() => Text.green(playerName + ' ahora tiene el rango "' + rankName + '"'), true)
  return 1
}

function getRank(source, playerName) {
  const rank = currentRankOf(source.server, playerName)
  source.sendSuccess(() => Text.gray(playerName + ' tiene el rango: ').append(Text.gold(rank)), false)
  return 1
}

ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event

  event.register(
    Commands.literal('rank')
      .then(
        Commands.literal('set')
          .requires(src => src.hasPermission(2))
          .then(
            Commands.argument('player', Arguments.STRING.create(event))
              .then(
                Commands.argument('rank', Arguments.STRING.create(event))
                  .executes(ctx => setRank(
                    ctx.source,
                    Arguments.STRING.getResult(ctx, 'player'),
                    Arguments.STRING.getResult(ctx, 'rank')
                  ))
              )
          )
      )
      .then(
        Commands.literal('remove')
          .requires(src => src.hasPermission(2))
          .then(
            Commands.argument('player', Arguments.STRING.create(event))
              .executes(ctx => setRank(ctx.source, Arguments.STRING.getResult(ctx, 'player'), 'member'))
          )
      )
      .then(
        Commands.literal('get')
          .executes(ctx => getRank(ctx.source, ctx.source.playerOrException.gameProfile.name))
          .then(
            Commands.argument('player', Arguments.STRING.create(event))
              .executes(ctx => getRank(ctx.source, Arguments.STRING.getResult(ctx, 'player')))
          )
      )
      .then(
        Commands.literal('list')
          .executes(ctx => {
            ctx.source.sendSuccess(() => Text.gray('Rangos disponibles: ' + Object.keys(RANKS).join(', ')), false)
            return 1
          })
      )
  )
})

// Mensaje de bienvenida mostrando el rango actual al entrar.
PlayerEvents.loggedIn(event => {
  const rank = currentRankOf(event.server, event.player.username)
  if (rank !== 'member') {
    event.player.tell(Text.gray('Tu rango actual es: ').append(Text.gold(rank)))
  }
})
