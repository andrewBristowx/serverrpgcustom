# Lista final de mods - Somitaw Adventure Pack

Generado a partir de tools/add_log.csv + correcciones manuales tras procesar tools/modlist.txt contra la API de Modrinth/CurseForge. Total de paquetes instalados (mods + resourcepacks): **~226** (después del ajuste de compatibilidad con NeoForge 47.1.106, ver abajo).

## Ajuste de compatibilidad con NeoForge 47.1.106

NeoForge para 1.20.1 se quedó fijo en la build **47.1.106** (esa es la última que existe - el proyecto
siguió actualizando versiones más nuevas de MC en vez de seguir con 1.20.1). Varios mods que habíamos
agregado pedían versiones de **Forge** (el proyecto original, no NeoForge) más nuevas que nunca existieron
para NeoForge, lo que tiraba el juego al arrancar. Se sacaron del pack: Biomes O' Plenty, Immersive
Engineering, Epic Fight, FTB Ranks, Valkyrien Skies (+ Eureka! Ships que depende de él), Whisperwoods,
Macaw's Oh The Biomes We've Gone, Aquamirae, y Create: Central Kitchen. Se corrigieron (bajando a una
versión más vieja compatible) FTB Library, Placebo e Item Filters.

## Rendimiento / núcleo

- Clumps
- Embeddium
- Entity Culling
- Fast Item Frames
- FerriteCore
- ModernFix
- Moonlight Lib
- Oculus
- spark

## KubeJS y librerías de scripting

- Architectury API
- KubeJS
- KubeJS Create

## Sistema de misiones (FTB Quests)

- FTB Quests (NeoForge)
- FTB Library (NeoForge)
- FTB Teams (NeoForge)
- FTB Chunks (NeoForge) — protección/reclamo de terreno, útil para el servidor multijugador
- FTB Quests Freeze Fix — evita cuelgues al abrir el libro de misiones con muchas misiones

*(Nota: estos mods de FTB no están publicados en Modrinth, así que se agregaron vía CurseForge — ver [README.md](README.md))*

## Create y addons

- Alloyed
- AsYasya's Legacy Copper
- Create
- Create Big Cannons
- Create Confectionery
- Create Deco
- Create Jetpack
- Create Ore Excavation
- Create Stuff 'N Additions
- Create: Connected
- Create: Dreams & Desires
- Create: Enchantment Industry
- Create: Garnished
- Create: Interiors
- Create: New Age
- Create: Numismatics
- Create: Steam 'n' Rails
- Immersive Aircraft
- [Create-TACZ]mecharmorer

## Dimensiones / exploración

- Ad Astra
- Atmospheric
- Beautify!
- Beneath
- Blue Skies
- Bluemap x TwilightForest
- Explorer's Compass
- Hexcellent
- Incendium Legacy
- Nyf's Spiders
- Origins (Forge)
- Terralith
- The Aether
- The Undergarden
- When Dungeons Arise

## Enemigos y jefes

- Bare Bones X Alex's Mobs
- Better IceandFire bone swords
- Better Indicators
- Dungeons and Taverns
- Frost King
- L_Ender's Cataclysm
- MSS - Moog's Soaring Structures
- Mine and Slash
- Mutant Monsters
- Primal Winter
- The Endergetic Expansion

## Mascotas y domesticables

- Additional Additions: Vanilla+ QoL; Sniffers; Music; Food
- Fluffy Fur
- Kobolds
- Mizuno's x Letsdo Farm and Charm
- Naturalist
- Tinkers' Construct

## Magia

- Apotheosis
- Ars Creo
- Ars Nouveau
- Botania
- Dark Doppelganger - Irons Spells And Spellbooks Addon
- EvilCraft
- Occultism
- Puffish Skills Leveling

## Armas y combate

- Dungeons Plus
- Medical Remedies (Formerly Marbled's First Aid)
- Silent Gear
- Simply Swords
- Spartan Shields
- Spartan Weaponry
- tetra

## Estructuras y mazmorras

- Dungeon Crawl
- Towns and Towers
- YUNG's Better Dungeons
- YUNG's Better Mineshafts
- YUNG's Better Strongholds
- YUNG's Better Ocean Monuments
- YUNG's Better Nether Fortresses
- YUNG's Bridges
- YUNG's Extras

## Almacenamiento / decoración

- Chipped
- Cooking for Blockheads
- Corpse
- Farmer's Delight
- Farmer's Respite
- Handcrafted
- Macaw's Bridges
- Macaw's Doors
- Macaw's Fences and Walls
- Macaw's Furniture
- Macaw's Paths and Pavings
- Macaw's Roofs
- Macaw's Windows
- Nether's Delight
- Quark
- Sophisticated Backpacks
- Sophisticated Storage
- Supplementaries
- Waystones

## Utilidad / calidad de vida

- AppleSkin
- Balm
- Chunky
- Cloth Config API
- Comforts
- Controlling
- Curios API
- Easy Anvils
- Easy Villagers
- Farsighted Mobs
- Geckolib
- Inventory Profiles Next
- Item Filters
- Jade 🔍
- Just Enough Items (JEI)
- Kotlin for Forge
- Mouse Tweaks
- Not Enough Animations
- Polymorph
- Puzzles Lib
- Reap Mod
- Shulker Box Tooltip
- Structure Compass
- Tom's Simple Storage Mod
- TorchMaster
- TrashSlot
- XP Tome
- Xaero's Minimap
- Xaero's World Map
- YUNG's API

## Tecnología

- Applied Energistics 2
- Create: Power Loader
- Industrial Foregoing
- Mekanism
- Mekanism Generators
- Mekanism Tools
- Modular Routers
- Pipez
- Powah!
- Refined Storage
- Thermal Expansion
- Thermal Foundation
- Thermal Innovation

## Biomas / generación de mundo

- Geophilic
- Majrusz Library
- Majrusz's Progressive Difficulty
- Simple Grass Flowers
- Tectonic
- William Wythers' Overhauled Overworld

## Granjas / comida

- Farming for Blockheads
- Let Me Despawn
- Productive Bees
- Productive Trees
- Utility Golems

## Aventura adicional

- Artifacts
- Bygone Nether
- Caverns & Chasms
- Deep Aether
- Dungeon Now Loading
- From The Fog
- Savage & Ravage
- Underground Villages
- What's That Slot?


## Librerías y dependencias automáticas

Además de lo anterior, packwiz jaló automáticamente ~40 mods de librería que varios de los mods de
arriba necesitan para funcionar (Curios, GeckoLib, Cloth Config, Kotlin for Forge, Balm, Puzzles Lib,
CoFH Core, Caelus, Athena, etc.). No se listan uno por uno porque no los elegiste vos directamente, pero
son necesarios y packwiz los mantiene actualizados igual que al resto.

## Mods candidatos que NO entraron

Algunos mods de la lista original (`tools/modlist.txt`) no tienen versión para 1.20.1/NeoForge, cambiaron
de nombre, o el slug que probé no existía. El detalle completo está en `tools/add_log.csv` (columna
`FAIL` con el motivo). Si alguno te importa en particular, decime cuál y lo reviso a mano.
