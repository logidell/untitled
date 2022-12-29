import logo from './logo.svg';
import './App.css';
import {getData , getData1} from './es6/Promise'

function App() {
    getData();
    getData1()
            .then(function (data){
                console.log(data);
            })
            .catch (function(err) {
                console.log(err);
            })
    return (
    <div className="App">
        {/*<header className="App-header">*/}
        {/*  <img src={logo} className="App-logo" alt="logo" />*/}
        {/*  <p>*/}
        {/*    Edit <code>src/App.js</code> and save to reload.*/}
        {/*  </p>*/}
        {/*  <a*/}
        {/*    className="App-link"*/}
        {/*    href="https://reactjs.org"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Learn React*/}
        {/*  </a>*/}
        {/*</header>*/}
    {/*  여기까지가 화면 출력 구문 */}

    </div>
    );
}

export default App;
