import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary'
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-fira my-4 mx-4  h-10 w-35 transition-all'

  const variants = {
    primary:
      'bg-white text-black hover:bg-gray-200 outline-1 outline-offset-8 outline-white',
  }
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
