import React from 'react'

export default function ContactForm() {

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData();
    
        formData.append('title', title)
        formData.append('content', content)
        formData.append('image', imageInput.current.files[0])
        formData.append('category', category)
    
        try {
          const { data } = await axiosReq.post('/blogposts/', formData);
          navigate(`/posts/${data.id}`)
        } catch (err) {
          console.log(err)
          if (err.response?.status !== 401) {
            setErrors(err.response?.data);
          }
        }
      }


  return (
    <h1>Helloooo Contact form</h1>
  )
}