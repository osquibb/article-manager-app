import React from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Folder from './FolderComponent';
import data from '../data/data';

const Container = styled.div`
display: flex;
justify-content: center;
`;

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.folder === this.props.folder &&
      nextProps.fileMap === this.props.fileMap &&
      nextProps.index === this.props.index
    ) {
      return false;
    }
    return true;
  }

  render() {
      const { folder, fileMap, index } = this.props;
      const files = folder.fileIds.map(fileId => fileMap[fileId]);
      return <Folder folder={folder} files={files} index={index} />;
  }
}

class FolderSection extends React.Component {
  
  state = data;

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }
    
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index  
    ) {
      return;
    }

    if (type === 'folder') {
      const newfolderOrder = Array.from(this.state.folderOrder);
      newfolderOrder.splice(source.index, 1);
      newfolderOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        folderOrder: newfolderOrder,
      };
      this.setState(newState);
      return;
    }

    const start = this.state.folders[source.droppableId];
    const finish = this.state.folders[destination.droppableId];

    if (start === finish) {
      const newFileIds = Array.from(start.fileIds);
      newFileIds.splice(source.index, 1);
      newFileIds.splice(destination.index, 0, draggableId);

      const newfolder = {
        ...start,
        fileIds: newFileIds  
      }

      const newState = {
        ...this.state,
        folders: {
          ...this.state.folders,
          [newfolder.id]:newfolder
        },
      };

      this.setState(newState);
      return;
    }
    
    // Moving from one Folder to another
    const startFileIds = Array.from(start.fileIds);
    startFileIds.splice(source.index, 1);
    const newStart = {
      ...start,
      fileIds: startFileIds,
    };

    const finishFileIds = Array.from(finish.fileIds);
    finishFileIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      fileIds: finishFileIds,
    };

    const newState = {
      ...this.state,
      folders: {
        ...this.state.folders,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };

  render() {
    return(
      <DragDropContext 
        onDragEnd={this.onDragEnd}
      >
        < Droppable 
          droppableId = "all-folders"
          direction = "horizontal"
          type = "folder" 
        >
          {provided => (
            <Container
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {this.state.folderOrder.map((folderId, index) => {
                const folder = this.state.folders[folderId];
                return ( 
                  <InnerList
                    key={folder.id}
                    folder={folder}
                    fileMap={this.state.files}
                    index = {index}
                  />
                );
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext> 
    );
  }
}

export default FolderSection;
