# Diseño del libro de misiones (FTB Quests)

El modpack ya trae **FTB Quests** instalado para el sistema de progresión guiada.

## Actualización: ya hay misiones reales cargadas

En `config/ftbquests/quests/` ya hay **6 capítulos con 22 misiones jugables** (Tutorial, Create, Bosque
Crepuscular, Bestiario, Compañeros, Ars Nouveau), escritas a mano usando IDs de item/entidad **verificados
de verdad**: bajé los `.jar` de Create, Twilight Forest, Alex's Mobs, Ice and Fire y Ars Nouveau y saqué los
IDs reales de sus archivos `lang/en_us.json` (no adiviné ningún nombre de item). El formato SNBT también lo
verifiqué contra un pack público real (Enigmatica 6) antes de escribir nada, así que debería cargar sin
romper el libro - igual no pude abrir Minecraft acá para confirmarlo en vivo, así que si al entrar ves un
error en el libro de misiones, pegame el log de la consola.

Lo que queda del documento de abajo es la estructura pensada para el resto de mods que **todavía no tienen
misiones escritas** (Aether, Ad Astra, Cataclysm, Mowzie's Mobs, etc.) - constrúyelas en el editor in-game
(`/ftbquests edit_mode true`) siguiendo la misma lógica de progresión, o pedime que agregue más capítulos
y repito el mismo proceso (bajar el jar, sacar IDs reales, escribir el SNBT).

## Por qué el resto sigue siendo un documento de diseño

FTB Quests guarda cada misión con un ID hexadecimal único y referencias exactas a los items de cada mod.
Esos IDs solo los puedo verificar bajando el `.jar` real del mod e inspeccionando su archivo de idioma (como
hice arriba) - es mucho trabajo por mod, así que para el resto del pack te dejo la **estructura ya pensada**
(capítulos, orden, qué debe desbloquear qué) en vez de escribir 200 mods de misiones a ciegas.

Si en algún momento me pegas errores de consola o capturas del editor, puedo ayudarte a ajustar misiones
puntuales con IDs reales.

## Cómo activar el modo edición

```
/ftbquests edit_mode true
```

Abre el libro (tecla por defecto `K` o desde el inventario) y aparecerá el botón de editor.

## Estructura de grupos y capítulos propuesta

### Grupo 0 - Tutorial (obligatorio, sin gating)
1. **Bienvenida** - explica el pack, comandos de rango (`/rank get`), y cómo abrir el libro.
2. **Lo básico** - conseguir madera, picota de piedra, horno. Recompensa: un cofre de inicio con comida.

### Grupo 1 - Create (núcleo del pack)
1. **Fundamentos de Create** - conseguir Andesite Alloy, construir una prensa mecánica básica.
2. **Movimiento y potencia** - ejes, ruedas de agua/molino de viento, engranajes.
3. **Automatización básica** - embudos mecánicos, contraptions simples (carro con pistón).
4. **Create: Crafts & Additions / Deco** - desbloquea tras completar "Automatización básica".
5. **Trenes (Steam 'n' Rails)** - desbloquea tras tener una fábrica funcional; construir la primera vía y tren.
6. **Create avanzado** - Big Cannons, Numismatics, Arcane Engineering (si se usa con magia) como sub-ramas
   opcionales, no obligatorias para progresar.

### Grupo 2 - Exploración: El Overworld expandido
1. **Terralith / biomas nuevos** - visitar 3 biomas nuevos.
2. **Estructuras** - completar una mazmorra generada por YUNG's / When Dungeons Arise.
3. **Graveyard / Undergarden** - acceso a la dimensión subterránea alternativa.

Gating sugerido: se desbloquea después de "Automatización básica" de Create, para que el jugador ya tenga
herramientas decentes antes de explorar zonas peligrosas.

### Grupo 3 - Dimensiones mayores
1. **Twilight Forest** - construir el portal, derrotar al primer jefe (Naga o Lich según ruta).
2. **The Aether / Blue Skies** - construir el portal correspondiente.
3. **Ad Astra** - llegar al espacio (requiere cohete, buena etapa final de progresión tech).
4. **Deeper & Darker** - explorar la variante ampliada del Deep Dark.

Gating sugerido: cada dimensión es una rama independiente que parte del mismo nodo "Grupo 2 completado" -
no hace falta hacerlas en orden estricto entre sí, pero sí después de tener equipo básico de combate.

### Grupo 4 - Combate y jefes
1. **Primeras bestias** - cazar 3 criaturas de Alex's Mobs.
2. **Mowzie's Mobs** - derrotar a Umvuthana o Frostmaw.
3. **Cataclysm** - derrotar al primer jefe menor (ej. Ignis o The Harbinger según versión instalada).
4. **Ice and Fire: dragones** - derrotar o domesticar un dragón (conecta con el Grupo 5 de mascotas).
5. **Bosses of Mass Destruction** - contenido de endgame, desbloqueado solo tras completar al menos 2
   dimensiones del Grupo 3.

### Grupo 5 - Mascotas y compañeros
1. **Primer compañero** - domesticar cualquier criatura domesticable de Alex's Mobs.
2. **Jinetes** - domesticar y montar una criatura montable (dragón de Ice and Fire, o equivalente).
3. **Criadero** - reproducir una pareja de criaturas domesticadas.

### Grupo 6 - Magia (rama opcional, paralela a Create)
1. **Ars Nouveau: fundamentos** - primer glyph y primera fuente (Arcane Wellspring).
2. **Iron's Spells 'n Spellbooks** - conseguir el primer grimorio y lanzar un hechizo.
3. **Fusión con Create** - usar Create: Arcane Engineering para combinar ambos sistemas.

### Grupo 7 - Endgame / metas del pack
1. Completar al menos una dimensión de cada grupo de exploración.
2. Derrotar 3 jefes distintos del Grupo 4.
3. Tener un compañero criado (Grupo 5).
4. Misión final: construir una base con al menos una línea de tren de Create conectando 2 dimensiones
   (portal + estación).

## Recompensas sugeridas por tipo de misión

| Tipo de misión                  | Recompensa sugerida                                  |
|----------------------------------|-------------------------------------------------------|
| Tutorial / primeros pasos        | Comida, herramientas básicas                          |
| Automatización de Create         | XP, un ítem raro de decoración de Create               |
| Primera vez en una dimensión     | Mapa/waystone gratis cerca del portal                  |
| Derrotar un jefe                 | Loot bag temático + puntos de "prestigio" (ver abajo)  |
| Domesticar/criar mascota          | Item cosmético o accesorio para esa criatura            |
| Grupo 7 (endgame)                 | Rango cosmético especial vía `/rank set` (ver README)  |

## Conectar el rango con el progreso (opcional, vía KubeJS)

Si más adelante quieres que completar el Grupo 7 le dé automáticamente al jugador un rango visual especial
(por ejemplo "Leyenda"), puedo escribir un script en `kubejs/server_scripts/` que escuche el evento de
misión completada de FTB Quests y llame internamente a la misma lógica de `/rank set`. Dímelo cuando tengas
el libro construido y el ID de esa misión final, y lo conecto.
