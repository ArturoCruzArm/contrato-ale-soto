#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para copiar las fotos seleccionadas en formato JPEG
"""

import sys
import os

# Configurar codificación UTF-8 para la salida
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass

from PIL import Image

# Lista de fotos del selector.js (en el mismo orden)
photos = [
    'images/DSC_0698.webp',
    'images/DSC_0699.webp',
    'images/DSC_0703.webp',
    'images/DSC_0704.webp',
    'images/DSC_0705.webp',
    'images/DSC_0707.webp',
    'images/DSC_0709.webp',
    'images/DSC_0711.webp',
    'images/DSC_0716.webp',
    'images/DSC_0717.webp',
    'images/DSC_0722.webp',
    'images/DSC_0723.webp',
    'images/DSC_0724.webp',
    'images/DSC_0725.webp',
    'images/DSC_0726.webp',
    'images/DSC_0728.webp',
    'images/DSC_0730.webp',
    'images/DSC_0731.webp',
    'images/DSC_0732.webp',
    'images/DSC_0733.webp',
    'images/DSC_0734.webp',
    'images/DSC_0735.webp',
    'images/DSC_0736.webp',
    'images/DSC_0737.webp',
    'images/DSC_0738.webp',
    'images/DSC_0739.webp',
    'images/DSC_0740.webp',
    'images/DSC_0741.webp',
    'images/DSC_0742.webp',
    'images/DSC_0743.webp',
    'images/DSC_0745.webp',
    'images/DSC_0746.webp',
    'images/DSC_0747.webp',
    'images/DSC_0748.webp',
    'images/DSC_0749.webp',
    'images/DSC_0750.webp',
    'images/DSC_0752.webp',
    'images/DSC_0753.webp',
    'images/DSC_0754.webp',
    'images/DSC_0756.webp',
    'images/DSC_0758.webp',
    'images/DSC_0759.webp',
    'images/DSC_0760.webp',
    'images/DSC_0761.webp',
    'images/DSC_0762.webp',
    'images/DSC_0765.webp',
    'images/DSC_0766.webp',
    'images/DSC_0768.webp',
    'images/DSC_0769.webp',
    'images/DSC_0770.webp',
    'images/DSC_0771.webp',
    'images/DSC_0774.webp',
    'images/DSC_0775.webp',
    'images/DSC_0776.webp',
    'images/DSC_0777.webp',
    'images/DSC_0778.webp',
    'images/DSC_0780.webp',
    'images/DSC_0781.webp',
    'images/DSC_0783.webp',
    'images/DSC_0784.webp',
    'images/DSC_0785.webp',
    'images/DSC_0786.webp',
    'images/DSC_0788.webp',
    'images/DSC_0790.webp',
    'images/DSC_0794.webp',
    'images/DSC_0795.webp',
    'images/DSC_0796.webp',
    'images/DSC_0797.webp',
    'images/DSC_0799.webp',
    'images/DSC_0800.webp',
    'images/DSC_0801.webp',
    'images/DSC_0802.webp',
    'images/DSC_0803.webp',
    'images/DSC_0804.webp',
    'images/DSC_0805.webp',
    'images/DSC_0806.webp',
    'images/DSC_0807.webp',
    'images/DSC_0808.webp',
    'images/DSC_0809.webp',
    'images/DSC_0810.webp',
    'images/DSC_0811.webp',
    'images/DSC_0812.webp',
    'images/DSC_0813.webp',
    'images/DSC_0814.webp',
    'images/DSC_0815.webp',
    'images/DSC_0816.webp',
    'images/DSC_0817.webp',
    'images/DSC_0818.webp',
    'images/DSC_0819.webp',
    'images/DSC_0820.webp',
    'images/DSC_0821.webp',
    'images/DSC_0822.webp',
    'images/DSC_0823.webp',
    'images/DSC_0824.webp',
    'images/DSC_0825.webp',
    'images/DSC_0826.webp',
    'images/DSC_0827.webp',
    'images/DSC_0828.webp',
    'images/DSC_0829.webp',
    'images/DSC_0830.webp',
    'images/DSC_0831.webp',
    'images/DSC_0832.webp',
    'images/DSC_0833.webp',
    'images/DSC_0834.webp',
    'images/DSC_0835.webp',
    'images/DSC_0836.webp',
    'images/DSC_0837.webp',
    'images/DSC_0838.webp',
    'images/DSC_0839.webp',
    'images/DSC_0840.webp',
    'images/DSC_0841.webp',
    'images/DSC_0842.webp',
    'images/DSC_0843.webp',
    'images/DSC_0844.webp',
    'images/DSC_0845.webp',
    'images/DSC_0846.webp',
    'images/DSC_0847.webp',
    'images/DSC_0848.webp',
    'images/DSC_0849.webp',
    'images/DSC_0850.webp',
    'images/DSC_0851.webp',
    'images/DSC_0852.webp',
    'images/DSC_0853.webp',
    'images/DSC_0854.webp',
    'images/DSC_0855.webp',
    'images/DSC_0856.webp',
    'images/DSC_0857.webp',
    'images/DSC_0858.webp',
    'images/DSC_0859.webp',
    'images/DSC_0860.webp',
    'images/DSC_0861.webp',
    'images/DSC_0862.webp',
    'images/DSC_0863.webp',
    'images/DSC_0864.webp',
    'images/DSC_0865.webp',
    'images/DSC_0866.webp',
    'images/DSC_0867.webp',
    'images/DSC_0868.webp',
    'images/DSC_0869.webp',
    'images/DSC_0870.webp',
    'images/DSC_0871.webp',
    'images/DSC_0872.webp',
    'images/DSC_0873.webp',
    'images/DSC_0874.webp',
    'images/DSC_0875.webp',
    'images/DSC_0876.webp',
    'images/DSC_0877.webp',
    'images/DSC_0878.webp',
    'images/DSC_0879.webp',
    'images/DSC_0880.webp',
    'images/DSC_0881.webp',
    'images/DSC_0882.webp',
    'images/DSC_0883.webp',
    'images/DSC_0884.webp',
    'images/DSC_0885.webp',
    'images/DSC_0886.webp',
    'images/DSC_0887.webp',
    'images/DSC_0888.webp',
    'images/DSC_0889.webp',
    'images/DSC_0890.webp',
    'images/DSC_0891.webp',
    'images/DSC_0892.webp',
    'images/DSC_0893.webp',
    'images/DSC_0894.webp',
    'images/DSC_0895.webp',
    'images/DSC_0896.webp',
    'images/DSC_0897.webp',
    'images/DSC_0898.webp',
    'images/DSC_0899.webp',
    'images/DSC_0900.webp',
    'images/DSC_0901.webp',
    'images/DSC_0902.webp',
    'images/DSC_0903.webp',
    'images/DSC_0904.webp',
    'images/DSC_0905.webp',
    'images/DSC_0906.webp',
    'images/DSC_0907.webp',
    'images/DSC_0908.webp',
    'images/DSC_0909.webp',
    'images/DSC_0910.webp',
    'images/DSC_0911.webp',
    'images/DSC_0912.webp',
    'images/DSC_0913.webp',
    'images/DSC_0914.webp',
    'images/DSC_0915.webp',
    'images/DSC_0916.webp',
    'images/DSC_0917.webp',
    'images/DSC_0918.webp',
    'images/DSC_0919.webp',
    'images/DSC_0920.webp',
    'images/DSC_0921.webp',
    'images/DSC_0922.webp',
    'images/DSC_0923.webp',
    'images/DSC_0924.webp',
    'images/DSC_0925.webp',
    'images/DSC_0926.webp',
    'images/DSC_0927.webp',
    'images/DSC_0928.webp',
    'images/DSC_0929.webp',
    'images/DSC_0930.webp',
    'images/DSC_0931.webp',
    'images/DSC_0932.webp',
    'images/DSC_0933.webp',
    'images/DSC_0934.webp',
    'images/DSC_0935.webp',
    'images/DSC_0936.webp',
    'images/DSC_0937.webp',
    'images/DSC_0938.webp',
    'images/DSC_0939.webp',
    'images/DSC_0940.webp',
    'images/DSC_0941.webp',
    'images/DSC_0942.webp',
    'images/DSC_0943.webp',
    'images/DSC_0944.webp',
    'images/DSC_0945.webp',
    'images/DSC_0946.webp',
    'images/DSC_0947.webp',
    'images/DSC_0948.webp',
    'images/DSC_0949.webp',
    'images/DSC_0950.webp',
    'images/DSC_0951.webp',
    'images/DSC_0952.webp',
    'images/DSC_0953.webp',
    'images/DSC_0954.webp',
    'images/DSC_0955.webp',
    'images/DSC_0956.webp',
    'images/DSC_0957.webp',
    'images/DSC_0958.webp',
    'images/DSC_0961.webp',
    'images/DSC_0962.webp',
    'images/DSC_0963.webp',
    'images/DSC_0964.webp',
    'images/DSC_0965.webp',
    'images/DSC_0966.webp',
    'images/DSC_0967.webp',
    'images/DSC_0968.webp',
    'images/DSC_0969.webp',
    'images/DSC_0970.webp',
    'images/DSC_0971.webp',
    'images/DSC_0972.webp',
    'images/DSC_0973.webp',
    'images/DSC_0974.webp',
    'images/DSC_0975.webp',
    'images/DSC_0976.webp',
    'images/DSC_0977.webp',
    'images/DSC_0978.webp',
    'images/DSC_0979.webp',
    'images/DSC_0980.webp',
    'images/DSC_0981.webp',
    'images/DSC_0982.webp',
    'images/DSC_0983.webp',
    'images/DSC_0984.webp',
    'images/DSC_0985.webp',
    'images/DSC_0986.webp',
    'images/DSC_0987.webp',
    'images/DSC_0988.webp',
    'images/DSC_0989.webp',
    'images/DSC_0990.webp',
    'images/DSC_0991.webp',
    'images/DSC_0992.webp',
    'images/DSC_0993.webp',
    'images/DSC_0994.webp',
    'images/DSC_0995.webp',
    'images/DSC_0996.webp',
    'images/DSC_0997.webp',
    'images/DSC_0998.webp',
    'images/DSC_0999.webp',
    'images/DSC_1000.webp',
    'images/DSC_1001.webp',
    'images/DSC_1002.webp',
    'images/DSC_1003.webp',
    'images/DSC_1004.webp',
    'images/DSC_1005.webp',
    'images/DSC_1006.webp',
    'images/DSC_1007.webp',
    'images/DSC_1008.webp',
    'images/DSC_1009.webp',
    'images/DSC_1010.webp',
    'images/DSC_1011.webp',
    'images/DSC_1012.webp',
    'images/DSC_1013.webp',
    'images/DSC_1014.webp',
    'images/DSC_1015.webp',
    'images/DSC_1016.webp',
    'images/DSC_1017.webp',
    'images/DSC_1018.webp',
    'images/DSC_1019.webp',
    'images/DSC_1020.webp',
    'images/DSC_1021.webp',
    'images/DSC_1022.webp',
    'images/DSC_1023.webp',
    'images/DSC_1024.webp',
    'images/DSC_1025.webp',
    'images/DSC_1026.webp',
    'images/DSC_1027.webp',
    'images/DSC_1028.webp',
    'images/DSC_1029.webp',
    'images/DSC_1030.webp',
    'images/DSC_1033.webp',
    'images/DSC_1034.webp',
    'images/DSC_1035.webp',
    'images/DSC_1036.webp',
    'images/DSC_1037.webp',
    'images/DSC_1038.webp',
    'images/DSC_1039.webp',
    'images/DSC_1040.webp',
    'images/DSC_1041.webp',
    'images/DSC_1042.webp',
    'images/DSC_1043.webp',
    'images/DSC_1044.webp',
    'images/DSC_1045.webp',
    'images/DSC_1046.webp',
    'images/DSC_1047.webp',
    'images/DSC_1048.webp',
    'images/DSC_1049.webp',
    'images/DSC_1050.webp',
    'images/DSC_1051.webp',
    'images/DSC_1052.webp',
    'images/DSC_1053.webp',
    'images/DSC_1054.webp',
    'images/DSC_1055.webp',
    'images/DSC_1056.webp',
    'images/DSC_1057.webp',
    'images/DSC_1058.webp',
    'images/DSC_1059.webp',
    'images/DSC_1060.webp',
    'images/DSC_1061.webp',
    'images/DSC_1062.webp',
    'images/DSC_1063.webp',
    'images/DSC_1064.webp',
    'images/DSC_1065.webp',
    'images/DSC_1066.webp',
    'images/DSC_1067.webp',
    'images/DSC_1068.webp',
    'images/DSC_1069.webp',
    'images/DSC_1070.webp',
    'images/DSC_1071.webp',
    'images/DSC_1072.webp',
    'images/DSC_1073.webp',
    'images/DSC_1074.webp',
    'images/DSC_1075.webp',
    'images/DSC_1076.webp',
    'images/DSC_1077.webp',
    'images/DSC_1078.webp',
    'images/DSC_1079.webp',
    'images/DSC_1080.webp',
    'images/DSC_1081.webp',
    'images/DSC_1082.webp',
    'images/DSC_1083.webp',
    'images/DSC_1084.webp',
    'images/DSC_1085.webp',
    'images/DSC_1086.webp',
    'images/DSC_1087.webp',
    'images/DSC_1088.webp',
    'images/DSC_1089.webp',
    'images/DSC_1090.webp',
    'images/DSC_1091.webp',
    'images/DSC_1092.webp',
    'images/DSC_1093.webp'
]

# Fotos para ampliación
ampliacion = [162]

# Fotos para impresión
impresion = [2, 4, 6, 9, 11, 14, 15, 17, 19, 31, 34, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 47, 48, 49, 51, 54, 56, 57, 59, 60, 65, 68, 78, 79, 91, 93, 98, 103, 106, 108, 111, 116, 119, 120, 129, 134, 140, 142, 143, 145, 158, 161, 169, 174, 176, 178, 180, 183, 187, 189, 192, 194, 197, 199, 201, 203, 207, 214, 234, 261, 279, 282, 285, 288, 289, 292, 309, 320, 322, 338, 341, 344, 346]

# Combinar todas las selecciones
seleccionadas = set(ampliacion + impresion)

# Directorio de destino
destino = r"F:\2025\11\22\alesoto"

# Crear subdirectorios
os.makedirs(os.path.join(destino, "ampliacion"), exist_ok=True)
os.makedirs(os.path.join(destino, "impresion"), exist_ok=True)

print(f"Total de fotos seleccionadas: {len(seleccionadas)}")
print(f"Fotos para ampliación: {len(ampliacion)}")
print(f"Fotos para impresión: {len(impresion)}")
print()

contador = 0
errores = []

# Procesar fotos para ampliación
for num_foto in ampliacion:
    try:
        # Convertir número de foto a índice (1-indexed a 0-indexed)
        index = num_foto - 1

        if index < 0 or index >= len(photos):
            print(f"⚠️  Foto {num_foto} fuera de rango")
            errores.append(f"Foto {num_foto}: fuera de rango")
            continue

        # Obtener ruta de la foto
        foto_webp = photos[index]
        nombre_archivo = os.path.basename(foto_webp).replace('.webp', '')

        # Rutas
        origen = foto_webp
        destino_jpeg = os.path.join(destino, "ampliacion", f"{nombre_archivo}.jpg")

        # Convertir WebP a JPEG
        print(f"Procesando foto {num_foto} para AMPLIACIÓN: {nombre_archivo}")
        img = Image.open(origen)

        # Convertir RGBA a RGB si es necesario
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
            img = background

        # Guardar como JPEG con alta calidad
        img.save(destino_jpeg, 'JPEG', quality=95)
        contador += 1
        print(f"✓ Copiada: {nombre_archivo}.jpg (ampliación)")

    except Exception as e:
        print(f"✗ Error procesando foto {num_foto}: {str(e)}")
        errores.append(f"Foto {num_foto}: {str(e)}")

# Procesar fotos para impresión
for num_foto in impresion:
    try:
        # Convertir número de foto a índice
        index = num_foto - 1

        if index < 0 or index >= len(photos):
            print(f"⚠️  Foto {num_foto} fuera de rango")
            errores.append(f"Foto {num_foto}: fuera de rango")
            continue

        # Obtener ruta de la foto
        foto_webp = photos[index]
        nombre_archivo = os.path.basename(foto_webp).replace('.webp', '')

        # Rutas
        origen = foto_webp
        destino_jpeg = os.path.join(destino, "impresion", f"{nombre_archivo}.jpg")

        # Convertir WebP a JPEG
        print(f"Procesando foto {num_foto} para IMPRESIÓN: {nombre_archivo}")
        img = Image.open(origen)

        # Convertir RGBA a RGB si es necesario
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
            img = background

        # Guardar como JPEG con alta calidad
        img.save(destino_jpeg, 'JPEG', quality=95)
        contador += 1
        print(f"✓ Copiada: {nombre_archivo}.jpg (impresión)")

    except Exception as e:
        print(f"✗ Error procesando foto {num_foto}: {str(e)}")
        errores.append(f"Foto {num_foto}: {str(e)}")

print()
print("=" * 60)
print(f"Proceso completado!")
print(f"Fotos procesadas exitosamente: {contador}/{len(seleccionadas)}")
print(f"Errores: {len(errores)}")

if errores:
    print("\nErrores encontrados:")
    for error in errores:
        print(f"  - {error}")
else:
    print("\n✓ Todas las fotos fueron procesadas correctamente!")

print(f"\nLas fotos están en:")
print(f"  - Ampliación: {os.path.join(destino, 'ampliacion')}")
print(f"  - Impresión: {os.path.join(destino, 'impresion')}")
