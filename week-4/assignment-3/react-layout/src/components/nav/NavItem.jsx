import styles from "../nav/NavItem.module.css";
const NavItem = (props) => {
    const { order } = props;
    return <li className={styles.navItem}><p>{`Item ${order}`}</p></li>
}

export default NavItem;