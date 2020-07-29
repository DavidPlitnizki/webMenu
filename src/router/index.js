import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {sendInitData} from '../action_creators/index';
import App from '../App';
import About from '../components/About/About';
import Main from '../components/Main/Main';
import Products from '../components/Products/Products';
import Contact from '../components/Contact/Contact';
import Order from '../components/Order/Order';


class RootRouter extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.onSendInitData();
    }
    
    render(){
        return(
            <Provider store={this.props.store}>
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
    }
    
};
  
  const mapDispatchToProps = dispatch => ({
   
    onSendInitData: ()=>{
        dispatch(sendInitData());
    }
  });


export default connect(null,mapDispatchToProps)(RootRouter);