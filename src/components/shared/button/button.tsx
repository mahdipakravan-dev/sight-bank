import type { ReactNode } from 'react'
import { forwardRef } from 'react'
import clsx from 'clsx'
import s from './button.module.scss'

export type ButtonProps = {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    loading?: boolean
    leftIcon?: ReactNode
    rightIcon?: ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        children,
        className,
        variant = 'primary',
        size = 'md',
        loading = false,
        leftIcon,
        rightIcon,
        disabled,
        ...props
    }, ref) => {
        return (
            <button
                ref={ref}
                className={clsx(
                    s.button,
                    s[variant],
                    s[size],
                    loading && s.loading,
                    disabled && s.disabled,
                    className
                )}
                disabled={disabled || loading}
                {...props}
            >
                <span className={s.content}>
                    {leftIcon && <span className={s.icon}>{leftIcon}</span>}
                    {loading ? 'Loading...' : children}
                    {rightIcon && <span className={s.icon}>{rightIcon}</span>}
                </span>
            </button>
        )
    }
)

Button.displayName = 'Button'