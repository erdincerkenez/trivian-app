import React from 'react';
import { Button, Container, Card, Image, Select } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const congratulations = () => {
    return (
        <Container textAlign='center'>
        <div className="cardWrapper">
          <Card centered fluid>
          <Card.Content>
            </Card.Content>
            <Card.Content extra>
              Congratulations
            </Card.Content>
        
        </Card>
        </div>
      </Container>
    );
}