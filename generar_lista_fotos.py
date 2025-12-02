#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para generar automaticamente la lista de fotos en selector.js
Uso: python generar_lista_fotos.py

Este script:
1. Escanea el directorio D:\XV Añera 22112025 Arturo en busca de archivos de imagen
2. Copia las fotos al directorio images/ del proyecto (si no existen)
3. Genera la lista de rutas de fotos
4. Actualiza el archivo js/selector.js con la nueva lista
"""

import os
import re
import shutil
from pathlib import Path

# Configuracion
SOURCE_IMAGES_DIR = r"D:\XV Añera 22112025 Arturo"
DEST_IMAGES_DIR = "images"
SELECTOR_JS = "js/selector.js"
SUPPORTED_FORMATS = {'.jpg', '.jpeg', '.png', '.webp', '.gif', '.JPG', '.JPEG', '.PNG', '.WEBP', '.GIF'}

def find_images(directory):
    """
    Encuentra todas las imagenes en el directorio especificado.
    Retorna una lista ordenada de rutas absolutas.
    """
    images = []

    if not os.path.exists(directory):
        print(f"[ERROR] El directorio '{directory}' no existe.")
        return images

    # Recorrer el directorio y subdirectorios
    for root, dirs, files in os.walk(directory):
        for file in files:
            if Path(file).suffix in SUPPORTED_FORMATS:
                # Crear ruta absoluta
                abs_path = os.path.join(root, file)
                images.append(abs_path)

    # Ordenar las imagenes
    images.sort()

    return images

def copy_images_to_project(source_images):
    """
    Copia las imagenes desde el directorio fuente al directorio images/ del proyecto.
    Retorna una lista de rutas relativas.
    """
    if not os.path.exists(DEST_IMAGES_DIR):
        print(f"[INFO] Creando directorio '{DEST_IMAGES_DIR}'...")
        os.makedirs(DEST_IMAGES_DIR, exist_ok=True)

    relative_paths = []
    copied_count = 0
    skipped_count = 0

    for source_path in source_images:
        # Obtener solo el nombre del archivo
        filename = os.path.basename(source_path)
        dest_path = os.path.join(DEST_IMAGES_DIR, filename)

        # Copiar solo si no existe
        if not os.path.exists(dest_path):
            try:
                shutil.copy2(source_path, dest_path)
                copied_count += 1
                print(f"[COPY] {filename}")
            except Exception as e:
                print(f"[ERROR] No se pudo copiar {filename}: {e}")
                continue
        else:
            skipped_count += 1

        # Agregar ruta relativa
        relative_paths.append(dest_path.replace('\\', '/'))

    print(f"\n[INFO] Copiadas: {copied_count} fotos")
    print(f"[INFO] Ya existian: {skipped_count} fotos")

    return relative_paths

def format_photos_array(images):
    """
    Formatea la lista de imagenes como array de JavaScript.
    """
    if not images:
        return "const photos = [\n    // Las fotos se listaran aqui automaticamente\n    // Ejemplo: 'images/foto001.jpg', 'images/foto002.jpg', etc.\n];"

    lines = ["const photos = ["]

    for i, img in enumerate(images):
        # Agregar coma excepto en el ultimo elemento
        comma = "," if i < len(images) - 1 else ""
        lines.append(f"    '{img}'{comma}")

    lines.append("];")

    return "\n".join(lines)

def update_selector_js(photos_array):
    """
    Actualiza el archivo selector.js con la nueva lista de fotos.
    """
    if not os.path.exists(SELECTOR_JS):
        print(f"[ERROR] El archivo '{SELECTOR_JS}' no existe.")
        return False

    # Leer el archivo actual
    with open(SELECTOR_JS, 'r', encoding='utf-8') as f:
        content = f.read()

    # Reemplazar el array de fotos usando regex
    # Busca desde "const photos = [" hasta el primer "];" que encuentre
    pattern = r'const photos = \[[\s\S]*?\];'

    if not re.search(pattern, content):
        print(f"[ERROR] No se encontro el array 'photos' en {SELECTOR_JS}")
        return False

    # Reemplazar
    new_content = re.sub(pattern, photos_array, content, count=1)

    # Guardar el archivo actualizado
    with open(SELECTOR_JS, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True

def main():
    """
    Funcion principal del script.
    """
    print("=" * 60)
    print("  GENERADOR DE LISTA DE FOTOS")
    print("  XV Años Andrea Noemí Hernández Soto")
    print("=" * 60)
    print()

    # Buscar imagenes en el directorio fuente
    print(f"[INFO] Buscando imagenes en '{SOURCE_IMAGES_DIR}'...")
    source_images = find_images(SOURCE_IMAGES_DIR)

    if not source_images:
        print(f"[WARN] No se encontraron imagenes en '{SOURCE_IMAGES_DIR}'")
        print()
        print("[INFO] Instrucciones:")
        print(f"   1. Verifica que las fotos estén en '{SOURCE_IMAGES_DIR}'")
        print(f"   2. Formatos soportados: {', '.join(SUPPORTED_FORMATS)}")
        print(f"   3. Ejecuta este script nuevamente")
        print()
        return

    print(f"[OK] Se encontraron {len(source_images)} imagenes en el directorio fuente")
    print()

    # Copiar imagenes al proyecto
    print(f"[INFO] Copiando imagenes a '{DEST_IMAGES_DIR}'...")
    images = copy_images_to_project(source_images)
    print()

    if not images:
        print("[ERROR] No se pudieron copiar las imagenes")
        return

    # Mostrar algunas fotos de ejemplo
    print("[INFO] Primeras 5 fotos en el proyecto:")
    for i, img in enumerate(images[:5], 1):
        print(f"   {i}. {img}")

    if len(images) > 5:
        print(f"   ... y {len(images) - 5} mas")
    print()

    # Generar array de JavaScript
    photos_array = format_photos_array(images)

    # Actualizar selector.js
    print(f"[INFO] Actualizando '{SELECTOR_JS}'...")
    if update_selector_js(photos_array):
        print(f"[OK] Listo! El selector ha sido actualizado con {len(images)} fotos")
        print()
        print("[NEXT] Proximos pasos:")
        print("   1. Abre selector.html en tu navegador")
        print("   2. Selecciona las fotos para ampliacion, impresion, etc.")
        print("   3. Descarga el reporte JSON con tus selecciones")
    else:
        print("[ERROR] Error al actualizar el archivo")

    print()
    print("=" * 60)

if __name__ == "__main__":
    main()
