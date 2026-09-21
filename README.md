# Somitaw Adventure Pack (NeoForge 1.20.1)

Repo: https://github.com/andrewBristowx/serverrpgcustom
URL de `pack.toml` para instaladores (packwiz-installer, Prism Launcher):
`https://raw.githubusercontent.com/andrewBristowx/serverrpgcustom/master/pack.toml`

Modpack grande orientado a aventura: **Create** como columna vertebral tecnológica, un montón de
dimensiones/exploración, enemigos y jefes, mascotas domesticables, un sistema de misiones guiado (FTB
Quests), un sistema de rangos de chat administrable por comandos (admin / vip / streamer), y un menú
principal/pausa personalizado (FancyMenu) - todo montado con **packwiz** y scripts de **KubeJS**.

Menú custom: ver [MENU_GUIDE.md](MENU_GUIDE.md) - el layout de FancyMenu ya está escrito (menú principal,
pausa, y una página de Info), solo falta poner el link de Discord y probarlo en el juego.

## Estructura del proyecto

```
somitaw/
├── pack.toml, index.toml       <- manifiesto packwiz (NO tocar a mano, se genera solo)
├── mods/                       <- un .pw.toml por mod (metadatos + hash, packwiz descarga el .jar)
├── kubejs/
│   └── server_scripts/
│       ├── ranks.js            <- sistema de rangos (equipos de scoreboard + comando /rank)
│       └── rank_chat_color.js  <- extra opcional: colorea el texto del mensaje según el rango
├── tools/
│   ├── packwiz.exe             <- CLI de packwiz (Windows x64)
│   ├── modlist.txt             <- lista curada de mods por categoría (fuente de verdad)
│   └── add_log.csv             <- resultado de agregar cada mod (OK / FAIL y por qué)
├── QUEST_DESIGN.md             <- estructura de capítulos de misiones para construir en el editor in-game
└── MODLIST.md                  <- (se genera al final) lista final real de mods instalados, por categoría
```

## Qué es packwiz y por qué se usa así

`pack.toml`/`index.toml`/`mods/*.pw.toml` **no son los mods en sí** - son metadatos (de dónde viene cada
mod en Modrinth, qué versión, el hash del archivo). Los `.jar` reales se descargan automáticamente cuando
alguien instala el pack, no están en esta carpeta. Esto tiene dos ventajas grandes para un pack de 200+
mods: el proyecto pesa unos KB en vez de varios GB, y actualizar un mod es un solo comando
(`packwiz modrinth update <mod>`) en vez de bajar el jar a mano.

## Cómo instalar esto como servidor

1. Instala Java 17+ (NeoForge 1.20.1 lo requiere) y el instalador de NeoForge `47.1.106` en modo servidor:
   descarga desde https://neoforged.net/ y ejecútalo con `--installServer` en la carpeta donde vaya a vivir
   el servidor.
2. Instala **packwiz-installer** (necesita Java) o usa un launcher que soporte packwiz directamente
   (Prism Launcher lo soporta nativo). Desde la carpeta del servidor:
   ```
   java -jar packwiz-installer-bootstrap.jar -g -s server "https://raw.githubusercontent.com/andrewBristowx/serverrpgcustom/master/pack.toml"
   ```
   Esto descarga todos los `.jar` de `mods/` automáticamente a partir del `pack.toml`.
3. Copia los scripts de `kubejs/` a la carpeta del servidor (packwiz también puede versionarlos si los
   agregas al índice con `packwiz refresh` - ya están incluidos en el índice general del pack).
4. Dale bastante memoria a la JVM: con 200+ mods, arranca con al menos `-Xmx6G` (idealmente 8-10G si el
   servidor lo permite).
5. Acepta el EULA (`eula=true` en `eula.txt`) y arranca con el script de arranque que genera el instalador
   de NeoForge (`run.bat` / `run.sh`).

## Cómo instalan el pack los jugadores (cliente)

Igual que el servidor pero sin `-s server` (o instalando el lado "client"): packwiz separa automáticamente
qué mods son solo-cliente (mapas, minimapa, shaders) de los que también hacen falta en servidor.
Prism Launcher: `Add Instance -> Import -> pega esta URL`:
`https://raw.githubusercontent.com/andrewBristowx/serverrpgcustom/master/pack.toml`

## Sistema de rangos de chat

Ya viene funcionando en cuanto arranca el servidor (`kubejs/server_scripts/ranks.js` crea los 4 equipos
de rango automáticamente). Comandos (requieren nivel de operador 2 para asignar):

```
/rank set <jugador> <admin|vip|streamer|member>   -> asigna un rango (funciona con el jugador offline)
/rank remove <jugador>                             -> vuelve a member (quita el rango)
/rank get [jugador]                                -> consulta el rango actual
/rank list                                          -> lista los rangos disponibles
```

El rango se ve como un prefijo de color antes del nombre **en el chat, en la lista de jugadores (tab) y
en la etiqueta sobre la cabeza**, porque usa equipos de scoreboard nativos de Minecraft (no un mod aparte).
Esto es cosmético: no otorga permisos reales, esos se siguen manejando con `/op` normalmente.

Puedes cambiar colores/prefijos editando el objeto `RANKS` al principio de `ranks.js` y reiniciando el
servidor (o `/reload`, aunque con KubeJS a veces hace falta reinicio completo para recrear los equipos).

⚠️ No pude levantar un servidor de Minecraft dentro de este entorno para probar el script en vivo (no hay
Java/Minecraft instalado aquí). La lógica está escrita con la API documentada de KubeJS y comandos vanilla
estables, pero si al arrancar el servidor ves un error de KubeJS señalando `ranks.js`, pégame el log y lo
arreglo al toque.

## Sistema de misiones

FTB Quests viene instalado. La estructura de capítulos, orden de progresión y qué debe desbloquear qué
está pensada en [QUEST_DESIGN.md](QUEST_DESIGN.md) - constrúyela en el editor in-game
(`/ftbquests edit_mode true`) siguiendo ese documento. Expliqué ahí por qué no te generé los archivos de
misiones a ciegas: los IDs de ítem de cada mod solo se pueden verificar con seguridad jugando con los mods
cargados.

## Mods incluidos

Ver [MODLIST.md](MODLIST.md) para la lista final real (se genera después de procesar todo `tools/modlist.txt`
contra la API de Modrinth - algunos nombres candidatos de la lista original no existen o no tienen versión
para 1.20.1/NeoForge y quedan afuera automáticamente, para no meter mods rotos al pack).
