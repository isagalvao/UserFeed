import styles from './Header.module.css'
import igniteLogo from '../Assets/Ignite-logo.svg'

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo do ignite" />
      </header>
    </div>
  )
}
