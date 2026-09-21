// ============================================================================
// Extra opcional: colorea el TEXTO del mensaje (no el nombre) segun el rango.
// El prefijo "[VIP]"/"[ADMIN]"/"[STREAMER]" junto al nombre ya lo pone el
// sistema de equipos en ranks.js sin depender de este script. Esto es solo
// un adorno adicional sobre el propio mensaje.
//
// AVISO: la API exacta de decorateChat puede variar segun la build de KubeJS.
// Si al cargar el servidor ves un error de KubeJS senalando esta linea, borra
// o comenta el contenido de este archivo - el sistema de rangos seguira
// funcionando igual sin el.
// ============================================================================

const CHAT_COLOR_CODES = {
  vip: '§a',
  streamer: '§d',
  admin: '§c'
}

PlayerEvents.decorateChat(event => {
  const team = event.server.scoreboard.getPlayersTeam(event.player.username)
  if (!team) return
  const rank = team.name.indexOf('rank_') === 0 ? team.name.substring(5) : null
  const code = rank && CHAT_COLOR_CODES[rank]
  if (code) {
    event.setMessage(code + event.message)
  }
})
