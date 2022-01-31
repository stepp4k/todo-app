function Task(props) {
    return (
        <div>
            <hr />
            <h3>{props.task.description}</h3>
            <div>{props.task.id}</div>
            <div>Status: {props.task.done ? <span>Completed</span> : <span>Open</span>}</div>
        </div>
    );
}

export default Task;