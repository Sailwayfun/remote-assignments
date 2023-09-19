import styles from "../side-menu/SideNavItem.module.css"
const SideNavItem = (props) => {
    const {order} = props;
    return <li className={styles.sideNavItem}><a href="#">Item {order}</a></li>
}

export default SideNavItem;