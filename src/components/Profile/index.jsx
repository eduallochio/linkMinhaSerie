import avatar from "../../assets/avatar.png"
import styles from "./profile.module.css"

function Profile() {
  return (
    <div className={styles.profile}>
      <img src={avatar} alt="Logo da pagina e canal Minha série em cortes." />
      <p>@minhaserieemcortes</p>
    </div>
  )
}

export default Profile
