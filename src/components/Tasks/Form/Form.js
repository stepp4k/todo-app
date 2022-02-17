import React from "react";
import './Form.scss';

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            isDone: false,
            errorMessage: null
        }
    }

    handleDescriptionChange = (e) => {
        //console.log(e.target.value);
        this.setState({ description: e.target.value })
    }

    render() {
        return (
            <>
                <h2>Add a new task:</h2>
                <form>
                    <label>
                        <span>Description:</span>
                        <input type="type" maxLength={150} onChange={this.handleDescriptionChange}></input>
                    </label>
                    <label>
                        <span>Status:</span>
                        <select >
                            <option value=""></option>
                            <option value="true">Completed</option>
                            <option value="false">Open</option>
                        </select>
                    </label>
                    <label>
                        <button type="submit">Add</button>
                    </label>
                </form>
            </>
        );
    }
}