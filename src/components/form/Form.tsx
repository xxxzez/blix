import { FC } from 'react'
import { Button } from '../button/Button'
import { Point } from '../point/Point'
import closeIcon from '../../assets/icons/closeIcon.png'
import './styles.css'
import { PointType } from '../../types/form'
import { useTheme } from '../../hooks/theme/useTheme'

type FormProps = {
  titleFirst: string
  titleSecond: string
  subtitle: string
  points: Array<PointType>
  okText: string
  laterText: string
}

export const Form: FC<FormProps> = ({
  titleFirst,
  titleSecond,
  subtitle,
  points,
  okText,
  laterText,
}) => {
  const theme = useTheme()

  return (
    <div className="form">
      <div className={'title-' + theme}>
        {titleFirst}
        <span className={'titleColorful-' + theme}>{titleSecond}</span>
        <div className={'subtitle-' + theme}>{subtitle}</div>
      </div>

      <div className="cards">
        {points.map((point: PointType, i: number) => (
          <Point point={point} key={i} />
        ))}
      </div>

      <div className="footer">
        <Button type="full" text={okText} />
        <Button type="empty" text={laterText} />
      </div>

      <div className="closeIcon">
        <img src={closeIcon} alt="Close" />
      </div>
    </div>
  )
}
