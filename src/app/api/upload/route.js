import { writeFile } from 'fs/promises'
import { NextResponse } from 'next/server'
import path from 'path'

export async function POST(request) {
  try {
    // obtenemos la data que viene en el body de la peticion post
    const data = await request.formData()

    // obtenemos el nombre del archivo
    const file = data.get('file')

    // en estas dos lineas de codigo se hacen conversiones para que se puedan leer los documentos que se subieron
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const filePath = path.join(process.cwd(), 'public', file.name) // escribimos el path a donde se va a guardar el archivo subido
    await writeFile(filePath, buffer) // luego con este metodo lo utilizamos para que se guarde en la direccion puesta anteriormente
    console.log(`open ${filePath} to see the uploaded file`)

    return new Response(
      JSON.stringify({
        message: 'subiendo archivo',
      })
    )
  } catch (error) {
    return NextResponse.json(
      JSON.stringify({
        message: 'No file',
      }),
      {
        status: 400,
      }
    )
  }
}
