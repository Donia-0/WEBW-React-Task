import React from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import AccelerationProcess from './Acceleration/AccelerationProcess';
import BusinessSolution from './BusinessSolution/BusinessSolution';
import LandingSection from './LandingSection';
import LBestPlatform from './LBestPlatform';
import PlatformOverview from './PlatformOverview';
import RBestPlatform from './RBestPlatform';
import LastSection from './LastSection';
import Footer from './Layout/Footer';

function App() {
  return (
          <div>
            <LandingSection/>
            <BusinessSolution/>
            <LBestPlatform/>
            <PlatformOverview/>
            <RBestPlatform/>
            <AccelerationProcess/>
            <LastSection/>
            <Footer/>
          </div>
  );
}

export default App;
