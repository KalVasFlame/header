import { useWindowSize } from "@react-hook/window-size"

import Logo from "../Logo"
import Navigation from "../Navigation"
import IconButton from "../IconButton"
import OurProducts from "../OurProducts"
import { ReactComponent as Menu } from "../../img/menu.svg"
import { ReactComponent as Search } from "../../img/search.svg"
import { ReactComponent as Cart } from "../../img/cart.svg"
import { ReactComponent as Login } from "../../img/login.svg"

import s from "./Header.module.css"

const Header = () => {
  const [w, h] = useWindowSize()

  return (
    <header className={s.header}>
      {w > 860 ? (
        <Logo />
      ) : (
        <div className={s.authNav}>
          <IconButton>
            <Menu className={s.menu} width="20" />
          </IconButton>
          <IconButton>
            <Search className={s.search} width="16" />
          </IconButton>
        </div>
      )}
      {w < 860 ? <Logo /> : <Navigation />}
      {w > 860 ? <OurProducts /> : ""}
      <div className={s.authNav}>
        {w > 860 ? (
          <IconButton>
            {w > 1400 ? <span className={s.text}> Знайти</span> : ""}
            <Search className={s.search} width="16" />
          </IconButton>
        ) : (
          ""
        )}

        <IconButton>
          {w > 1400 ? <span className={s.text}> Кошик</span> : ""}
          <Cart className={s.cart} width="16" />
        </IconButton>
        <IconButton>
          {w > 1400 ? <span className={s.text}> Вхід</span> : ""}
          <Login className={s.login} width="32" />
        </IconButton>
      </div>
    </header>
  )
}

export default Header
