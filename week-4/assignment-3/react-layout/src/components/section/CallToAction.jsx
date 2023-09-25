import ToggleButton from "../ui/ToggleButton";
import styles from "./CallToAction.module.css";

const CallToAction = (props) => {
    return (
        <div className={styles["call-to-action-container"]}>
            <ToggleButton className={styles["call-to-action"]} onToggle={props.onToggle}>Call To Action</ToggleButton>
        </div>
    )
}

export default CallToAction;