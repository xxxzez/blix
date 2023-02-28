import { FC } from 'react'
import { useTheme } from '../../hooks/theme/useTheme'
import { PointType } from '../../types/form'
import './styles.css'

type PointProps = {
  point: PointType
}

export const Point: FC<PointProps> = ({ point }) => {
  const { title, subtitle, img } = point
  const theme = useTheme()

  return (
    <div className="point">
      <div className="icon">
        <img src={img} alt={img} />
      </div>
      <div className="pointDescription">
        <div className={'pointTitle-' + theme}>{title}</div>
        <div className={'pointSubtitle-' + theme}>{subtitle}</div>
      </div>
    </div>
  )
}
