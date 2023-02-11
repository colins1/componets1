import './App.css';
import './bootstrap.css';
import React from 'react';
import List from './component/List';
import ListItem from './component/ListItem';
function App() {
  return (
    <div className="App">
      <List>{(item) => <ListItem key={item}>{item}</ListItem>}</List>
    </div>
  );
}

export default App;
