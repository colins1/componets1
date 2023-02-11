import './App.css';
import './bootstrap.css';
import React from 'react';
import List from './components/List';
import ListItem from './components/ListItem';
function App() {
  return (
    <div className="App">
      <List>{(item) => <ListItem key={item}>{item}</ListItem>}</List>
    </div>
  );
}

export default App;
