import styles from "./NavItem.module.css"

const NavItem = (props) => {
    const { type, order } = props;
    return <li className={type === "main" ? styles.navItem : styles.sideNavItem}><a href="#">Item {order}</a></li>
}

export default NavItem;