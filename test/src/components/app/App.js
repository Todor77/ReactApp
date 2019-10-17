import React from "react";
import Navigation from '../navigation/navigation';
import Home from '../home/home';
import About from '../about/about'
import Contact from '../contact/contact'
import Fragen from "../fragen/fragen"
import Test from "../fragenExample/fragen";
import FragenTest from "../fragenTest/fragen";
import FragenMyTest from "../fragenMyTest/fragen";
import '@babel/polyfill';


import Footer from '../footer/footer'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {

    state = {
        isLoading: true,
        groups: []
    };

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/api/groups', {
        });
        const body = await response.json();

        this.setState({groups:body, isLoading: false});
    }

    render() {

        const {groups, isLoading} = this.state;

        if(isLoading){
            return <p>Loading ...</p>;
        }
        return (
            <>
                <div style={{width:1000, margin: '0 auto'}}>
                    <BrowserRouter>
                        <div>
                             <Navigation />
                                <Switch>
                                    <Route path="/" component={Home} exact/>
                                    <Route path="/about" component={About}/>
                                    <Route path="/fragen" component={Fragen}/>
                                    <Route path="/frageExample" component={Test}/>
                                    <Route path="/fragentest" component={FragenTest}/>
                                    <Route path="/fragenmytest" component={FragenMyTest}/>


                                    <Route path="/contact" component={Contact}/>
                                </Switch>
                        </div>
                    </BrowserRouter>

                </div>

                <br/>
                <div>
                    <h2>JUG List</h2>
                    {groups.map(group =>
                        <div key={group.id}>
                            {group.name}
                        </div>
                    )}
                </div>

                <Footer/>
            </>
        );
    }
}

export default App;
