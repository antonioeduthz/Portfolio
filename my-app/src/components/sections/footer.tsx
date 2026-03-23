'use client'

import { useState, useEffect } from 'react'

export function Footer({ className = '', ...props }) {
  return (
    <footer
      className={`${className} flex w-full justify-between bg-black px-20`}
    >
      <div>
        <h2 className="font-inter text-2xl">Contact</h2>
        <div className="font-fira">Adicionar o email aqui</div>
      </div>
      <div>
        <h2 className="font-inter text-2xl">Colocar redes sociais</h2>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </footer>
  )
}
