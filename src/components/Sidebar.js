import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
import { Link } from "gatsby"
const Sidebar = ({isOpen, toggleSidebar}) => {
  // const isOpen = true
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" :""}`} onClick={toggleSidebar}>
      <button className="close-btn" >
        <FaTimes  />
      </button>
      <div className="side-container">
        <Links styleClass={ `${isOpen ? "sidebar-links":""}`} />
        <SocialLinks styleClass={ `${isOpen ? "sidebar-icons":""}`} />
      </div>
    </aside>
  )
}

export default Sidebar
