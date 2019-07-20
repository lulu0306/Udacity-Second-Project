import React from 'react'
import {connect} from 'react-redux'
import {Label} from 'reactstrap'

class UserInfo extends React.Component{
    render(){
        const {user} = this.props
        return(
            <div>
                <image src={user.avatarURL}/>
            </div>
        )
    }
}

function mapStateToProps({users,questions}, {id}) {
    const question = questions[id]
    const user = users[question.author]
    return {
        user,
        question
    }
}

export default connect(mapStateToProps)(UserInfo)