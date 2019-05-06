import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid #9E9E9E;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => props.isDragging
    ? '#DCF8FF'
    : 'white'};
  display: flex;
`;


export default class File extends React.Component {
  render() {
    return( 
      <Draggable 
        draggableId={this.props.file.id} 
        index={this.props.index}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {this.props.file.content}
          </Container>
        )}
      </Draggable>
    );
  }
}