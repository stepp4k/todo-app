import React from 'react';
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
            this.setState({ errorMessage: 'Enter description first' })
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
            <>
                <h2>Add a new task:</h2>
                <form onSubmit={this.handleSubmitForm}>
                    {this.state.errorMessage &&
                        <div style={{ color: '#dc3545' }}>
                            Oops: {this.state.errorMessage}
                        </div>
                    }
                    <label>
                        <span>Description:</span>
                        <input type='type' maxLength={150} onChange={this.handleDescriptionChange} value={this.state.description}></input>
                    </label>
                    <label>
                        <span>Status:</span>
                        <select onChange={this.handleStatusChange} value={this.state.done}>
                            <option value={true}>Completed</option>
                            <option value={false}>Open</option>
                        </select>
                    </label>
                    <label>
                        <button type='submit'>Add</button>
                    </label>
                </form>
            </>
        );
    }
}