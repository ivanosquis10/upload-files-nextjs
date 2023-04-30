'use client'

import Image from 'next/image'
import { useUploadFile } from './hooks/useUploadFile'

export default function Home() {
  const { handleSubmit, handleChange, file } = useUploadFile()

  return (
    <main className='w-full h-screen flex flex-col justify-center items-center'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col w-2/4 border-2 border-dotted p-2'
      >
        <label className='text-3xl font-bold uppercase mb-5'>
          Upload your file
        </label>
        <input
          className=' p-2 bg-slate-800 rounded-lg'
          type='file'
          onChange={handleChange}
        />
        <button
          className='w-full p-2 font-bold bg-slate-800 mt-5 uppercase rounded-lg disabled:opacity-50'
          disabled={!file}
        >
          upload!
        </button>
      </form>
      <div className='w-2/4 mt-4 border-2 border-dotted p-2 flex flex-col items-center'>
        <h2 className='text-xl uppercase font-bold'>Imagen preview</h2>
        {file ? (
          <Image
            width={200}
            height={200}
            src={URL.createObjectURL(file)}
            alt='preview de la imagen a subir'
            className='object-cover mt-2 rounded-md'
          />
        ) : (
          <p className='font-medium mt-2'>
            Sube tu imagen para que la veas aquí!
          </p>
        )}
      </div>
    </main>
  )
}
