import styles from "../nav/NavItem.module.css";
const NavItem = (props) => {
    const { order } = props;
    return <li className={styles.navItem}><a href="#">Item {order}</a></li>
}

export default NavItem;