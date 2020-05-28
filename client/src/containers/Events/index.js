import React, { Component } from 'react'
import { Segment, Accordion } from 'semantic-ui-react'

const level1Panels = [
  { key: 'panel-1a', title: 'Team 1 - A', content: 'Team 1 - A Team Members' },
  { key: 'panel-ba', title: 'Team 2 - A', content: 'Team 2 - A Team Members' },
]

const Level1Content = (
  <div>
    Teams in Event 1
    <Accordion.Accordion panels={level1Panels} />
  </div>
)

const level2Panels = [
  { key: 'panel-2a', title: 'Team 1 - B', content: 'Team 1 - B Team Members' },
  { key: 'panel-2b', title: 'Team 2 - B' , content: 'Team 2 - B Team Members' },
]

const Level2Content = (
  <div>
  Teams in Event 2
  <Accordion.Accordion panels={level2Panels} />
  </div>
)

const rootPanels = [
  { key: 'panel-1', title: 'Event1', content: { content: Level1Content } },
  { key: 'panel-2', title: 'Event2', content: { content: Level2Content } },
]
class Event extends Component {
  
  render() {
    return (
      <div>
        <Segment>
          <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
        </Segment>
      </div>
    )
  }
}

export default Event;
