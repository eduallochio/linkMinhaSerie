import styles from "./social.module.css"

function SocialLinks() {
  return (
    <div className={styles.social}>
   

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.tiktok.com/@minhaserieemcortes"
      >
        <ion-icon name="logo-tiktok"></ion-icon>
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/minhaserieemcortes"
      >
        <ion-icon name="logo-instagram"></ion-icon>
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://youtube.com/@MinhaSerieEmCortes"
      >
        <ion-icon name="logo-youtube"></ion-icon>
      </a>

    </div>
  )
}

export default SocialLinks
