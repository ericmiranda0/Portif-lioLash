import os
import shutil
from PIL import Image
import pillow_heif

# Registrar o leitor de HEIF na Pillow
pillow_heif.register_heif_opener()

print("Iniciando organização e conversão de imagens...")

# Dicionários de mapeamento
portfolio_mapping = {
    "depois 02 princesa .HEIC": "princesa_1.jpg",
    "modelo 02 - olho princesa 3d.HEIC": "princesa_2.jpg",
    "modelo 02 princesa.HEIC": "princesa_3.jpg",
    "modelo 01 brasileiro  2d.HEIC": "brasileiro_1.jpg",
    "modelo 03 egipcio olho.HEIC": "egipcio_1.jpg",
    "modelo 03 egipicio 4d .HEIC": "egipcio_2.jpg",
    "modelo 03 egipicio 4d.HEIC": "egipcio_3.jpg",
    "modelo 03 egipcio olho 4d.HEIC.HEIC": "egipcio_4.jpg"
}

profissional_mapping = {
    "kaylana profissiona 1.jpeg": "kaylana_1.jpg",
    "IMG_8367.JPG.jpeg": "kaylana_1_alt.jpg", # É idêntica à 1, salvamos com nome alt
    "kaylana profissiona 2.jpeg": "kaylana_2.jpg",
    "kaylana profissiona 3.jpeg": "kaylana_3.jpg",
    "kaylana profissiona 4.jpeg": "kaylana_4.jpg",
    "kaylana profissiona.JPG.jpeg": "kaylana_principal.jpg"
}

# 1. Copiar/Mover o Logo
logo_src = "logo.png"
logo_dest = os.path.join("assets", "img", "logo.png")
if os.path.exists(logo_src):
    shutil.copy(logo_src, logo_dest)
    print(f"Logo copiado para: {logo_dest}")

# 2. Processar Fotos Profissionais (JPEGs)
for src_name, dest_name in profissional_mapping.items():
    if os.path.exists(src_name):
        dest_path = os.path.join("assets", "img", "profissional", dest_name)
        # Como já são JPEGs, abrimos e salvamos para padronizar e rotacionar se necessário
        try:
            with Image.open(src_name) as img:
                img.save(dest_path, "JPEG", quality=95)
            print(f"Foto profissional processada: {src_name} -> {dest_path}")
        except Exception as e:
            print(f"Erro ao processar {src_name}: {e}")

# 3. Converter e organizar Fotos de Portfólio (HEIC)
for src_name, dest_name in portfolio_mapping.items():
    if os.path.exists(src_name):
        dest_path = os.path.join("assets", "img", "portfolio", dest_name)
        try:
            # Abrir o arquivo HEIC
            with Image.open(src_name) as img:
                # Converter para RGB antes de salvar como JPEG
                rgb_img = img.convert("RGB")
                rgb_img.save(dest_path, "JPEG", quality=95)
            print(f"Convertido HEIC para JPEG: {src_name} -> {dest_path}")
        except Exception as e:
            print(f"Erro ao converter {src_name}: {e}")

# 4. Mover arquivos originais soltos para 'arquivos_originais' para limpar a raiz
print("\nMovendo arquivos originais soltos para a pasta 'arquivos_originais'...")
all_sources = list(portfolio_mapping.keys()) + list(profissional_mapping.keys()) + [logo_src]

for file_name in all_sources:
    if os.path.exists(file_name):
        dest_path = os.path.join("arquivos_originais", file_name)
        try:
            shutil.move(file_name, dest_path)
            print(f"Movido para originais: {file_name}")
        except Exception as e:
            print(f"Erro ao mover {file_name}: {e}")

print("\nProcesso concluído com sucesso!")
