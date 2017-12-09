'use strict'
import React, { Component } from 'react';
import { Header, Search, Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import styles from './ListView.scss';
import TopBar from '../TopBar/TopBar.jsx';

class ListView extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <h1>ListView Component</h1>
          <Search
            placeholder='i.e. Cafes near me'
            open={false}
          />
        <Header size='medium' color='teal' >Results</Header>
        <Grid>
          <Grid.Row container columns={4}>
            <Grid.Column>
              <Image src='.../../assets/knifefork.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='.../../assets/knifefork.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='.../../assets/knifefork.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='.../../assets/knifefork.png' />
            </Grid.Column>
          </Grid.Row>
          <br/>
            <Grid.Row container columns={4}>
              <Grid.Column>
                <Image src='.../../assets/knifefork.png' />
              </Grid.Column>
              <Grid.Column>
                <Image src='.../../assets/knifefork.png' />
              </Grid.Column>
              <Grid.Column>
                <Image src='.../../assets/knifefork.png' />
              </Grid.Column>
              <Grid.Column>
                <Image src='.../../assets/knifefork.png' />
              </Grid.Column>
            </Grid.Row>
            <br/>
              <Grid.Row container columns={4}>
                <Grid.Column>
                  <Image src='.../../assets/knifefork.png' />
                </Grid.Column>
                <Grid.Column>
                  <Image src='.../../assets/knifefork.png' />
                </Grid.Column>
                <Grid.Column>
                  <Image src='.../../assets/knifefork.png' />
                </Grid.Column>
                <Grid.Column>
                  <Image src='.../../assets/knifefork.png' />
                </Grid.Column>
              </Grid.Row>
              <br/>
        </Grid>
      </div>
    )
  }
}

export default ListView
