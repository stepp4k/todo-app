import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import './Form.scss';

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            done: false,
            errorMessage: null
        }
    }

    handleDescriptionChange = (e) => {
        //console.log(e.target.value);
        this.setState({ description: e.target.value })
    }

    handleStatusChange = (e) => {
        this.setState({ done: e.target.value })
    }

    handleSubmitForm = (e) => {
        //console.log('submitting!')
        e.preventDefault();

        // Validating input
        if (this.state.description === '') {
            this.setState({ errorMessage: 'please enter description first' })
        } else {
            // Handling submission
            let newTask = {
                id: uuid(),
                description: this.state.description,
                done: this.state.done
            }

            this.props.addTask(newTask);

            this.setState({
                description: '',
                done: false,
                errorMessage: null
            });
        }
    }

    render() {
        return (
            <div className='addTask shadow p-3 mb-5 rounded'>
                <h2>Add a new task:</h2>
                <form onSubmit={this.handleSubmitForm}>
                    {this.state.errorMessage &&
                        <div className="alert alert-warning">
                            Oops: {this.state.errorMessage}. Check our <Link className='alert-link' to='/help'><strong>help</strong></Link> page for more.
                        </div>
                    }

                    {/* <label>
                        <span>Description:</span>
                        <input type='type' maxLength={150} onChange={this.handleDescriptionChange} value={this.state.description}></input>
                    </label> */}
                    
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" maxLength={150} onChange={this.handleDescriptionChange} value={this.state.description} />
                    </div>

                    {/* <label>
                        <span>Status:</span>
                        <select onChange={this.handleStatusChange} value={this.state.done}>
                            <option value={true}>Completed</option>
                            <option value={false}>Open</option>
                        </select>
                    </label> */}

                    <div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Status</span>
                            <select onChange={this.handleStatusChange} value={this.state.done} className="form-select" aria-label="Default select example">
                                <option value={true}>Completed</option>
                                <option value={false}>Open</option>
                            </select>
                        </div>
                    </div>
                    <label>
                        <button className="btn btn-primary" type='submit'>Add Task</button>
                    </label>
                </form>
            </div>
        );
    }
}