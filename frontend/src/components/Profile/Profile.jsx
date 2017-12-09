'use strict'
import React, { Component } from 'react';
import { Header, Image, Card, Icon, Table, Rating, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import styles from './Profile.scss';
import TopBar from '../TopBar/TopBar.jsx';

class Profile extends Component {
  render() {
    return (
      <div className="ui container center aligned">
        <TopBar/>
        <h1>Profile Component</h1>
          <Header as='h2'>
            <Image circular src='.../../assets/avatar1.png' />
            {' '}yvilei
          </Header>
          <Card color="violet" >
             <Image src='.../../assets/avatar1.png' />
             <Card.Content>
               <Card.Header>
                 Ivy
               </Card.Header>
               <Card.Meta>
                 <span className='date'>
                   Joined in 2014
                 </span>
               </Card.Meta>
               <Card.Description>
                 Ivy is a software engineer living in Naperville.
               </Card.Description>
             </Card.Content>
             <Card.Content extra>
               <a>
                 <Icon name='user' />
                 5 Friends
               </a>
             </Card.Content>
           </Card>
           <br/>
             <Dropdown text='Filter' icon='filter' floating labeled button className='icon'>
               <Dropdown.Menu>
                 <Dropdown.Item>Rating</Dropdown.Item>
                 <Dropdown.Item>Date Updated</Dropdown.Item>
               </Dropdown.Menu>
             </Dropdown>
           <Table celled padded>
             <Table.Header>
               <Table.Row>
                 <Table.HeaderCell singleLine>Date</Table.HeaderCell>
                 <Table.HeaderCell>Location</Table.HeaderCell>
                 <Table.HeaderCell>Rating</Table.HeaderCell>
                 <Table.HeaderCell>Characteristics</Table.HeaderCell>
                 <Table.HeaderCell>Reviews</Table.HeaderCell>
               </Table.Row>
             </Table.Header>

             <Table.Body>
               <Table.Row>
                 <Table.Cell>
                   <Header as='h2' textAlign='center'>12/04/17</Header>
                 </Table.Cell>
                 <Table.Cell singleLine>Cafe</Table.Cell>
                 <Table.Cell>
                   <Rating icon='star' defaultRating={3} maxRating={5} />
                 </Table.Cell>
                 <Table.Cell textAlign='right'>
                     Quiet, Wifi, Coffee, Study <br />
                 </Table.Cell>
                 <Table.Cell>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                 </Table.Cell>
               </Table.Row>
               <Table.Row>
                 <Table.Cell>
                   <Header as='h2' textAlign='center'>12/04/17</Header>
                 </Table.Cell>
                 <Table.Cell singleLine>Library</Table.Cell>
                 <Table.Cell>
                   <Rating icon='star' defaultRating={4} maxRating={5} />
                 </Table.Cell>
                 <Table.Cell textAlign='right'>
                     Quiet, Wifi, Coffee, Study, Group <br />
                 </Table.Cell>
                 <Table.Cell>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                 </Table.Cell>
               </Table.Row>
               <Table.Row>
                 <Table.Cell>
                   <Header as='h2' textAlign='center'>12/07/17</Header>
                 </Table.Cell>
                 <Table.Cell singleLine>Cafe</Table.Cell>
                 <Table.Cell>
                   <Rating icon='star' defaultRating={2} maxRating={5} />
                 </Table.Cell>
                 <Table.Cell textAlign='right'>
                     Quiet, Wifi, Coffee, Study <br />
                 </Table.Cell>
                 <Table.Cell>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                 </Table.Cell>
               </Table.Row>
             </Table.Body>
           </Table>
           <br/>
      </div>
    )
  }
}

export default Profile
