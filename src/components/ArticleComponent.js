import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid #9E9E9E;
  display: flex;
  justify-content: space-between;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => props.isDragging
    ? '#DCF8FF'
    : 'white'};
  display: flex;
`;

const DeleteButton = styled.button`
  border: none;
  color: #9E9E9E;
  background-color: inherit;
  &:hover {
    color: black;
  }
`;

export default class Article extends React.Component {
  render() {
    return( 
      <Draggable 
        draggableId={this.props.article.id} 
        index={this.props.index}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
              <a href={this.props.article.link} target="_blank'">{this.props.article.content}</a>
              <DeleteButton className="fa fa-trash-o"
                            onClick={() => this.props.deleteArticle(this.props.article.id)}
              />
            
          </Container>
        )}
      </Draggable>
    );
  }
}