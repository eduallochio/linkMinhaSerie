import styles from './footer.module.css'

function Footer () {
	return (
    <div className={styles.footer}>
      <footer>
        Desenvolvido por{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/eduallochio"
        >
          Omega System
        </a>
      </footer>
    </div>
  )
}

export default Footer