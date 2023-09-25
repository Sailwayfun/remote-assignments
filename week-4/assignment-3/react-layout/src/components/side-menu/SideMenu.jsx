import styles from "./SideMenu.module.css";
import NavItem from "../ui/NavItem";
import ToggleButton from "../ui/ToggleButton";

const SideMenu = (props) => {
    const { show, order, onToggle } = props;
    return <nav className={`${styles.sideMenu} ${show ? styles.show : ""}`}>
        <ToggleButton className={styles.sideMenuToggle} onToggle={onToggle}>X</ToggleButton>
        <ul className={styles.sideMenuList}>
            {order.map(number => <NavItem key={number} order={number} type="sideMenu"></NavItem>)}
        </ul>
    </nav>
}


export default SideMenu;