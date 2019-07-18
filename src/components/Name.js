import React,{Fragment} from 'react'
import {connect} from 'react-redux'


class Name extends React.Component{
    render(){
        const {user} = this.props
        return(
            <Fragment>
                <span>{user.name}</span>
            </Fragment>
        )
    }
}

function mapStateToProps({users},{id}){
    return{
        user: users[id]
    }
}

export default connect(mapStateToProps)(Name)