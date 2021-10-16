import React, { Component, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Container, Card, Image, Select } from 'semantic-ui-react';
import welcome from '../assets/welcome.jpg';
import {loadQuestionsAsync} from '../redux/reducers/questions/questions.thunk';



export const Welcome = (props) => {

  const [questionsBody, setQuestionsBody] = useState({
    amount:"10",
    type:"multiple",
    category:"",
    difficulty:""
  })

  const difficultyOptions = [
    { key: 'any', value: 'any', text: 'Any Difficulty' },
    { key: 'easy', value: 'easy', text: 'Easy' },
    { key: 'medium', value: 'medium', text: 'Medium' },
    { key: 'hard', value: 'hard', text: 'Hard' }
  ]

  const categoryOptions = [
    { key: '', value: '', text: 'Any Category' },
    { key: '9', value: '9', text: 'General Knowledge' },
    { key: '10', value: '10', text: 'Entertainment: Books' },
    { key: '11', value: '11', text: 'Entertainment: Film' },
    { key: '12', value: '12', text: 'Entertainment: Music' },
    { key: '13', value: '13', text: 'Entertainment: Musicals & Theatres' },
    { key: '14', value: '14', text: 'Entertainment: Television' },
    { key: '15', value: '15', text: 'Entertainment: Video Games' },
    { key: '16', value: '16', text: 'Entertainment: Board Games' },
    { key: '17', value: '17', text: 'Science & Nature' },
    { key: '18', value: '18', text: 'Science: Computers' },
    { key: '19', value: '19', text: 'Science: Nature' },
    { key: '20', value: '20', text: 'Mythology' },
    { key: '21', value: '21', text: 'Sports' },
    { key: '22', value: '22', text: 'Geography' },
    { key: '23', value: '23', text: 'History' },
    { key: '24', value: '24', text: 'Politics' },
    { key: '25', value: '25', text: 'Art' },
    { key: '26', value: '26', text: 'Celebrities' },
    { key: '27', value: '27', text: 'Animals' },
    { key: '28', value: '28', text: 'Vehicles' },
    { key: '29', value: '29', text: 'Entertainment: Comics' },
    { key: '30', value: '30', text: 'Science Gadgets' },
    { key: '31', value: '31', text: 'Entertainment: Japanese Anime & Manga' },
    { key: '32', value: '32', text: 'Entertainment: Cartoon & Animations' },
  ]

  const dispatch = useDispatch()

  const {questions} = useSelector((state) => {
   
    return state.questions;
  })


  const getQuestionsSubmit = (e) => {
    e.preventDefault();
    dispatch(loadQuestionsAsync(questionsBody));
  }

  const handleOnChange = (event,data) => {
    setQuestionsBody({...questionsBody, [data.name]:data.value})
  }

  const checkQuestions = () => {
     if(questions?.results?.length>0){
       props.props.history.push('/question');
     }
  }

  useEffect(() => {
    checkQuestions();
  },[questions])

    return (
       <div>
          <Container textAlign='center'>
            <div className="cardWrapper">
              <Card centered fluid>
              <Image src={welcome} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>A TRIVIA GAME</Card.Header>
                  <Card.Meta>2021</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Select onChange={handleOnChange} name='category' placeholder='Select Category' options={categoryOptions} />
                </Card.Content>
                <Card.Content extra>
                  <Select onChange={handleOnChange} name='difficulty' placeholder='Select Difficulty:' options={difficultyOptions} />
                </Card.Content>
                <Card.Content extra>
                  <Button content='Get Started' size='big' onClick={(e)=>getQuestionsSubmit(e)} />
                </Card.Content>
            </Card>
            </div>
          </Container>
          
       </div>
    );
}