import styles from './menu.module.css'
import logo from '../images/akatsuki.png'

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <span className={styles.logo}><a href="/home">{<img src={logo}/>}</a></span>
      <nav>
        <ul className={styles.menuList}>
          <li>
            <a href="/sobre">Sobre</a>
          </li>
          <li>
            <a href="/contato">Cotato</a>
          </li>
          
        </ul>
      </nav>
    </div>
  )
}

export default Menu;