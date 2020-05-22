const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/runningappdb', {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const userSeed = [
  {
    id: 1,
    username: 'Snake',
    email: 'ajain0@utexas.edu',
    password: 'R4WyCrG5O6',
    dateCreated: '9/23/2019',
    teams: [],
    events: [],
    records: [],
    logs: [],
  },
  {
    id: 2,
    username: 'Squirrel',
    email: 'cbrabant1@i2i.jp',
    password: 'dYkGJ3',
    dateCreated: '12/31/2019',
    teams: [],
    events: [],
    records: [],
    logs: [],
  },
  {
    id: 3,
    username: 'Flycatcher',
    email: 'lgrainge2@plala.or.jp',
    password: 'SOr3zQoGxv8l',
    dateCreated: '10/26/2019',
    teams: [],
    events: [],
    records: [],
    logs: [],
  },
  {
    id: 4,
    username: 'Buffalo',
    email: 'sgebhard3@japanpost.jp',
    password: 'lMsrjN9jK',
    dateCreated: '9/26/2019',
    teams: [],
    events: [],
    records: [],
    logs: [],
  },
  {
    id: 5,
    username: 'Rat',
    email: 'jiacovucci4@umn.edu',
    password: 'DLNI6Y6DOX',
    dateCreated: '11/24/2019',
    teams: [],
    events: [],
    records: [],
    logs: [],
  },
  {
    id: 6,
    username: 'Lion',
    email: 'kubsdell5@ifeng.com',
    password: '18kxOuNOJ4',
    dateCreated: '10/6/2019',
    teams: [],
    events: [],
    records: [],
    logs: [],
  },
  {
    id: 7,
    username: 'Turkey',
    email: 'rharsnipe6@shinystat.com',
    password: 'ao9a9YRk',
    dateCreated: '2/17/2020',
    teams: [],
    events: [],
    records: [],
    logs: [],
  },
  {
    id: 8,
    username: 'Turtle',
    email: 'fgaunt7@google.com.hk',
    password: 'QhiNnHqwN',
    dateCreated: '7/29/2019',
    teams: [],
    events: [],
    records: [],
    logs: [],
  },
  {
    id: 9,
    username: 'Peacock',
    email: 'gmainz8@redcross.org',
    password: 'zOH6631zA',
    dateCreated: '11/3/2019',
    teams: [],
    events: [],
    records: [],
    logs: [],
  },
  {
    id: 10,
    username: 'Eagle',
    email: 'bpointon9@taobao.com',
    password: 'dMsZNYPq',
    dateCreated: '12/1/2019',
    teams: [],
    events: [],
    records: [],
    logs: [],
  },
  {
    id: 11,
    username: 'Vulture',
    email: 'jlinfoota@amazon.de',
    password: 'VMTi2ROXSqLv',
    dateCreated: '2/27/2020',
    teams: [],
    events: [],
    records: [],
    logs: [],
  },
  {
    id: 12,
    username: 'Cat',
    email: 'wsammutb@ox.ac.uk',
    password: 'cGMrdRKu',
    dateCreated: '11/23/2019',
    teams: [],
    events: [],
    records: [],
    logs: [],
  },
];

const teamSeed = [
  {
    id: 1,
    name: 'Russia',
    mascotIMG: 'Snow Sheep',
    teamType: 'public',
    teamStatus: 'available',
    dateCreated: '11/12/2019',
    users: [],
    events: [],
    records: [],
    logs: [],
  },
  {
    id: 2,
    name: 'Indonesia',
    mascotIMG: 'Orangutans',
    teamType: 'private',
    teamStatus: 'available',
    passcode: 'UzbJa8tUupT',
    dateCreated: '8/30/2019',
    users: [],
    events: [],
    records: [],
    logs: [],
  },
];

const eventSeed = [
  {
    name: 'North Pole Virtual Relay',
    distance: 3000,
    startTime: '5/22/2020',
    completedTime: '',
    dateCreated: '5/22/2020',
    status: 'active',
    users: [],
    teams: [],
    logs: [],
    records: [],
  },
];

const logSeed = [
  {
    id: 1,
    time: 269,
    distance: 32,
    timeStamp: '2/3/2020',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 2,
    time: 245,
    distance: 28,
    timeStamp: '3/2/2020',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 3,
    time: 15,
    distance: 6,
    timeStamp: '1/11/2020',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 4,
    time: 337,
    distance: 6,
    timeStamp: '1/13/2020',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 5,
    time: 306,
    distance: 25,
    timeStamp: '6/30/2019',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 6,
    time: 99,
    distance: 10,
    timeStamp: '12/8/2019',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 7,
    time: 16,
    distance: 31,
    timeStamp: '4/6/2020',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 8,
    time: 354,
    distance: 32,
    timeStamp: '10/25/2019',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 9,
    time: 168,
    distance: 5,
    timeStamp: '3/23/2020',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 10,
    time: 397,
    distance: 27,
    timeStamp: '1/21/2020',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 11,
    time: 172,
    distance: 28,
    timeStamp: '4/16/2020',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 12,
    time: 39,
    distance: 35,
    timeStamp: '4/21/2020',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 13,
    time: 296,
    distance: 40,
    timeStamp: '2/29/2020',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 14,
    time: 127,
    distance: 36,
    timeStamp: '5/5/2020',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 15,
    time: 208,
    distance: 29,
    timeStamp: '6/3/2019',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 16,
    time: 2,
    distance: 14,
    timeStamp: '7/29/2019',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 17,
    time: 122,
    distance: 25,
    timeStamp: '5/28/2019',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 18,
    time: 33,
    distance: 29,
    timeStamp: '11/16/2019',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 19,
    time: 298,
    distance: 13,
    timeStamp: '1/22/2020',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
  {
    id: 20,
    time: 378,
    distance: 3,
    timeStamp: '11/26/2019',
    users: [],
    teams: [],
    events: [],
    records: [],
  },
];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + 'records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Event.deleteMany({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + 'records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Team.deleteMany({})
  .then(() => db.Team.collection.insertMany(teamSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Log.deleteMany({})
  .then(() => db.Log.collection.insertMany(logSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
