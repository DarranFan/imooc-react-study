import React from 'react'
export default class About extends React.Component{
    render(){
        return(
            <div>
                <p>this is info</p>
                <p>{this.props.match.params.val}</p>
            </div>
        )
    }
}