import React from 'react';
import CSSTranstionGroup from 'react-addons-css-transition-group';

class AboutModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about" onClick={this.props.onBgClick}>
        <div className="about-inner" onClick={evt => {evt.stopPropagation()}}>
          <p>I'm using <a href="http://www.last.fm/">Last.fm</a>'s API to pull in my music listening history, where I've been tracking song plays since October 2007.</p>
          <p>If any of the totals are looking weird, it's because Last.fm's API is occasionally a piece of crap.</p>
          <p>Really though, the site is an opportunity for me to experiment and learn more about <a href="https://facebook.github.io/react/">React</a> and especially <a href="http://redux.js.org/">Redux</a>. It was developed and compiled with webpack, and styled with help from <a href="http://cssnext.io/">cssnext</a> and <a href="https://github.com/peterramsing/lost">Lost</a>.</p>
          <p className="lower">
            A <a href="http://smahr.net">smahr.net</a> project / <a href="https://github.com/essmahr/listening">Github</a>
          </p>
        </div>
        <div className="about-close"><span>Close</span></div>
      </div>
    );
  }
}

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    }
  }

  toggleModal() {
    if (this.state.modalOpen) {
      this.closeModal();
    } else {
      this.openModal();
    }
  }

  openModal(evt) {
    document.body.classList.add('scroll-lock');

    this.setState({
      modalOpen: true,
    });
  }

  closeModal(evt) {
    document.body.classList.remove('scroll-lock');

    this.setState({
      modalOpen: false,
    });
  }

  render() {
    return (
      <div>
        <div className="button-container">
          <button className="about-launch" onClick={this.toggleModal.bind(this)}>?</button>
        </div>
        <CSSTranstionGroup transitionName="modal" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {this.state.modalOpen ? <AboutModal onBgClick={this.closeModal.bind(this)}/> : null}
        </CSSTranstionGroup>
      </div>
    );
  }
}
