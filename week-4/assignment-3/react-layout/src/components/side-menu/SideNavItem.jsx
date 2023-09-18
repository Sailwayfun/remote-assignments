import styles from "../side-menu/SideNavItem.module.css"
const SideNavItem = (props) => {
    return <li className={styles.sideNavItem}><a href="#">{`Item ${props.order}`}</a></li>
}

export default SideNavItem;