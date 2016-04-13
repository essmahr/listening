import React from 'react';
import { connect } from 'react-redux';
import {changeTimeSpan} from '../actions';

class TimeSpanButton extends React.Component {
  onClick() {
    this.props.onClick(this.props.timeSpan);
  }

  render() {
    return (
      <button onClick={this.onClick.bind(this)}>{this.props.label}</button>
    );
  }
}

class TimeSpanMenu extends React.Component {
  onClick(span) {
    this.props.changeTimeSpan(span);
  }

  render() {
    return (
      <div>
        <TimeSpanButton label="Past Week"  timeSpan="week"    onClick={this.onClick.bind(this)} />
        <TimeSpanButton label="Past Month" timeSpan="month"   onClick={this.onClick.bind(this)} />
        <TimeSpanButton label="Past Year"  timeSpan="year"    onClick={this.onClick.bind(this)} />
        <TimeSpanButton label="All-Time"   timeSpan="allTime" onClick={this.onClick.bind(this)} />
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

