const data = {
  files: {
    'file-1': { id: 'file-1', content: 'file 1 content'},
    'file-2': { id: 'file-2', content: 'file 2 content'},
    'file-3': { id: 'file-3', content: 'file 3 content'},
    'file-4': { id: 'file-4', content: 'file 4 content'},
  },
  folders: {
    'folder-1': {
      id: 'folder-1',
      title: 'Untitled',
      fileIds: ['file-1', 'file-2', 'file-3', 'file-4'],
    },
    'folder-2': {
      id: 'folder-2',
      title: 'Untitled',
      fileIds: [],
    },
    'folder-3': {
      id: 'folder-3',
      title: 'Untitled',
      fileIds: [],
    },
  },
  folderOrder: ['folder-1', 'folder-2', 'folder-3'],
};

export default data;