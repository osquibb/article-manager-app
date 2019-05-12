import React from 'react';
import styled from 'styled-components';
import Article from './ArticleComponent';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 12px;
  margin-top: ${props => props.index === 0 ? '80px' : null};
  border: none;
  background-color: #d9f2d5;
  width: 260px;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Title = styled.h5`
  color: black;
  padding: 8px;
  margin: 0;
`;
const Input = styled.input`
  padding: 8px;
  width: 60%;
  background-color: inherit;
  font-weight: 200;
  border-style: none;
  &:focus {
    outline: none;
  }

`;
const ArticleList = styled.div`
  padding: 8px;
  border-radius: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: ${props => (props.isDraggingOver ? '#d5ede4' : 'inherit')};
  border: ${props => (props.isDraggingOver ? '1px solid grey' : 'none')};
  flex-grow: 1;
  min-height: 100px;
  `;

const Button = styled.button`
border: none;
background: transparent;
color: #7a8699;
&:focus {
  outline: none;
}
&:hover {
  color: black;
}
`;

const Header = styled.span`
background-color: #d5ede4;
border-bottom: 1px solid lightgrey;
`;

const SearchIcon = styled.i`
position: absolute;
top: 3px;
right: 8px;
`;

const Navigation = styled.span`
position: absolute;
top: 3px;
right: 2px;
`;

const InfoText = styled.div`
position: absolute;
top: -70px;
left: -14px;
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
    this.mobileSearchSubmit = this.mobileSearchSubmit.bind(this);
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

  mobileSearchSubmit() {
    this.props.populateSearchResults(this.state.searchTerm, 1);
  }

  handleSearchSubmit(e) {
    if(e.key === 'Enter') {
      this.props.populateSearchResults(this.state.searchTerm, 1);
    }
  }

  render() {
    const isFirstFolder = this.props.index === 0;
    const hideNavigation = this.props.folder.id !== 'folder-1' ||
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
                  ? <Header>
                      <Title>{this.props.folder.title}</Title>
                    </Header> 
                  : <React.Fragment>
                      <InfoText>
                        <ol>
                          <li>Search Wikipedia</li>
                          <li>Drag and drop articles</li>
                        </ol>
                      </InfoText>
                      <Header>
                        <Input type='text'
                              placeholder="Search Wikipedia..."
                              value={this.state.searchTerm}
                              onBlur={this.mobileSearchSubmit}
                              onChange={this.handleSearchChange}
                              onKeyDown={this.handleSearchSubmit}
                        />
                        <SearchIcon className="fa fa-2x fa-search"
                                      hidden={!hideNavigation} />
                        <Navigation hidden={hideNavigation}>
                          <Button onClick={this.prevPage}
                                  hidden={this.props.hidePrevButton} 
                                  className="fa fa-arrow-circle-left fa-2x" />
                          <Button onClick={this.nextPage}
                                  hidden={this.props.hideNextButton}
                                  className="fa fa-arrow-circle-right fa-2x" />
                        </Navigation>
                      </Header>
                    </React.Fragment> 
                }
            <Droppable droppableId={this.props.folder.id} 
                       type="article"
                       isDropDisabled={this.props.folder.id === 'folder-1'}>
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