import "./App.css";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import BackgroundImage  from './assets/background.jpg';

function App() {
  return (
    <div style={{backgroundImage: `url(${BackgroundImage})`, boxFit: 'cover', height: '100vh' }}>
      <Navbar/>
      <div class="container body">
        <div class="resume-box">
          <h2 class="resume-box-title">Geologist</h2>
          <p class="resume-box-p">
            Prior to my studies at Geoscience I studied Chemistry for two years,
            and it was here I found my interest in water – which prompted the
            change from Chemistry to Geoscience. My completed courses reflect
            this interest in water, as I have chosen courses that have given me
            experience in how to use GIS for mapping, MODFLOW for groundwater
            molding and PhreeqC to do calculations of water samples.
          </p>
          <p class="resume-box-p">
            I highly enjoy working in the field and solve problems. I am certain
            my analytic approach will be very helpful in solving any type of
            water related issues as they are presented during the course.
            Furthermore, I enjoy working in groups as I find that
            well-functioning teams often end up with a better solution to any
            given problem. I can contribute with my knowledge from my completed
            courses, but also the state-of-the-art knowledge from my master
            thesis.
          </p>
        </div>
        <img class="resume-img" src="tuborg.jpg" alt="Øl" />
      </div>

      <div>
        <Timeline/>
      </div>
    </div>
  );
}

export default App;
