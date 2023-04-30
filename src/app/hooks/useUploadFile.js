import { useState } from 'react'

export const useUploadFile = () => {
  const [file, setFile] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()

    if (!file) return alert('por favor agrega un archivo :D')

    try {
      // antes de enviar los datos tenemos que meter la info dentro un formdata
      const formInfo = new FormData()
      formInfo.set('file', file)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formInfo,
      })

      if (res.ok) {
        return alert('subido correctamente')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = e => {
    setFile(e.target.files[0])
  }

  return { file, handleSubmit, handleChange }
}
