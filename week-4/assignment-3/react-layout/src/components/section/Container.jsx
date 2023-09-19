import styles from "../section/Container.module.css";
import ContentBox from "./ContentBox";
import { useContext } from "react";
import { BoxContext } from "../../App";

const Container = (props) => {
    const {position} = props
    const boxes = useContext(BoxContext);
    return <div className={styles.container}>
        {position === "upper" && boxes.upper.map(box => <ContentBox key={box.id} text={box.text}/>)}
        {position === "lower" && boxes.lower.map(box => <ContentBox key={box.id} text={box.text}/>)}
    </div>
}

export default Container;