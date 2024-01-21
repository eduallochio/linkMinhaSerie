// import styles from "./Video/videos.mudele.css"
import Profile from "../Profile/index"
import Footer from "../Footer/index"
import SocialLinks from "../SocialLinks/index"

function Videos() {
  return (
    <>
      <body>
      <Profile />
      <div className="container">
        <div className="main-video-content">
          <video src="" controls muted autoPlay></video>
          <label className="main-info"></label>
        </div>
        <div className="playlist"></div>
      </div>
      <SocialLinks />
      <Footer />
      </body>
    </>
  )
}

export default Videos
