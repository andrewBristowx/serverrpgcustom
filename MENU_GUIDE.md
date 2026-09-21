# Menú custom con FancyMenu

El pack ya trae **FancyMenu** instalado y el layout **ya está escrito** en
[`config/fancymenu/customization/`](config/fancymenu/customization/):

- `title_screen_layout.txt` - menú principal: fondo, logo, y los botones Jugar / Multijugador / Info / Discord
- `pause_screen_layout.txt` - menú de pausa: logo chico, Ajustes y Salir
- `info_screen_layout.txt` - página nueva de Info con el resumen del pack y un botón Volver

## Corrección: al principio dije que esto no se podía hacer a mano

Me equivoqué. Cuando dije que FancyMenu "no tiene un formato para escribir a mano" me quedé corto con la
investigación - los docs oficiales están rotos/vacíos en varias páginas, así que asumí que no había forma
de verificar el formato real. Pero sí la hay: **FancyMenu SÍ guarda todo en archivos de texto planos** con
un formato de propiedades (`clave = valor`, bloques con `{ }`), y hay cientos de modpacks públicos en
GitHub que los suben tal cual junto con sus mods (justo como veníamos haciendo con FTB Quests). Encontré
varios ejemplos reales, incluyendo uno de **Create: Astral** (un pack de Create para 1.20.1, mismo género
que el nuestro) con botones de Discord, mimicbutton, y páginas custom - usé exactamente esa sintaxis
verificada para escribir los 3 archivos de acá.

## Qué falta todavía

1. **El link de Discord**: en `title_screen_layout.txt`, buscá la línea con `TU-INVITE-AQUI` y reemplazala
   por tu link real cuando lo tengas.
2. **Probarlo en el juego**: no pude abrir Minecraft en este entorno para verlo andar de verdad. Puede que
   algún detalle visual (posición exacta de un botón, tamaño) necesite un ajuste fino una vez que lo veas
   en pantalla - eso sí se puede tocar con el editor visual de FancyMenu in-game (click derecho sobre el
   elemento -> mover/redimensionar) sin romper nada, o pegame una captura y lo ajusto acá.
3. **Bloquear el editor para jugadores** una vez que estés conforme: en `config/fancymenu/options.txt`
   poné `modpack_mode = true`.

## Qué hace cada botón

| Botón | Pantalla | Acción |
|---|---|---|
| Jugar | Principal | Imita el botón vanilla de Un Jugador |
| Multijugador | Principal | Imita el botón vanilla de Multijugador (lista de servidores normal) |
| Info | Principal | Abre la página custom de Info |
| Discord | Principal | Abre el link de Discord (pendiente de completar) |
| Ajustes | Pausa | Imita el botón vanilla de Opciones |
| Salir | Pausa | Imita el botón vanilla de Desconectar/Guardar y salir |
| Volver | Info | Vuelve al menú principal |

Perfil y Tienda no se usan en ningún lado, como pediste. Los botones lisos (`btn_blank_a.png` /
`btn_blank_b.png`) están disponibles en `config/fancymenu/assets/` para re-skinear botones de otras
pantallas (ej. Opciones) - eso sí lo dejo para que lo hagas vos con el editor in-game, porque implica
elegir botón por botón en cada pantalla vanilla que quieras re-skinear, algo que tiene más sentido hacer
mirando la pantalla real en vez de a ciegas.
