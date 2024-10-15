import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import JobsForYou from './Components/Pages/JobsForYou'
import JobsForFresher from './Components/Pages/JobsForFresher'
import PrivacyPolicy from './Components/Pages/PrivacyPolicy';
import ContactUs from './Components/Pages/ContactUs';
import Footer from './Components/Footer';
import Alljobs from './Components/Pages/Alljobs';
import JobsForWorkFromHome from './Components/Pages/JobsForWorkFromHome'
import JobsWomen from './Components/Pages/JobsForWomen'
import JobsforCollageStudent from './Components/Pages/JobsforCollageStudent'
import PartTime from './Components/Pages/PartTime'
import ITJobs from './Components/Pages/ITJobs'
import Engineering from './Components/Pages/Engineering' 
import WalkInJobs from './Components/Pages/WalkInJobs' 
import RemoteJobs from './Components/Pages/RemoteJobs' 
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-jobs" element={<Alljobs />} />
        <Route path="/jobs-for-you" element={<JobsForYou />} />
        <Route path="/jobs-for-freshers" element={<JobsForFresher />} />
        <Route path="/work-from-home-jobs" element={<JobsForWorkFromHome />} />
        <Route path="/jobs-for-women" element={<JobsWomen />} />
        <Route path="/jobs-for-college-student" element={<JobsforCollageStudent />} />
        <Route path="/part-time-jobs" element={<PartTime />} />
        <Route path="/it-jobs" element={<ITJobs />} />
        <Route path="/engineering-jobs" element={<Engineering />} />
        <Route path="/walk-in-jobs" element={<WalkInJobs />} />
        <Route path="/remote-jobs" element={<RemoteJobs />} />
        <Route path="/fresher-job" element={<JobsForFresher />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
