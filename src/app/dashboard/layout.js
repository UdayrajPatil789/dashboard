
import Sidebar from "../components/dashboard/sidebar/page";
 import Navbar from "../components/dashboard/navbar/page";
import styles from "@/app/dashboard/dashboard.module.css"

import Footer from "./footer/page";

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}

export default Layout;