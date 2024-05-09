import logo from './logo.svg';
import './App.css';
import { MyPage } from './components/MyPage';
import { MyPageContext } from './components/MyPageContext';

function App() {
  // otro video https://www.youtube.com/watch?v=dmxVjrSdOAY
  return (
    <div className="App">
      <hr/>
      <MyPageContext/>
      <hr/>
      <MyPage/>
    </div>
  );
}

export default App;
