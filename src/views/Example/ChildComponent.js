import React from 'react';

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handlerShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    render() {

        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        return (

            <>
                {showJobs == false ?
                    <div>
                        <button onClick={() => this.handlerShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className='job-lists'>
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                        </div>
                                    )

                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handlerShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>

        )
    }
}


export default ChildComponent;