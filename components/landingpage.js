import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="https://dentalogica-practice.co.uk/wp-content/uploads/2017/05/avatar-male-300x300.png"
                 alt="avatar"
                 className="profile-img" />
            <div className="banner-text">
              <h1>Front End Developer</h1>
              <hr/>
              <p>HTML | CSS | SCSS | Bootstrap | Javascript | React | jQuery</p>
              <div className="social-link">
                {/* Linkedin */}
                <a href="https://www.linkedin.com/in/ozzy-doron-6bb8a3112/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>
                {/* Github */}
                <a href="https://github.com/OzzyD25" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true"/>
                </a>
                {/* Youtube */}
                <a href="https://plus.google.com/u/0/107644269775242229693?tab=mX" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-envelope-square" aria-hidden="true"/>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;
