import React from 'react';
import styled from 'styled-components';
import Article from './ArticleComponent';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 12px;
  margin-top: ${props => props.index === 0 ? '80px' : null};
  border: 1px solid #1A163D;
  background-color: white;
  width: 260px;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 3px 3px #1A163D;
`;
const Title = styled.h5`
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
  flex-grow: 1;
  background-image: ${props => (props.isDraggingOver ? 'radial-gradient(#1A163D 10%, transparent 15%), radial-gradient(#1A163D 10%, transparent 15%)' : 'none')};
  background-size: 24px 24px;
  background-position: 0 0, 12px 12px;
  min-height: 100px;
  `;

const Button = styled.button`
border: none;
background: transparent;
color: #1A163D;
&:focus {
  outline: none;
}
&:hover {
  color: #E07D7E;
}
`;

const Header = styled.span`
background-color: #FFFBC7;
border-bottom: 1px solid lightgrey;
`;

const SearchIcon = styled.i`
position: absolute;
top: 3px;
right: 8px;
&:hover {
  cursor: pointer;
}
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
                               ref={input => this.searchInput = input} 
                               value={this.state.searchTerm}
                               onBlur={this.mobileSearchSubmit}
                               onChange={this.handleSearchChange}
                               onKeyDown={this.handleSearchSubmit}
                        />
                        <SearchIcon className="fa fa-2x fa-search"
                                    hidden={!hideNavigation}
                                    onClick={() => this.searchInput.focus()}   />
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