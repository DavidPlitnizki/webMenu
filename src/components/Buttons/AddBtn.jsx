import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    position: relative;
    width: 3em;
    height: 2em;
    background-color: rgba(255,255,255,.6);
    font-size: .5em;
    padding: .5em;
    margin-right: 1em;
    margin-top: 1.5em;
    border-radius: 999px;
    border: solid .1em #fff;
    text-align: center;
    box-shadow: 0px 0px .4em .1em rgba(0,0,0,0.7);
    cursor: pointer;

    :active {
        margin-top: 1.7em;
    }
    :focus {
        outline: 0;
    }
`;

const TextSpan = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 1rem;
    font-weight: bold;
`;

    const AddBtn = props => {
    return (
        <Button onClick={()=>props.clickHandle(props.item)}>
            <TextSpan>ADD</TextSpan>
        </Button>
    )
}

export default AddBtn;