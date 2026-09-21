#!/bin/bash
OUT="MODLIST.md"
echo "# Lista final de mods - Somitaw Adventure Pack" > "$OUT"
echo "" >> "$OUT"
echo "Generado a partir de tools/add_log.csv + correcciones manuales tras procesar tools/modlist.txt contra la API de Modrinth/CurseForge. Total de paquetes instalados (mods + resourcepacks): **232**." >> "$OUT"
echo "" >> "$OUT"

print_cat() {
  local title="$1"
  local key="$2"
  echo "## $title" >> "$OUT"
  echo "" >> "$OUT"
  grep "^$key|" tools/cat_title.txt | cut -d'|' -f2 | sort | sed 's/^/- /' >> "$OUT"
  echo "" >> "$OUT"
}

print_cat "Rendimiento / núcleo" "Rendimiento"
print_cat "KubeJS y librerías de scripting" "KubeJS"

echo "## Sistema de misiones (FTB Quests)" >> "$OUT"
echo "" >> "$OUT"
cat >> "$OUT" << 'EOF'
- FTB Quests (NeoForge)
- FTB Library (NeoForge)
- FTB Teams (NeoForge)
- FTB Chunks (NeoForge) — protección/reclamo de terreno, útil para el servidor multijugador
- FTB Ranks (NeoForge) — sistema de nodos de permisos de FTB (independiente del sistema de rango de chat en KubeJS; opcional)
- FTB Quests Freeze Fix — evita cuelgues al abrir el libro de misiones con muchas misiones

*(Nota: estos mods de FTB no están publicados en Modrinth, así que se agregaron vía CurseForge — ver [README.md](README.md))*
EOF
echo "" >> "$OUT"

print_cat "Create y addons" "Create"
print_cat "Dimensiones / exploración" "Dimensiones"
print_cat "Enemigos y jefes" "Enemigos"
print_cat "Mascotas y domesticables" "Mascotas"
print_cat "Magia" "Magia"
print_cat "Armas y combate" "Combate"

echo "## Estructuras y mazmorras" >> "$OUT"
echo "" >> "$OUT"
grep "^Estructuras|" tools/cat_title.txt | cut -d'|' -f2 | sort | sed 's/^/- /' >> "$OUT"
cat >> "$OUT" << 'EOF'
- YUNG's Better Dungeons
- YUNG's Better Mineshafts
- YUNG's Better Strongholds
- YUNG's Better Ocean Monuments
- YUNG's Better Nether Fortresses
- YUNG's Bridges
- YUNG's Extras
EOF
echo "" >> "$OUT"

print_cat "Almacenamiento / decoración" "Decoracion"
print_cat "Utilidad / calidad de vida" "Utilidad"
print_cat "Tecnología" "Tecnologia"
print_cat "Biomas / generación de mundo" "Mundo"
print_cat "Granjas / comida" "Granjas"
print_cat "Aventura adicional" "Aventura"

cat >> "$OUT" << 'EOF'

## Librerías y dependencias automáticas

Además de lo anterior, packwiz jaló automáticamente ~40 mods de librería que varios de los mods de
arriba necesitan para funcionar (Curios, GeckoLib, Cloth Config, Kotlin for Forge, Balm, Puzzles Lib,
CoFH Core, Caelus, Athena, etc.). No se listan uno por uno porque no los elegiste vos directamente, pero
son necesarios y packwiz los mantiene actualizados igual que al resto.

## Mods candidatos que NO entraron

Algunos mods de la lista original (`tools/modlist.txt`) no tienen versión para 1.20.1/NeoForge, cambiaron
de nombre, o el slug que probé no existía. El detalle completo está en `tools/add_log.csv` (columna
`FAIL` con el motivo). Si alguno te importa en particular, decime cuál y lo reviso a mano.
EOF

echo "MODLIST.md generado"
