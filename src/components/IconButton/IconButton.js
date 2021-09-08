import s from "./IconButton.module.css"

const IconButton = ({ children, ...allyProps }) => (
  <button className={s.button} type="button" {...allyProps}>
    {children}
  </button>
)

export default IconButton
