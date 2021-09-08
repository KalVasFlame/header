import logo from "../../img/logo.png"

import s from "./Logo.module.css"

const Logo = () => {
  return (
    <div>
      <img className={s.logo} src={logo} alt="logo" />
    </div>
  )
}

export default Logo
