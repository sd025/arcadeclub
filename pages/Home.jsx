import React from 'react'
import { Link } from 'react-router-dom'
import Discover from '../components/Discover';
import Header from '../components/Header';
import News from '../components/News';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TabTitle } from './GeneralFunctions';

const Home = () => {
  TabTitle("Arcade Club")
  return (
    
    <div className="home">
                {/* <Navbar /> */}
 <Discover/>
 {/* <Footer /> */}
    
    </div>
  )
}

export default Home