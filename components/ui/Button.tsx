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
    'bg-[#2A81C7] hover:bg-[#1e6aab] text-white shadow-lg shadow-[#2A81C7]/25 hover:shadow-[#2A81C7]/40 hover:shadow-xl',
  outline:
    'border-2 border-[#2A81C7] text-[#2A81C7] hover:bg-[#2A81C7] hover:text-white bg-transparent',
  ghost:
    'text-[#2A81C7] hover:bg-[#2A81C7]/10 bg-transparent',
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
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold',
        'transition-all duration-200 ease-out cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A81C7] focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'font-[var(--font-heading)]',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
