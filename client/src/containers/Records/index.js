import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  Segment,
  Grid,
  Divider,
  Button,
  Dimmer,
  Header,
  Icon,
  Statistic,
} from "semantic-ui-react";
import { getRecords } from "../../actions/records";
import mascots from "../../static/mascots";
import runningMan from "../../assets/running_stick.png";

class Records extends Component {
  state = {};

  handleOpen = () => this.setState({ active: true });
  handleClose = () => this.setState({ active: false });

  renderRecords = () => {
    const { active } = this.state;
    const records = this.props.recordsList.records;
    console.log("recorsd??", records);
    // const { name } = this.props.recordsList.records.event

    return (
      this.props.recordsList?.records?.length !== 0 &&
      this.props.recordsList?.records?.map(
        (distanceCovered, calculatedTime, event) => {
          return (
            <Grid.Row>
              <Grid.Column>
                <Header
                  style={{ textTransform: "uppercase", color: "#39bc78" }}
                >
                  Run to the Sun
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header
                  style={{ textTransform: "uppercase", color: "#39bc78" }}
                >
                  3,000
                </Header>
              </Grid.Column>

              <Grid.Column>
                <Header
                  style={{ textTransform: "uppercase", color: "#39bc78" }}
                >
                  500
                </Header>
              </Grid.Column>

              <Grid.Column>
                <div>
                  <Button
                    content="winners"
                    icon="heart"
                    labelPosition="middle"
                    onClick={this.handleOpen}
                  >
                    <img
                      src={runningMan}
                      width="30"
                      alt="winning team mascot"
                    />
                  </Button>
                  <Dimmer
                    active={active}
                    onClickOutside={this.handleClose}
                    page
                  >
                    <Header as="h2" icon inverted>
                      <img src={mascots.ram} alt="winning team mascot" />
                      THE WINNING TEAM!
                      <Header.Subheader>
                        Congratulations on being the fastest runners of this
                        event! Keep it up for the next event!
                      </Header.Subheader>
                    </Header>
                  </Dimmer>
                </div>
              </Grid.Column>
            </Grid.Row>
          );
        }
      )
    );
  };

  render() {
    console.log("records", this.props);
    const { active } = this.state;
    return (
      <Segment>
        <Grid stackable container columns={4}>
          <Grid.Row verticalAlign="middle" style={{ padding: "0" }}>
            <Grid.Column>
              <Header
                as="h3"
                style={{
                  color: "#858585",
                  margin: "1em 0em",
                  textTransform: "uppercase",
                }}
              >
                Past Events
              </Header>
            </Grid.Column>

            <Grid.Column>
              <Header
                as="h3"
                style={{
                  color: "#858585",
                  margin: "1em 0em",
                  textTransform: "uppercase",
                }}
              >
                Event Distance (Miles)
              </Header>
            </Grid.Column>

            <Grid.Column>
              <Header
                as="h3"
                style={{
                  color: "#858585",
                  margin: "1em 0em",
                  textTransform: "uppercase",
                }}
              >
                Event Duration (Hours)
              </Header>
            </Grid.Column>

            <Grid.Column>
              <Header
                as="h3"
                style={{
                  color: "#858585",
                  margin: "1em 0em",
                  textTransform: "uppercase",
                }}
              >
                Winning Team
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Divider />

          {this.renderRecords()}
          {/* <Grid.Column>
            <Header style={{ textTransform: 'uppercase', color: '#39bc78'}} >
            Run to the Sun
              </Header>
            </Grid.Column>

            <Grid.Column>
              <Header style={{ textTransform: 'uppercase', color: '#39bc78'}} >
              3,000
              </Header>
            </Grid.Column>

            <Grid.Column>
              <Header style={{ textTransform: 'uppercase', color: '#39bc78'}} >
              500
              </Header>
            </Grid.Column>

            <Grid.Column>
              <div>
                <Button
                  content='winners'
                  icon='heart'
                  labelPosition='middle'
                  onClick={this.handleOpen}
                >
                  ===
                <img src={runningMan} width='30' alt="winning team mascot" />
                </Button>
                <Dimmer active={active} onClickOutside={this.handleClose} page>
                  <Header as='h2' icon inverted>
                    <img src={mascots.ram} alt="winning team mascot" />
                    THE WINNING TEAM!
                    <Header.Subheader>
                      Congratulations on being the fastest runners of this event! Keep it up for the next event!
                      </Header.Subheader>
                  </Header>
                </Dimmer>
              </div>
            </Grid.Column> */}
        </Grid>
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return {
    recordsList: state.record,
  };
}

export default compose(
  connect(mapStateToProps, { getRecords }),
  reduxForm({ form: "Records" })
)(Records);
