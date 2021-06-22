import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import AboutUs from './components/about_us/about-us';
import Navbar from './components/navbar/Navbar';
import Create from './components/profile/create/Create';
import CreatePut from './components/profile/create/CreatePut';
import Profile from './components/profile/Profile';
import Item from './components/profile/result/Item';
import RightSide from './components/rightSide/RightSide';
import './App.css';

function App() {
  return (

    <BrowserRouter>
      <div className="App ">
        
        <div className="container bg-white shadow mt-5 rn ">
          <div className="row">

            <div className="col-sm-2 col-md-2 col-lg-2  m-0  ">
              <Navbar />
            </div>

            <div className="col-sm-7 col-md-7 col-lg-7  prof ">
              <Route exact path='/' render={() => (<Redirect to='/profile' />)} />
              <Route path='/profile' render={() => <Profile />} />
              <Route path='/create-put/:id' render={() =>  <CreatePut />} />
              <Route path='/create' render={() => <Create />} />
              <Route path='/item/:id' render={() => <Item />} />
              <Route path='/about' render={() => <AboutUs />} />

            </div>

            <div className="col-sm-3 col-md-3 col-lg-3  ">
              <RightSide />
            </div>
            
          </div>

        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
