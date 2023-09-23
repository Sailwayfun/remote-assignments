import "../components/Counter.css";
const Counter = (props) => {
    const { value, onIncrement } = props;
    return <div className="counter-box">
        <button className="btn" onClick={onIncrement}>{props.children}</button>
        {props.children !== "All + 1" && props.children !== "Add Counter" && <div className="counter-result">{value ? value : 0}</div>}
    </div>
}

export default Counter;