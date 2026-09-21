# Guía: menú custom con FancyMenu

El pack ya trae **FancyMenu** instalado (reemplaza la pantalla de título, el menú de pausa y se puede usar
para re-skinear otras pantallas de Minecraft). Los assets ya están recortados y listos en
[`config/fancymenu/assets/`](config/fancymenu/assets/).

## Por qué esto no viene ya armado

FancyMenu **no usa un archivo de texto para escribir el layout a mano** - su propio manual dice que se arma
con el editor visual in-game (click derecho -> agregar elemento -> elegir imagen/acción), y recién después
se copia la carpeta `config/fancymenu/` resultante al modpack. No hay forma de generar eso sin abrir el
juego, así que acá te dejo todo listo (imágenes recortadas + instrucciones exactas) para que lo arms en
unos 15-20 minutos.

## Assets disponibles

| Archivo | Qué es |
|---|---|
| `background.png` | Fondo animado/estático de las pantallas |
| `logo.png` | Logo "PonyOnaventura" |
| `btn_jugar.png` | Botón "Jugar" (menú principal) |
| `btn_multijugador.png` | Botón "Multijugador" (menú principal) |
| `btn_info.png` | Botón "Info" (menú principal) |
| `btn_discord.png` | Botón "Discord" (menú principal) |
| `btn_ajustes.png` | Botón "Ajustes" (menú de pausa) |
| `btn_salir.png` | Botón "Salir" (menú de pausa) |
| `btn_blank_a.png` / `btn_blank_b.png` | Botones lisos sin texto, para re-skinear botones vanilla de Minecraft (Opciones, etc) |

No se usan `perfil` ni `tienda` (quedaron recortados en `Inicio/cropped/` por si los necesitás más adelante,
pero no están copiados a `assets/`).

## 1. Menú principal (Title Screen)

1. Andá a **Mods -> FancyMenu -> Open Menu Editor** o abrí el menú principal y click en el ícono de
   FancyMenu (arriba a la izquierda, si no está en `modpack_mode`).
2. **Background**: click derecho -> `New Element -> Image` -> seleccioná `config/fancymenu/assets/background.png`, que cubra toda la pantalla.
3. **Logo**: `New Element -> Image` -> `logo.png`, centrado arriba.
4. **4 botones**, cada uno como `New Element -> Image Button` (o `Image` + acción de click):
   - `btn_jugar.png` -> acción: **Open Screen -> Singleplayer** (pantalla vanilla de mundos)
   - `btn_multijugador.png` -> acción: **Open Screen -> Multiplayer** (lista de servidores vanilla, como pediste)
   - `btn_info.png` -> acción: **Open Screen -> Custom Screen** (creá una pantalla nueva, ver seccion 3 abajo)
   - `btn_discord.png` -> acción: **Open Link** -> `<PEGAR LINK DE DISCORD ACA CUANDO LO TENGAS>` (dejalo vacío o apuntando a tu server por ahora)
5. Ocultá o borrá los botones vanilla originales (Singleplayer/Multiplayer/Options/Quit de la pantalla de título) ya que los reemplazan los tuyos.

## 2. Menú de pausa (Pause Menu)

1. En el editor, cambiá de "layout" a la pantalla de pausa (`PauseScreen`) desde el selector de pantallas del editor.
2. Agregá el `logo.png` chico arriba (opcional).
3. Dos botones:
   - `btn_ajustes.png` -> acción: **Open Screen -> Options**
   - `btn_salir.png` -> acción: **Mimic Vanilla Button -> Disconnect/Save and Quit to Title**
4. El resto de los botones vanilla de pausa (Achievements, Stats, etc) los podés ocultar o dejar con el estilo default, como prefieras.

## 3. Página de Info

Creá una **Custom Screen** nueva (el editor tiene la opción "Create New Custom GUI") con:
- Fondo: `background.png`
- Un elemento de texto con este resumen (copialo tal cual o ajustalo):

> **PonyOnaventura**
>
> Modpack de aventura para NeoForge 1.20.1 con más de 230 mods. Create es el corazón del pack: desde
> ejes y engranajes hasta trenes y contraptions. Sumale dimensiones nuevas para explorar (Bosque
> Crepuscular, Aether, Ad Astra y más), un bestiario gigante con jefes y criaturas domesticables, y
> magia con Ars Nouveau.
>
> El progreso se guía con un libro de misiones (FTB Quests) capítulo por capítulo, y el chat tiene
> rangos (admin / vip / streamer) que el staff asigna con `/rank set`.
>
> Servidor: [completar cuando lo tengas]
> Discord: [completar cuando lo tengas]

- Un botón "Volver" que use la acción **Close Screen / Open Screen -> Title Screen**.

## 4. Re-skinear pantallas vanilla (Opciones, etc.) con los botones lisos

Esto es lo que pediste con "los botones en blanco son para que los ajustes se vean así": FancyMenu permite
re-skinear pantallas vanilla sin tocar sus botones/textos originales, solo cambiándoles el fondo del botón.

1. En el editor, cambiá a la pantalla que quieras re-skinear (por ejemplo `OptionsScreen`).
2. Los botones vanilla de esa pantalla van a aparecer con un contorno editable - click derecho sobre cada
   uno -> **Set custom background** -> elegí `btn_blank_a.png` o `btn_blank_b.png` (usá los dos alternados
   si hay muchos botones, para que no se vea repetitivo).
3. El texto original de Minecraft (ej. "Music & Sounds") se mantiene, solo cambia el fondo del botón.
4. Repetí en las pantallas que quieras (Video Settings, Controls, Resource Packs, etc.) - es la misma idea
   en cada una.

## 5. Bloquear el editor para los jugadores

Una vez que termines de armar todo, para que los jugadores no puedan tocar el editor con el mouse:

Editá `config/fancymenu/options.txt` y poné:
```
modpack_mode = true
```

## 6. Guardar en el pack

Todo lo que armes con el editor queda guardado dentro de `config/fancymenu/` en tu carpeta de juego. Copiá
esa carpeta completa (pisando la que ya está en este repo) y avisame para commitear los cambios - o pegame
los archivos y los subo yo.
