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
      <button className={`timespan-menu-button ${active}`} onClick={this.onClick.bind(this)}>
        {this.props.children}
      </button>
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
    const {activeTimeSpan} = this.props;

    return (
      <div className="timespan-menu">
        <TimeSpanButton isActive={activeTimeSpan === 'week'} timeSpan='week' onClick={this.onClick.bind(this)}>
          <span className="fl">
            <span className="pr">Past </span>
            Week
          </span>
          <span className="shr">1wk</span>
        </TimeSpanButton>
        <TimeSpanButton isActive={activeTimeSpan === 'month'} timeSpan='month' onClick={this.onClick.bind(this)}>
          <span className="fl">
            <span className="pr">Past </span>
            Month
          </span>
          <span className="shr">1mo</span>
        </TimeSpanButton>
        <TimeSpanButton isActive={activeTimeSpan === 'sixMonths'} timeSpan='sixMonths' onClick={this.onClick.bind(this)}>
          <span className="fl">
            <span className="pr">Past </span>
            6 Months
          </span>
          <span className="shr">6mo</span>
        </TimeSpanButton>
        <TimeSpanButton isActive={activeTimeSpan === 'year'} timeSpan='year' onClick={this.onClick.bind(this)}>
          <span className="fl">
            <span className="pr">Past </span>
            Year
          </span>
          <span className="shr">12mo</span>
        </TimeSpanButton>
        <TimeSpanButton isActive={activeTimeSpan === 'allTime'} timeSpan='allTime' onClick={this.onClick.bind(this)}>
          <span className="fl">All Time</span>
          <span className="shr">
            <svg viewBox="0 0 173 83">
              <path stroke="#000000" fill="none" strokeWidth="8" d="M9.98046875,38.9023438 C9.98046875,38.9023438 10.7465632,7.85546875 42.7599501,7.85546875 C74.7733369,7.85546875 94.0707906,73.2421875 130.921876,73.2421875 C167.772962,73.2421875 165.539064,38.9023438 165.539064,38.9023438 C165.539064,38.9023438 167.199051,7.85546875 130.921876,7.85546875 C94.6447018,7.85546875 80.3192095,73.2421875 42.7599512,73.2421875 C5.20069282,73.2421875 9.98046875,38.9023438 9.98046875,38.9023438 Z"></path>
            </svg>
          </span>
        </TimeSpanButton>
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

