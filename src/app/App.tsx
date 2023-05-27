import './styles/index.scss';
import React, {Component} from 'react';
import {Header} from "widgets/Header";
import {Main} from "widgets/Main";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

export default App