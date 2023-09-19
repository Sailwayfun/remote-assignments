import styles from "./ToggleButton.module.css"

const ToggleButton = (props) => {
    return <div className={styles.container}>
        <button onClick={props.onToggle} className={props.className}>
            <b>{props.children}</b>
        </button>
    </div>
}

export default ToggleButton;