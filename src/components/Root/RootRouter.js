import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../../App';
import About from '../../components/About/About';
import Main from '../../components/Main/Main';
import Products from '../../components/Products/Products';
import Contact from '../../components/Contact/Contact';
import Order from '../../components/Order/Order';


const RootRouter = props => {
    
        return(
            <Provider store={props.store}>
                <Router>
                    <App>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/category/:id" component={Products} />
                        <Route path="/about" component={About} />
                        <Route path="/order" component={Order} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                    </App>
                </Router>
            </Provider>
        )
    
};

export default RootRouter;