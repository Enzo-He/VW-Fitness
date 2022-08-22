
const Card = ({className, children}) => {
  return (
    /* ``template literal */
    <article className={`card ${className}`}>
        {children}
    </article>
  )
}

export default Card