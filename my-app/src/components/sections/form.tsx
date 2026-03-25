'use client'

import { useState, useEffect, ChangeEvent } from 'react'
import { Button } from '../ui/Button'

interface FormData {
  name: string
  email: string
  message: string
}

export function Form({ className = '', ...props }) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
    alert('form enviado')
  }

  return (
    <section className={`${className} max-w-96 p-20`}>
      <h2 className="font-inter pb-5 text-3xl">Contact</h2>
      <form
        action=""
        onSubmit={handleSubmit}
        className="font-fira flex flex-col gap-5"
      >
        <input
          type="text"
          className="border-b border-neutral-500"
          name="name"
          id=""
          value={formData.name}
          placeholder="// Name"
          onChange={handleChange}
        />
        <input
          type="email"
          className="border-b border-neutral-500"
          name="email"
          id=""
          value={formData.email}
          placeholder="// Email"
          onChange={handleChange}
        />

        <textarea
          name="message"
          id=""
          value={formData.message}
          onChange={handleChange}
          className="field-sizing-content resize border-b border-neutral-500"
        ></textarea>
        <Button>Submit ↗</Button>
      </form>
    </section>
  )
}
