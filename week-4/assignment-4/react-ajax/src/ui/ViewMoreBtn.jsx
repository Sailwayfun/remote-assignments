import "../ui/ViewMoreBtn.css"
const ViewMoreBtn = (props) => {
    return <>
        <div className="btn-container">
            <button onClick={props.onClick} className="btn" disabled={props.disabled}>
                {props.children}
            </button>
        </div>

    </>

}


export default ViewMoreBtn;