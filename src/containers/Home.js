import React from 'react'
import StrokeLogo from '../components/StrokeLogo';
//images
import wave from '../assets/wave-bg.svg';
import team from "../assets/dev-team.svg";

const Home = () => {
    return (
      <div className="homepage-body" style={{ height: "100vh" }}>
        <section
          className="hero-section"
          style={{
            backgroundImage: `url(${wave})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <StrokeLogo />
          <div 
            className="team-img-container">
            <img id="dev-team" src={team} style={{objectFit: "cover"}} />
          </div>
        </section>
      </div>
    );
}

export default Home;