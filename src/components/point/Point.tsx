import './styles.css'

export function Point({ point }: any) {
  const { title, subtitle, img } = point
  return (
    <div className="point">
      <div className="icon">
        <img src={img} alt={img} />
      </div>
      <div className="pointDescription">
        <div className="pointTitle">{title}</div>
        <div className="pointSubtitle">{subtitle}</div>
      </div>
    </div>
  )
}
