import React, { FC } from 'react'
import { FormProps } from '../../types/form'
import { Button } from '../button/Button'
import { Point } from '../point/Point'
import './styles.css'

export const Form: FC<FormProps> = ({
  title1,
  title2,
  subtitle,
  points,
  okText,
  laterText,
}) => {
  return (
    <div className="form">
      <div className="title1">
        {title1}
        <span className="title2">{title2}</span>
      </div>
      <div className="subtitle">{subtitle}</div>
      {points.map((point: any, i: any) => (
        <Point point={point} key={i} />
      ))}
      <Button type="full" text={okText} />
      <Button type="empty" text={laterText} />
    </div>
  )
}
