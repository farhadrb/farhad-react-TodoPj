import React, { Fragment } from 'react';
import NewTask from '../components/newTask';
import Todos from "../components/todos";
import { Route, Switch } from "react-router-dom";
import About from '../components/common/About';
import Nav from "../components/Nav";

const App = () => {
    return (
        <Fragment>
            <Nav/>
            <div className="d-flex justify-content-center app">
                <Switch>
                    <Route path="/" exact component={Todos}/>
                    <Route path="/about" component={About}/>
                </Switch>

                {/* <Todos /> */}
                <NewTask />

            </div>
        </Fragment>
    );
}

export default App;