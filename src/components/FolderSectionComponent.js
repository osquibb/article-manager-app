import React from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Folder from './FolderComponent';
import data from '../data/data';

const Container = styled.div`
display: flex;
justify-content: center;
`;

class FolderSection extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      articles: data.articles,
      folders: data.folders,
      folderOrder: data.folderOrder,
      nextArticleId: 0,
      searchResults: [],
      firstResultVisible: false,
      lastResultVisible: false
    };
  
    this.getWikiArticles = this.getWikiArticles.bind(this);
    this.populateSearchResults = this.populateSearchResults.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  async getWikiArticles(searchTerm) {
    let searchResults = [];
    if (searchTerm !== '') {
      await fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${searchTerm}&limit=32`)
            .then(resp => resp.json())
            .then(data => {
              let _searchResults = []
              for (let i=0; i < data[1].length; i++) {
                this.setState(prevState => ({nextArticleId: prevState.nextArticleId + 1}), () => {
                  _searchResults.push({id: `article-${this.state.nextArticleId}`, content: data[1][i], link: data[3][i]});
                });
              }
              return _searchResults;
            })
            .then(_searchResults => searchResults = _searchResults)
            .catch(err => console.log(err));
          }
    return searchResults;
  }

  async populateSearchResults(searchTerm, pageNum, newSearch=true) {
    const newArticles = {};
      const newFolder = {
        id: 'folder-1',
        title: '',
        articleIds: []
      };
    let searchResults = [];
    if (newSearch) {
      searchResults = await this.getWikiArticles(searchTerm);
    } else {
      searchResults = this.state.searchResults;
    }
    this.setState({searchResults}, () => {
      let lastIdx = pageNum * 4;
      if (lastIdx >= searchResults.length) {
        lastIdx = searchResults.length;
      }
      let firstIdx = lastIdx - 4;
      if (firstIdx < 0) {
        firstIdx = 0;
      }
      for (let i=firstIdx; i < lastIdx; i++) {
        newArticles[searchResults[i].id] = {
                                              id: searchResults[i].id,
                                              content: searchResults[i].content, 
                                              link: searchResults[i].link
                                            };
        newFolder.articleIds.push(searchResults[i].id)
      }
      const newState = {
        ...this.state,
        articles: {...this.state.articles, ...newArticles},
        folders: {
          ...this.state.folders,
          'folder-1': newFolder
        }
      };
      this.setState(newState, () => {
        if (searchResults[0]) {
          const firstResultVisible = this.state.folders['folder-1']
                                      .articleIds.indexOf(searchResults[0].id) !== -1;
          const lastResultVisible = this.state.folders['folder-1']
                                      .articleIds.indexOf(searchResults[searchResults.length - 1].id) !== -1;
          this.setState({firstResultVisible});
          this.setState({lastResultVisible});
        }
      });
    })
  }

  deleteArticle(articleId) {
    const folders = this.state.folders;
    let folderId = 0;
    for (let id in folders) {
      if (folders[id].articleIds.indexOf(articleId) !== -1) {
        folderId = id;
      }
    }

    let newSearchResults = [...this.state.searchResults];
    for (let i=0; i < newSearchResults.length; i++) {
      if (newSearchResults[i].id === articleId) {
        newSearchResults.splice(i, 1);
      } 
    }
    this.setState({searchResults: newSearchResults});

    const newArticles = {};
    for (let id in this.state.articles) {
      if (id !== articleId) {
        newArticles[id] = this.state.articles[id];
      }
    }
    const folder = this.state.folders[folderId];
    const newArticleIds = [...folder.articleIds];
    newArticleIds.splice(newArticleIds.indexOf(articleId), 1);
    const newFolder = {
      id: folder.id,
      title: folder.title,
      articleIds: newArticleIds
    }
    const newState = {
      ...this.state,
      articles: newArticles,
      folders: {
        ...this.state.folders,
        [folderId]: newFolder
      }
    };
    this.setState(newState);
  }

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
      const newarticleIds = Array.from(start.articleIds);
      newarticleIds.splice(source.index, 1);
      newarticleIds.splice(destination.index, 0, draggableId);

      const newfolder = {
        ...start,
        articleIds: newarticleIds  
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
    const startarticleIds = Array.from(start.articleIds);
    startarticleIds.splice(source.index, 1);
    const newStart = {
      ...start,
      articleIds: startarticleIds,
    };

    const finisharticleIds = Array.from(finish.articleIds);
    finisharticleIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      articleIds: finisharticleIds,
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

    // update searchResults after drag from 'folder-1'
    if (start.id === 'folder-1') {
      const newSearchResults = Array.from(this.state.searchResults);
      for (let i=0; i < newSearchResults.length; i++) {
        if (newSearchResults[i].id === draggableId) {
          newSearchResults.splice(i, 1);
        }
      }
      this.setState({searchResults: newSearchResults});
    }
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
                const articles = folder.articleIds.map(articleId => this.state.articles[articleId]);
                return (
                  <Folder 
                    key={folder.id}
                    folder={folder} 
                    articles={articles} 
                    index={index}
                    populateSearchResults={this.populateSearchResults}
                    deleteArticle={this.deleteArticle}
                    hidePrevButton={this.state.firstResultVisible}
                    hideNextButton={this.state.lastResultVisible}
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
