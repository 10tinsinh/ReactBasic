import React from 'react';

class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
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
            </>

        )
    }
}

export default MyComponent;