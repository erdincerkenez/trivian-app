import React, { Component, useEffect, useState } from 'react';
import { Button, Container, Card, Image, Select } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import welcome from '../assets/welcome.jpg';
export const Correct = (props) => {

    const { isQuestions, questions,questionsCount,currentQuestion,points,time,errorMessage} = useSelector((state) => {
        return state.questions;
      })

      const nextQuestion = () => {
        props.history.push('/question'); 
      }


      useEffect(()=>{
        if(!isQuestions){
          props.history.push('/welcome');
        }
    
      },[])
    
    return (
        <Container textAlign='center'>
        <div className="cardWrapper">
          <Card centered fluid>
          
          <Card.Content>
          <div class="ui grid">
            <div class="three column row">
                <div class="column">Question {currentQuestion-1} / {questionsCount}</div>
              
            </div>
           </div>
            </Card.Content>
            <Card.Content extra>
              Correct
            </Card.Content>
            <Card.Content extra>
              You have earned 100 Points
            </Card.Content>
            <Card.Content extra>
              Total: {points}
            </Card.Content>
            <Card.Content extra>
              <button  onClick={()=>nextQuestion()} class="fluid ui button">Next Question</button>
            </Card.Content>
        
        </Card>
        </div>
      </Container>
    );
}