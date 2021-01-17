import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return ( < div className = "App" >
            <
            div className = "App-header" >
            <
            img src = { logo }
            className = "App-logo"
            alt = "logo" / >
            <
            h2 > Welcome to React < /h2> < /
            div > <
            p className = "App-intro" >
            Filter <
            /p> <
            input type = "text"
            style = {
                { marginBottom: 8 }
            }
            /><br / >
            <
            button > Saring < /button>

            <
            div style = {
                { display: 'flex', justifyContent: 'center', textAlign: 'left' }
            } >
            <
            ol >
            <
            li > Jawa Barat < /li> <
            li > Jawa Tengah < /li> < /
            ol > <
            /div> < /
            div >
        );
    }
}

export default App;