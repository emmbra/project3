// import React from 'react';
// import { Header, List, Button, Popup } from 'semantic-ui-react';

// // export default (props) => {
//   console.log(props);
//   if (props.teams.length === 0) {
//     return <Header content='There are no teams yet'/>;
//   } else {
//     // return props.teams.map(({_id, name, mascotIMG, teamType, teamStatus,passcode, users}) => {
//     //   return (
//     //     <List.Item key={_id}>
//     //       <List.Content floated='left' >
//     //         <p style={{ teamType: 'private' ? 'color': 'green', fontSize: '20px'}}>{name}{mascotIMG}</p>
//     //       </List.Content>
//     //       <List.Content floated='right'>
//     //         <Popup
//     //           on='click'
//     //           position='top right'
//     //           trigger={
//     //             <Button
//     //               color='blue'
//     //               content='Join this team!'
//     //               size='small'
//     //               onClick={ (event) => props.handleUpdate(_id, name, users)}
//     //             />
//     //           }
//     //         />
//     //       </List.Content>

//     //       <List.Content floated='left' >
//     //         <p style={{ teamType: 'public' ? 'color': 'red', fontSize: '20px'}}>{name}{mascotIMG}</p>
//     //       </List.Content>
//     //       <List.Content floated='right'>
//     //         <Popup
//     //           on='click'
//     //           position='top right'
//     //           trigger={
//     //             <Button
//     //               color='blue'
//     //               content='Join this team!'
//     //               size='small'
//     //             />
//     //           }
//     //           content={
//     //             <Button
//     //               color='green'
//     //               content='What is the passcode for this team?'
//     //               onClick={ (event) => props.handleUpdate(_id, name, passcode)}
//     //             />
//     //           }
//     //         />
//     //       </List.Content>
//     //     </List.Item>
//     //   );
//     // });
//   }
// }