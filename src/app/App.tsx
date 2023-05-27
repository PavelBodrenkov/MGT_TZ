import './styles/index.scss';
import React from 'react';
import {Header} from "widgets/Header";
import {Main} from "widgets/Main";


const App = () => {
    return (
        <div>
           <Header />
            <Main />
        </div>
    );
};

export default App;
