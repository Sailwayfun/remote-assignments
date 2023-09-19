import Container from "./Container";
import styles from "../section/Section.module.css";

const Section = (props) => {
    const { position, show } = props;
    return (<section className={!show ? styles.section : styles.hide}>
        {position === "upper" && <h2 className={styles.sectionHeading}>Section Title</h2>}
        <Container position={position} />
    </section>)
}

export default Section;