// App is our initalization or in cases of smaller apps with less 
// than 5 components, App is our engine

// entry point to the entire react application

import React, { Component } from 'react'

// import the test component
import Text from './components/Text'

class App extends Component {
    constructor(){
        super()
        
        this.state = {
            text: ''
        }
    }
    // using es6 syntax to bind this 
    changeText = () => {
        this.setState({
            text: 'Corbin'
        })
    }

    // changeText(){
    //     this.setState({
    //         text: 'corbin'
    //     })
    // }

    render(){
        const { text } = this.state
        const { changeText } = this
        return (
            // passed state as props and the method changeText as props
            <Text text={text} changeText={changeText}/>
        )
    }
}

export default App

