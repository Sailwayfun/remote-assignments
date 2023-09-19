import styles from "../header/Header.module.css";

const Header = (props) => {
    const {onClick, greeting} = props;
    return <header className={styles.header} onClick={onClick}>
        <h1 className={styles.mainHeading}>{greeting}</h1>
    </header>
}

export default Header;