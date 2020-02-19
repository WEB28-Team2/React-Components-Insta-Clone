import React, {useState} from "react";
import SearchBar from '../src/components/SearchBar/SearchBarContainer.js';
import PostPage from '../src/components/PostsContainer/PostsPage.js';
import "./App.css";
import dummyStuff from './dummy-data.js';

const App = () => {
  const [dummyData, setDummyData] = useState(dummyStuff);

  return (
    <div className="App">
      <SearchBar />
      <PostPage dummyData = {dummyData}/>
    </div>
  );
};

export default App;
