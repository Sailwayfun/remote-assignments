import "../container/Container.css"

const Container = (props) => {
    return <div className="main-container">
        {props.children}
    </div>
}

export default Container;