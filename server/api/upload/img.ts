import { fileURLToPath } from 'url';
import { defineEventHandler } from 'h3'
import fs from 'fs'
import path, { dirname } from 'path'
import { readFiles } from 'h3-formidable'
import cloudinary from '~~/server/utils/cloudinary';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    return { error: 'Método no permitido' }
  }
  const { files } = await readFiles(event)

  // Asumiendo que 'photo' es el nombre del campo del archivo en el formulario
  const photo = files.photo[0]
  const imageName = `${Date.now()}-${photo.originalFilename}`
  const uploadsDir = path.join(__dirname, 'uploads');
  const newPath = path.join(uploadsDir, imageName);

  // Crea la carpeta 'uploads' si no existe
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  // Mueve el archivo a la carpeta 'uploads'
  const fileData = fs.readFileSync(photo.filepath);
  fs.writeFileSync(newPath, fileData);

  // Retorna la ruta del archivo guardado
  const upload = await cloudinary.uploader.upload(`${newPath}`)

  // Elimina el archivo de la carpeta
  fs.unlinkSync(photo.filepath)

  if(!upload){
    return { error: 'No se pudo subir la imagen' }
  }
  
  return  upload 
})
