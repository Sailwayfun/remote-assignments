import Container from "./Container";
import styles from "../section/Section.module.css";

const Section = (props) => {
    const { position, show } = props;
    console.log(show);
    const boxesShow = (position === "upper" && !show) || (position === "lower" && show)
    return (<section className={(boxesShow) ? styles.section : styles.hide}>
        {position === "upper" && <h2 className={styles.sectionHeading}>Section Title</h2>}
        <Container position={position} />
    </section>)
}

export default Section;