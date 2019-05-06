const data = {
  articles: {
    'article-1': { id: 'article-1', content: 'empty'},
    'article-2': { id: 'article-2', content: 'empty'},
    'article-3': { id: 'article-3', content: 'empty'},
    'article-4': { id: 'article-4', content: 'empty'},
  },
  folders: {
    'folder-1': {
      id: 'folder-1',
      title: '',
      articleIds: ['article-1', 'article-2', 'article-3', 'article-4'],
    },
    'folder-2': {
      id: 'folder-2',
      title: 'Untitled',
      articleIds: [],
    },
    'folder-3': {
      id: 'folder-3',
      title: 'Untitled',
      articleIds: [],
    },
  },
  folderOrder: ['folder-1', 'folder-2', 'folder-3'],
};

export default data;