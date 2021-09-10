import s from "./Navigation.module.css"

const Navigation = () => {
  return (
    <>
      <div className={s.decor}></div>
      <nav className={s.nav}>
        <a href="https://www.microsoft.com/uk-ua/microsoft-365?rtc=1" target="_blank" rel="noreferrer">
          <span className={s.mainLink}>Surface</span>
        </a>
        <ul className={s.list}>
          <li className={s.link}>
            <a href="https://www.microsoft.com/uk-ua/microsoft-365?rtc=1" target="_blank" rel="noreferrer">
              Computers
            </a>
          </li>
          <li className={s.link}>
            <a
              href="https://www.microsoft.com/uk-ua/microsoft-365/microsoft-office?rtc=1"
              target="_blank"
              rel="noreferrer"
            >
              Computers for business
            </a>
          </li>
          <li className={s.link}>
            <a href="https://www.microsoft.com/uk-ua/windows/" target="_blank" rel="noreferrer">
              Accessories
            </a>
          </li>
          <li className={s.link}>
            <a href="https://www.xbox.com/ru-RU/" target="_blank" rel="noreferrer">
              Shop Now
            </a>
          </li>
          <li className={s.link}>
            <a href="https://support.microsoft.com/uk-ua" target="_blank" rel="noreferrer">
              Support
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation
