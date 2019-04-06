import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <h2 style={{ paddingTop: '0.6em'}}>Ozzy Doron</h2>
            <h4 style={{ color: 'grey'}}>Developer</h4>
            <hr style={{ borderTop: '3px solid #F2DC17', width: '50%'}} />
            <p>dustry. Lorem Ipsum has been the industry's standard dummy text ever
               since the 1500s, when an unknt also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passage</p>
            <hr style={{ borderTop: '3px solid #F2DC17', width: '50%'}} />
            <h5>Address</h5>
            <p>1 Mill Hill Chicken Dipper 6ah 807</p>
            <h5>Phone</h5>
            <p>056535345</p>
            <h5>Email</h5>
            <p>ozzferfrf@chicken.com</p>
            <h5>Web</h5>
            <p>somewhere.com</p>
            <hr style={{ borderTop: '3px solid #F2DC17', width: '50%'}} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
            <Experience startYear="October 2018"
                        endYear="December 2018"
                        companyName="CodeCademy"
                        jobTitle="Build Front-End Web Applications from Scratch Course"
                        />
            <Experience startYear="May 2018"
                        endYear="Present"
                        companyName="CodeCademy"
                        jobTitle="Front End Development"
                        jobDescription="I have been intensely studying front-end languages in my own time, beginning with HTML and CSS. This progressed into using Bootstrap, Javascript and jQuery. During this time, I’ve created some personal projects that include javascript games and some web designs built from scratch using HTML and different CSS design layouts."
                        />
            <hr style={{ borderTop: '3px solid #e22947'}}/>
            <h2>Education</h2>
            <Education startYear={2008}
                       endYear={2014}
                       schoolName="JFS, Jewish free School"
                       />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
