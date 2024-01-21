import "./App.css"
import AppRoutes from "./Routes"
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import TabelasLinks from "./components/TabelasLinks";


function App() {
  return (
    
    <div id="container">
      <AppRoutes />
      <Profile />
      <TabelasLinks />
      <SocialLinks />
      <Footer />
      
    </div>
  )
}

export default App
