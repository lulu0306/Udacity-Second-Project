import React from 'react'
import {connect} from 'react-redux'


class UserInfo extends React.Component{
    render(){
        const {user} = this.props
        return(
            <div>
                <span>{user.name}</span>
                <image src={user.avatarURL}className="LeaderBoardImg"/>
            </div>
        )
    }
}

function mapStateToProps({users},{id}){
    return{
        user: users[id]
    }
}

export default connect(mapStateToProps)(UserInfo)