import React from 'react'
import './GlobalStyle.css'
class ErrorMessage extends React.Component{
    render(){
        return(
            <div><h1 className="Error">404: Question not Found </h1></div>
        )
    }
}

export default ErrorMessage