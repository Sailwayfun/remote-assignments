import styles from "./NavBar.module.css"
import NavItem from "../ui/NavItem";
import ToggleButton from "../ui/ToggleButton";
import SideMenu from "../side-menu/SideMenu";
import { useState } from "react";

const itemNumbers = [1, 2, 3, 4];

const NavBar = () => {
    const [showSideMenu, setShowSideMenu] = useState(false);
    const sideMenuToggleHandler = () => {
        setShowSideMenu(((prevState) => (!prevState)));
    }
    return <nav className={styles.nav}>
        <ul className={styles.navList}>
            <li className={styles.logo}>
                <a href="#">Website Title</a> /
                <img src="" alt="logo" />
            </li>
            <ToggleButton onToggle={sideMenuToggleHandler} className={styles.navToggle}>
                <b>&#9776;</b>
            </ToggleButton>
            {itemNumbers.map(number => <NavItem key={number} order={number} type="main"></NavItem>)}
        </ul>
        <SideMenu show={showSideMenu} onToggle={sideMenuToggleHandler} order={itemNumbers}/>
    </nav>
}

export default NavBar;