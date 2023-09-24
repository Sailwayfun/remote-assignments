import "../components/Counter.css";
import { memo } from "react";
const Counter = memo(function Counter(props) {
    console.log(props.value, "rendered");
    const { value, onIncrement } = props;
    return <div className="counter-box">
        <button className="btn" onClick={onIncrement}>{props.children}</button>
        {props.children !== "All + 1" && props.children !== "Add Counter" && <div className="counter-result">{value ? value : 0}</div>}
    </div>
}, compareProps);

function compareProps (prevProps, nextProps) {
    return prevProps.value === nextProps.value;
}

////use React.memo to prevent wasted re-renders

export default Counter;