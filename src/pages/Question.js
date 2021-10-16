
import { Link } from 'react-router-dom';
import { Button, Container, Card, Image, Select } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import React, { Component, useEffect, useState } from 'react';
import action from '../redux/actions/questions/questions.actions'

export const Question = (props) => {
  const dispatch = useDispatch();
  const [correctAnswer,setCorrectAnswer] = useState("");
  const [leftTime,setLeftTime] = useState(14);
  const { isQuestions, questions,questionsCount,currentQuestion,points,time} = useSelector((state) => {
    return state.questions;
  })

  const checkQuestionAnswer = (call,el) => {
    const correctAnswer = call();
    const element = el.el;
    if(correctAnswer==element){
      dispatch(action.questionsCurrentIncrease(currentQuestion));
      dispatch(action.questionsPointsIncrease(points));
      props.history.push('/correct');
    }else{
      props.history.push('/wrong');
    }
  
  }
  useEffect(()=>{
    if(points<1000){
      if(!isQuestions){
        props.history.push('/welcome');
      }
  }
  },[])

  useEffect(()=>{
    if(points<1000){
      setTimeout(function(){ 
        if((!leftTime<=0)){
          setLeftTime(leftTime-1);
          dispatch(action.questionsTimeDecrease(leftTime))
        }else{
          props.history.push('/wrong');
        }
       }, 1000);
    }else{
      props.history.push('/congratulations');
    }
  },[leftTime])
    return (
        <Container textAlign='center'>
        <div className="cardWrapper">
          <Card centered fluid>
          <Card.Content>
          <div class="ui grid">
            <div class="three column row">
                <div class="column">Question {currentQuestion} / {questionsCount}</div>
                <div class="column">
                  {points}
                  <div>Points</div>
                  </div>
                <div class="column">Remaining Time {time}</div>
            </div>
           </div>
            </Card.Content>
            <Card.Content extra>
             {questions?.results?.map((question,index)=>{
               if(index+1==currentQuestion){
                 const answers =[...question.incorrect_answers,question.correct_answer];
                 const correctAnswer = () => question.correct_answer;
               
                 return (
                   <div>
                     <p>{question?.question}</p>
                     {answers.map(el=>{
                       return (
                         <p>
                           <button value={el} onClick={(e)=>checkQuestionAnswer(correctAnswer,{el})} class="fluid ui button">{el}</button>
                         </p>
                       )
                     })}
                     </div>
                 
                 )
               }
               return false;
             })}
            </Card.Content>
        </Card>
        </div>
      </Container>
    );
}