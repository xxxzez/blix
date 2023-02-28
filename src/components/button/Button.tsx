import { FC } from 'react'
import { useTheme } from '../../hooks/theme/useTheme'
import './styles.css'

type ButtonProps = {
  type: string
  text: string
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ type, text, onClick }) => {
  const theme = useTheme()

  return (
    <button className={`${type}-${theme}`} onClick={onClick}>
      {text}
    </button>
  )
}
