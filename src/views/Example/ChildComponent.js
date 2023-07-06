import React from 'react';

// class ChildComponent extends React.Component {

//     render() {
//         let { name, age, arrJobs } = this.props;
//         return (
//             <>
//                 <div className='job-lists'>
//                     {
//                         arrJobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )

//                         })
//                     }
//                 </div>
//             </>

//         )
//     }
// }

const ChildComponent = (props) => {
    console.log('====>Check child props', props)
    let { arrJobs } = props;
    return (
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
        </>

    )
}
export default ChildComponent;