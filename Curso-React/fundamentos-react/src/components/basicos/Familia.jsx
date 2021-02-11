import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {

    return(
        <React.Fragment>
            {
                React.Children.map(props.children, (child) =>{
                    return React.cloneElement(child, {...props})
                })
            }
        </React.Fragment>
    )
}