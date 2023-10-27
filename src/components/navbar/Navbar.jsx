import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        { /* Sidebar */}
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Kylie Oliver</motion.span>
            <div className="social">
                <a href="https://github.com/Kylie240"><img src="/facebook.png" alt="" /></a>
                <a href="https://linkedin.com/in/kylie-oliver"><img src="/instagram.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar