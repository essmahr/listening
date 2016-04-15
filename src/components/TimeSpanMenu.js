import React from 'react';
import { connect } from 'react-redux';
import {changeTimeSpan} from '../actions';

class TimeSpanButton extends React.Component {
  onClick() {
    this.props.onClick(this.props.timeSpan);
  }

  render() {
    const active = this.props.isActive ? 'active' : '';

    return (
      <button className={`timespan-menu-button ${active}`} onClick={this.onClick.bind(this)}>{this.props.label}</button>
    );
  }
}

class TimeSpanMenu extends React.Component {
  timespans = {
    week: "Past Week",
    month: "Past Month",
    year: "Past Year",
    allTime: "All-Time",
  };

  onClick(span) {
    this.props.changeTimeSpan(span);
  }

  render() {
    const buttons = Object.keys(this.timespans).map((timeSpan, idx) => {
      return <TimeSpanButton key={idx} label={this.timespans[timeSpan]} isActive={this.props.activeTimeSpan === timeSpan} timeSpan={timeSpan} onClick={this.onClick.bind(this)} />;
    });


    return (
      <div className="timespan-menu">
        {buttons}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeTimeSpan: state.activeTimeSpan,
  }
}

export default connect(
  mapStateToProps,
  {changeTimeSpan}
)(TimeSpanMenu)

