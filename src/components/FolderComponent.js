import React from 'react';
import styled from 'styled-components';
import Article from './ArticleComponent';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 8px;
  border: ${props => props.index === 0 ? 'none' : '1px solid lightgrey'};
  background-color: white;
  border-radius: 2px;
  width: 200px;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Title = styled.h5`
  color: #9E9E9E;
  padding: 8px;
  margin: 0;
  border-bottom: 1px solid lightgrey;
`;
const Input = styled.input`
  padding: 8px;
  font-weight: 200;
  border-style: none;
  border-bottom: 1px solid lightgrey;
  &:focus {
    outline: none;
    background-color: #DCF8FF;
  }

`;
const ArticleList = styled.div`
  padding: 8px;
  background-color: ${props => (props.isDraggingOver ? '#ECECEC' : 'inherit')};
  flex-grow: 1;
  min-height: 100px;
  `;

const Button = styled.button`
border: none;
background: none;
color: #9E9E9E;
&:hover {
  color: black;
}
`;

const Footer = styled.div`
border: none;
background: white;
color: #9E9E9E;
position: absolute;
bottom: -30px;
right: 8px;
`;

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.articles === this.props.articles) {
      return false;
    }
    return true;
  }
  render() {
    return this.props.articles.map((article, index) => (
      <Article key={article.id}
               article={article} 
               index={index}
               hideDeleteButton={this.props.isFirstFolder}
               deleteArticle = {this.props.deleteArticle}
      />
    ));
  }
}

export default class Folder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      pageNum: 1
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  nextPage() {
    this.setState(prevState => ({pageNum: prevState.pageNum + 1}),
      () => this.props.populateSearchResults('', this.state.pageNum, false));
  }

  prevPage() {
    this.setState(prevState => ({pageNum: prevState.pageNum - 1}),
      () => this.props.populateSearchResults('', this.state.pageNum, false));
  }

  handleSearchChange(e) {
    this.setState({searchTerm: e.target.value});
  }

  handleSearchSubmit(e) {
    if(e.key === 'Enter') {
      this.props.populateSearchResults(this.state.searchTerm, 1);
    }
  }

  render() {
    const isFirstFolder = this.props.index === 0;
    const hideFooter = this.props.folder.id !== 'folder-1' ||
      (this.props.folder.id === 'folder-1' && this.props.articles.length === 0);
    return(
      <Draggable 
        draggableId={this.props.folder.id} 
        isDragDisabled={this.props.folder.id === 'folder-1'}
        index={this.props.index}
        >
        {provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            index={this.props.index}
          >
                {!isFirstFolder 
                  ? <Title>{this.props.folder.title}</Title> 
                  : <Input type='text'
                           placeholder="Search Wikipedia..."
                           value={this.state.searchTerm}
                           onChange={this.handleSearchChange}
                           onKeyDown={this.handleSearchSubmit}
                    />
                }
            <Droppable droppableId={this.props.folder.id} type="article">
              {(provided, snapshot) => (
                <ArticleList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <InnerList articles={this.props.articles}
                             isFirstFolder={this.props.folder.id === 'folder-1'}
                             deleteArticle={this.props.deleteArticle}
                  />
                  <Footer hidden={hideFooter}>
                  <Button onClick={this.prevPage}
                          hidden={this.props.hidePrevButton} 
                          className="fa fa-arrow-circle-left fa-2x">
                  </Button>
                  <Button onClick={this.nextPage}
                          hidden={this.props.hideNextButton} 
                          className="fa fa-arrow-circle-right fa-2x">
                  </Button>
                  </Footer>
                  {provided.placeholder}
                </ArticleList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}