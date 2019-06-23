import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import debounce from 'lodash/debounce';

class ImageLoader extends React.Component {
  constructor(props) {
    super(props);

    const imgLoaded = this.isImgCached();
    this.onImgLoad = this.onImgLoad.bind(this);

    this.state = {
      imgLoaded,
      imgSrc: imgLoaded ? this.props.imgSrc : '',
    }
  }

  onImgLoad() {
    this.setState({
      imgLoaded: true,
    });
  }

  isImgCached() {
    const image = new Image();
    image.src = this.props.imgSrc;

    return image.complete;
  }

  isInViewport() {
    var rect = this.el.getBoundingClientRect();
    return (rect.bottom - 100) <= (window.innerHeight || document.documentElement.clientHeight);
  }

  checkVisibility() {
    if(this.isInViewport()) {
      this.setState({
        imgSrc: this.props.imgSrc,
      });
    }
  }

  componentDidMount() {
    if (!this.el || !this.props.imgSrc) return;

    const onScroll = debounce(() => {
      this.checkVisibility();
    }, 50);

    window.addEventListener('scroll', onScroll);

    this.onUnMount = () => {
      window.removeEventListener('scroll', onScroll);
    }

    this.checkVisibility();
  }

  componentWillUnmount() {
    if (this.onUnMount) this.onUnMount();
  }

  render() {
    const classes = classnames('img-loader-container', {
      'no-image': !this.props.imgSrc,
      'img-loaded': this.state.imgLoaded,
      [this.props.className]: (this.props.className !== undefined),
    })

    return (
      <div className={classes} ref={el => this.el = el}>
        {this.props.imgSrc ? <img className="img-loader-img" src={this.state.imgSrc} onLoad={this.onImgLoad} /> : null}
        {this.props.children}
      </div>
    );
  }
}

ImageLoader.propTypes = {
  className: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default ImageLoader;
