import logo from "../../img/logo.png"

import s from "./Logo.module.css"

const Logo = () => {
  return (
    <div>
      <a href="https://www.microsoft.com/uk-ua/">
        <img className={s.logo} src={logo} alt="logo" />
      </a>
    </div>
  )
}

export default Logo
