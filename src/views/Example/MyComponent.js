import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: "Job001", title: "Developer", salary: "1000" },
            { id: "Job002", title: "Tester", salary: "1000" },
            { id: "Job003", title: "BA", salary: "1000" },

        ]

    }

    handlerChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handlerChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handlerOneClick = (e) => {
        e.preventDefault()
        console.log('>>>>State:', this.state)
        alert('click me')

    }

    render() {
        return (
            <>
                <form>
                    <label for="fname">First name:</label>
                    <input
                        type='text'
                        value={this.state.firstName}
                        onChange={(event) => this.handlerChangeFirstName(event)}
                    /><br />
                    <label for="lname">Last name:</label>
                    <input
                        type='text'
                        value={this.state.lastName}
                        onChange={(event) => this.handlerChangeLastName(event)}
                    /><br />
                    <input
                        type='button'
                        value="Submit"
                        onClick={(e) => this.handlerOneClick(e)}
                    />

                </form>

                <ChildComponent
                    name={this.state.firstName}
                    age={'25'}
                    arrJobs={this.state.arrJobs}
                />
            </>

        )
    }
}

export default MyComponent;