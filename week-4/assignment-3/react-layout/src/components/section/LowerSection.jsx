import styles from "./Section.module.css";
import Container from "./Container";

const LowerSection = (props) => {
    const { position, showBoxes } = props;
    return (<section className={showBoxes ? styles.section : styles.hide}>
        <Container position={position} />
    </section>)
}

export default LowerSection;