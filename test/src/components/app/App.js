import React from "react";
import Navigation from '../navigation/navigation';
import Home from '../home/home';
import About from '../about/about'
import Contact from '../contact/contact'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css"

class App extends React.Component {

    render() {
        return (
                <div>
                    <BrowserRouter>
                        <div>
                            <Navigation />
                            <Switch>
                                <Route path="/" component={Home} exact/>
                                <Route path="/about" component={About}/>
                                <Route path="/contact" component={Contact}/>

                            </Switch>
                        </div>
                    </BrowserRouter>

                </div>
        );
    }
}

export default App;
