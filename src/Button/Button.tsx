import { ButtonHTMLAttributes, FC } from 'react'
type P = {
    children: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<P> = ({ children, ...rest }) => {
    return <button {...rest}>
        {children}
    </button>
}
export default Button;