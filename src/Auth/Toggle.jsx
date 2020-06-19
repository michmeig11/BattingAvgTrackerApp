import React, { Component } from 'react'

const Toggle {
    state ={
        on: false,
    }
    
    toggle = () => {
        this.setState ({
            on: !this.state.on
        })
    }
}

render () {
    return (
        <div>
        {this.state.on && {'LogIn.jsx'}} 
        </div>
    )}
}

export default Toggle;