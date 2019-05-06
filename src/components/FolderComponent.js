import React from 'react';
import styled from 'styled-components';
import File from './FileComponent';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2px;
  width: 220px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h5`
  color: #9E9E9E;
  padding: 8px;
  margin: 0;
  border-bottom: 1px solid lightgrey;
`;
const Input = styled.input`
  padding: 8px;
  border-style: none;
  border-bottom: 1px solid lightgrey;
  &:focus {
    outline: none;
    background-color: #DCF8FF;
  }

`;
const FileList = styled.div`
  padding: 8px;
  background-color: ${props => (props.isDraggingOver ? '#ECECEC' : 'inherit')};
  flex-grow: 1;
  min-height: 100px;
  `;

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.files === this.props.files) {
      return false;
    }
    return true;
  }
  render() {
    return this.props.files.map((file, index) => (
      <File key={file.id} file={file} index={index} />
    ));
  }
}

export default class Folder extends React.Component {

  render() {
    const isFirstFolder = this.props.index === 0;
    return(
      <Draggable draggableId={this.props.folder.id} index={this.props.index}>
        {provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
                {!isFirstFolder 
                  ? <Title>{this.props.folder.title}</Title> 
                  : <Input type='text'
                           placeholder="Search..."
                    />
                }
            <Droppable droppableId={this.props.folder.id} type="file">
              {(provided, snapshot) => (
                <FileList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <InnerList files={this.props.files} />
                  {provided.placeholder}
                </FileList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}