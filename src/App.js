import React, { useState } from "react";
import SearchBar from "../src/components/SearchBar/SearchBarContainer.js";
import PostPage from "../src/components/PostsContainer/PostsPage.js";
import "./App.css";
import dummyStuff from "./dummy-data.js";

const App = () => {
  const [dummyData] = useState(dummyStuff);
  const [search, setSearch] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <SearchBar
        onSearchSubmit={onSearchSubmit}
        search={search}
        setSearch={setSearch}
      />
      <PostPage dummyData={dummyData} searchItem={search}/>
    </div>
  );
};

export default App;
