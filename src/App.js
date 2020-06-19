import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom' 
import Sitebar from './Home/Navbar';
import Auth from './Auth/Auth';
import BattingAvgIndex from './BattingAvg/BattingAvgIndex';
import Login from './Auth/Login';
import Signup from './Auth/Signup';


function App() {
const [sessionToken, setSessionToken] = useState('');

useEffect(() => {
  if (localStorage.getItem('token')) {
    setSessionToken(localStorage.getItem('token'))
  }
}, [])

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}
const clearToken = () => {
  localStorage.clear ();
  setSessionToken('');
}

const protectiveViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <BattingAvgIndex token={sessionToken} /> 
  : <Auth updateToken={updateToken}/>)
}

return (
<Router>
 
  <Sitebar clickLogout={clearToken} />
 

        <Switch>
          <Route path="/login">
            {sessionToken === localStorage.getItem('token') ? <Redirect to = "/battingavgindex" /> : null }
            <Login updateToken={updateToken} />
          </Route>
          <Route path="/signup">
          {sessionToken === localStorage.getItem('token') ? <Redirect to = "/battingavgindex" /> : null }
            <Signup updateToken={updateToken}/>
          </Route>
          <Route path="/battingavgindex">
            <BattingAvgIndex token={sessionToken} />
          </Route>
          
        </Switch>
    
    </Router>
)
}



 
export default App;

//return (
//       // <Router>
//       // <div>
//       //     <Sitebar clickLogout={clearToken} />
//       //     {protectiveViews()}
//       //     </div>
//       // <Switch>
//       //   <Route path="/login"><Login /></Route>
//       //   <Route path="/signup"><Signup /></Route>
//       // </Switch>
//       // </Router> 
//   );
// }

