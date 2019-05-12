import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 1px 5px grey
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: #FFEEBA;
  border: ${props => props.isDragging
    ? '1px solid grey'
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