#!/bin/bash
cd "C:/Users/somit/Downloads/somitaw"
PW="./tools/packwiz.exe"
LOG="./tools/add_log.csv"
echo "category,slug,status,detail" > "$LOG"

while IFS='|' read -r category slug; do
  # skip comments/blank
  case "$category" in
    \#*|"") continue ;;
  esac
  slug=$(echo "$slug" | tr -d '\r')
  category=$(echo "$category" | tr -d '\r')
  echo "=== [$category] $slug ==="
  out=$("$PW" modrinth add "$slug" -y 2>&1)
  if echo "$out" | grep -qi "successfully added"; then
    detail=$(echo "$out" | grep -i "successfully added" | tail -1 | tr ',' ';')
    echo "$category,$slug,OK,\"$detail\"" >> "$LOG"
  else
    detail=$(echo "$out" | tail -3 | tr '\n' ' ' | tr ',' ';')
    echo "$category,$slug,FAIL,\"$detail\"" >> "$LOG"
  fi
done < ./tools/modlist.txt

echo "DONE"
