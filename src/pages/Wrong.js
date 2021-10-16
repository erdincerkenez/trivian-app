import React, { Component, useEffect, useState } from 'react';
import { Button, Container, Card, Image, Select } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import action from '../redux/actions/questions/questions.actions';
import wrong from '../assets/wrong.jpg';

export const Wrong = (props) => {
    const dispatch = useDispatch();
    const startAgain = () => {
        props.history.push('/welcome');
    }

    useEffect(()=>{
        dispatch(action.questionsTimeReset(14));
        dispatch(action.questionsPointsReset(0));
        dispatch(action.questionsCurrentPageReset(1));
      },[])

    return (
        <Container textAlign='center'>
        <div className="cardWrapper">
          <Card centered fluid>
          <Image src={wrong} wrapped ui={false} />
          <Card.Content>
            </Card.Content>
            <Card.Content extra>
              Wrong
            </Card.Content>
            <Card.Content extra>
              <button onClick={()=>startAgain()} class="fluid ui button">Start Again</button>
            </Card.Content>
        
        </Card>
        </div>
      </Container>
    );
}