import styles from "../section/Container.module.css";
import ContentBox from "./ContentBox";
import { useContext } from "react";
import { BoxContext } from "../../App";

const Container = () => {
    const boxes = useContext(BoxContext);
    return <div className={styles.container}>
        {boxes.map(box => <ContentBox key={box.id} text={box.text}/>)}
    </div>
}

export default Container;