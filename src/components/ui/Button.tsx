import type { ComponentPropsWithRef } from 'react'

import './styles/button.css'

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
  const classes = ['button', `button--${variant}`, className].filter(Boolean).join(' ')

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}