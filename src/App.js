import React from 'react';
import FolderSection from './components/FolderSectionComponent'

function App() {
  return(
    <div className="container">
      <div className="row text-center mt-4">
        <div className="col">
          <h2>Wikipedia Article Manager</h2>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <FolderSection />
        </div>
      </div>
    </div>
  );
}

export default App;