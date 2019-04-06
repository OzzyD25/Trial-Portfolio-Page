import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ozzy Doron</h2>
            {/* Spare Avatar Image = https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png */}
            <img src="https://avatars3.githubusercontent.com/u/41333945?s=400&u=00ae1c00e519a5efba3103d53d821db2f6434a6a&v=4"
                 alt="avatar"
                 style={{ height: '250px', borderRadius: '5%'}} />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>em Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknt also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true" style={{ color: '#3FC63F'}}/>
                    (+44) 07964356573
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true" style={{ fontSize: '56px', color: '#5D6264'}}/>
                    ozzy.doron@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true" style={{ color: '#125AAC'}} />
                    Ozzy Doron
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-github" aria-hidden="true" style={{ color: '#5C1187'}}/>
                    OzzyD25
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
