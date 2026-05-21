import * as React from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  asChild?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent hover:-translate-y-0.5 active:translate-y-0',
  ghost:
    'text-primary hover:bg-primary/10 bg-transparent hover:-translate-y-0.5 active:translate-y-0',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm:  'px-4 py-2 text-sm',
  md:  'px-6 py-3 text-sm',
  lg:  'px-8 py-4 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  asChild,
  ...props
}: ButtonProps) {
  const mergedClassName = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold font-heading',
    'transition-all duration-300 ease-out cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      className: cn(mergedClassName, children.props.className),
      ...props,
    })
  }

  return (
    <button className={mergedClassName} {...props}>
      {children}
    </button>
  )
}

