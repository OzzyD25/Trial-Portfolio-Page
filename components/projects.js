import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = { activeTab: 0};
  }

  toggleCatergories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="project-grid">
          {/* Project Card */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: '#fff', height: '176px', background:
            'url(https://code.fb.com/wp-content/uploads/2016/09/gjak3qbrgsjmr1afaaaaaada9cc2bj0jaaab.jpg) center / cover'}}>React Project #1</CardTitle>
            <CardText>Sticky in mouty wouty Sticky in mouty wouty Sticky in mouty wouty Sticky in mouty wouty Sticky in mouty wouty</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project Card */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: '#fff', height: '176px', background:
            'url(https://code.fb.com/wp-content/uploads/2016/09/gjak3qbrgsjmr1afaaaaaada9cc2bj0jaaab.jpg) center / cover'}}>React Project #1</CardTitle>
            <CardText>Sticky in mouty wouty Sticky in mouty wouty Sticky in mouty wouty Sticky in mouty wouty Sticky in mouty wouty</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project Card */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: '#fff', height: '176px', background:
            'url(https://code.fb.com/wp-content/uploads/2016/09/gjak3qbrgsjmr1afaaaaaada9cc2bj0jaaab.jpg) center / cover'}}>React Project #1</CardTitle>
            <CardText>Sticky in mouty wouty Sticky in mouty wouty Sticky in mouty wouty Sticky in mouty wouty Sticky in mouty wouty</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div><h1>This is jQuery</h1></div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div><h1>This is Bootstrap</h1></div>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>jQuery</Tab>
          <Tab>Bootstrap</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCatergories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
