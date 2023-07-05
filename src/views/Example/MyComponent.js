import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: 'Cuongabc',
        age: '27'
    }
    handlerOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handlerClickButton = () => {
        alert('Click me')
    }
    render() {

        let name = 'Cuongnm';

        return (
            <>
                <div className='first'>
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handlerOnChangeName(event)}
                    />
                    My Name is {this.state['name']}
                </div>
                <div className='2'>
                    I am {this.state.age}
                </div>
                <div className='third'>
                    <button onClick={() => this.handlerClickButton()}>Click me</button>
                </div>
            </>

        )
    }
}

export default MyComponent;