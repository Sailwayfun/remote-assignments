import styles from "../side-menu/SideMenu.module.css";
import SideNavItem from "../side-menu/SideNavItem"
import ToggleButton from "../ui/ToggleButton";

const SideMenu = (props) => {
    const { show, order, onToggle } = props;
    return <nav className={`${styles.sideMenu} ${show ? styles.show : ""}`}>
        <ToggleButton className={styles.sideMenuToggle} onToggle={onToggle}>X</ToggleButton>
        <ul className={styles.sideMenuList}>
            {order.map(number => <SideNavItem key={number} order={number}></SideNavItem>)}
        </ul>
    </nav>
}


export default SideMenu;