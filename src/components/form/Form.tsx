import React, { FC } from 'react'
import { Button } from '../button/Button'
import { Point } from '../point/Point'
import './styles.css'

type PointType = {
  title: string
  subtitle: string
  img: ImageData
}

type FormProps = {
  title: string
  subtitle: string
  points: Array<PointType>
  okText: string
  laterText: string
}

export const Form: FC<FormProps> = ({
  title,
  subtitle,
  points,
  okText,
  laterText,
}) => {
  return (
    <div className="form">
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      {points.map((point: any, i: any) => (
        <Point point={point} key={i} />
      ))}
      <Button type="full" text={okText} />
      <Button type="empty" text={laterText} />
    </div>
  )
}
