import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Card,Image} from 'reactstrap'

class QuestionList extends Component {

    render() {
        const {question} = this.props
        const {id, optionOne, optionTwo,author} = question
        return (
            <div>          
            <Card style={{padding:'15px'}}>
            <p style={{textAlign:'center'}}>{author} asks:</p>
            <Link to={`/questions/${id}`} style={{textAlign:'center'}}>              
            <span >{optionOne.text} OR {optionTwo.text}</span><br/>  
            </Link>
            </Card>       
           </div>
        )
    }

}

function mapStateToProps({questions,authedUser, users}, {id}) {
    return {
        question: questions[id],
     
    }

}

export default connect(mapStateToProps)(QuestionList)