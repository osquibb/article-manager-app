import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 1px 5px grey;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
  border: 1px solid #1A163D;
  &:hover {
    box-shadow: 3px 3px #1A163D;
  }
  transition: box-shadow 0.2s ease-in-out;
  box-shadow: ${props => props.isDragging
    ? '3px 3px #1A163D'
    : 'none'};
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
                            hidden={this.props.hideDeleteButton}
                            onClick={() => this.props.deleteArticle(this.props.article.id)}
              />
            
          </Container>
        )}
      </Draggable>
    );
  }
}