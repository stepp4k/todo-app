import React from "react";
import uuid from 'react-uuid';
import Task from './Task/Task';
import './Tasks.scss';

class Tasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        const tasks = [
            {
                id: uuid(),
                description: 'Start learning React',
                done: true
            },

            {
                id: uuid(),
                description: 'Update Resume',
                done: false
            },
            {
                id: uuid(),
                description: 'Apply at Northern.co for Entry Web Developer position',
                done: false
            }
        ];

        this.setState({ tasks: tasks });
    }

    handleClearTasks = () => {
        this.setState({ tasks: [] });
    }

    render() {
        return (
            <div className="tasks">
                <h2>These are the tasks:</h2>
                <div>
                    {this.state.tasks.map(
                        (task, index) => {
                            return (
                                <Task key={index} task={task} />
                            );
                        }
                    )}
                </div>
                <div className="buttonContainer">
                    <button className='clear btn btn-outline-primary' onClick={this.handleClearTasks}>Clear Tasks</button>
                </div>
            </div>
        );
    };
}

export default Tasks;