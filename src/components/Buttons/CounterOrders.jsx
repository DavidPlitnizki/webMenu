import React,{useState } from 'react';
import styles from 'styled-components';

const WrapperBtn = styles.div`
    display: flex;
    width: 10rem;
    justify-content: center;
    align-items: center;
`;

const Button = styles.button`
    width: 3em;
    height: 3em;
    cursor: pointer;
    border: 0;
    box-shadow: 0px 7px 10px 0px rgba(0,0,0,0.75);
    box-sizing: border-box;

    :focus{
        outline: 0;
    }

    :active{
        transform: translateY(.1rem);
        box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.75);
    }
`;

const MinusButton = styles(Button)`
  border-top-left-radius: .5rem;
  border-bottom-left-radius: .5rem;
  background-color: #cc3227;
  border-bottom: 4px solid #6f1f19;
  border-left: 3px solid #6f1f19;

  :active{
    border-bottom: 2px solid #6f1f19;
    border-left: 0px solid #6f1f19;
}
`;

const PlusButton = styles(Button)`
  border-top-right-radius: .5rem;
  border-bottom-right-radius: .5rem;
  background-color: #4caf50;
  border-bottom: 4px solid #307133;
  border-right: 3px solid #307133;

  :active{
    border-bottom: 2px solid #307133;
    border-right: 0px solid #307133;
}
`;

const ScoreBoard = styles.span`
    font-size: 2rem;
    font-weight: bold;
    padding: 0 1rem 0 1rem;
    color: #000000;
    text-shadow: 2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c;
`;


class CounterOrders extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count : 0
        }
    }

    decrementCount=()=>{
        this.setState({
            count: this.state.count - 1
        })
    }

    incrementCount=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
            <WrapperBtn>
                <MinusButton onClick={this.decrementCount}>-</MinusButton>
                    <ScoreBoard>{this.state.count}</ScoreBoard>
                <PlusButton onClick={this.incrementCount}>+</PlusButton>
            </WrapperBtn>
        )
    }
}

export default CounterOrders;