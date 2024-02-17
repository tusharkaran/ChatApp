
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react'
import HomePage from './Pages/HomePage';
import Chatpage from './Pages/Chatpage';

function App() {
  return (
    <div className="App">
     <Route path = '/' component = {HomePage} exact></Route>
      <Route path = '/chats' component = {Chatpage}></Route>
     {/* <Route path = '/'></Route> */}
    </div>
  );
}

export default App;
