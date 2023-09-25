import styles from "./ContentBox.module.css"
const ContentBox = (props) => {
    const { text } = props;
    return <div className={styles.contentBox}>
        <p>{text}</p>
    </div>
}

export default ContentBox