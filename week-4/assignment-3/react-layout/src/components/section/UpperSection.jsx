import Container from "./Container";
import styles from "./Section.module.css";

const UpperSection = (props) => {
    const { position } = props;
    return (<section className={styles.section}>
        <h2 className={styles.sectionHeading}>Section Title</h2>
        <Container position={position} />
    </section>)
}

export default UpperSection;