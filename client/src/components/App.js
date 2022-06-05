import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import history from '../history';
import Navigation from './Navigation';
import Jumbotron from './Jumbotron';
import Feed from './Feed';
import Contact from './Contact';
import About from './About';
import Loading from './Loading';
import './App.css';

  const createMarkup = () => {
    return { _html: <div style={{ color: "#FFFFFF" }}>I am dangerous you can use it</div> };
  };
const JUMBO_TITLE = 'List of courses';
const NAME = 'Rahul';
const App = () => {
  const [feeds, setFeeds] = useState([]);


  useEffect(() => {
      const url = 'http://localhost:4000/courses';
      const fetchData = async () => {
      const { data = [] } = await axios.get(url);
      console.log("in Render place",data  );
      setFeeds(data);
    };
    fetchData();
  }, []);
  const { loading } = useAuth0;

  if (loading) { 
    return <Loading />
  } 

  return (
    <Router history={ history}>
      <div className="container">
        <Navigation />
        <Jumbotron title={JUMBO_TITLE} />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/" element={<Feed feeds={feeds} />} />
             
        </Routes>
        <div className="footer">
          <p>&copy; {NAME} Inc.</p>
          {/* <div innerHTML={createMarkup()} /> */}
          {/* <div dangerouslySetInnerHTML={ createMarkup()} /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
