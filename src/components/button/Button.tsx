import './styles.css'

export function Button({ type, text }: any) {
  return <button className={type}>{text}</button>
}
