import s from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.link}>
          <a href="https://www.microsoft.com/uk-ua/microsoft-365?rtc=1" target="_blank" rel="noreferrer">
            Microsoft 365
          </a>
        </li>
        <li className={s.link}>
          <a
            href="https://www.microsoft.com/uk-ua/microsoft-365/microsoft-office?rtc=1"
            target="_blank"
            rel="noreferrer"
          >
            Office
          </a>
        </li>
        <li className={s.link}>
          <a href="https://www.microsoft.com/uk-ua/windows/" target="_blank" rel="noreferrer">
            Windows
          </a>
        </li>
        <li className={s.link}>
          <a href="https://www.xbox.com/ru-RU/" target="_blank" rel="noreferrer">
            Xbox
          </a>
        </li>
        <li className={s.link}>
          <a href="https://support.microsoft.com/uk-ua" target="_blank" rel="noreferrer">
            Підтримка
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
