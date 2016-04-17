import React from 'react';
import classnames from 'classnames';
import debounce from 'lodash.debounce';

class ImageLoader extends React.Component {
  onScroll = debounce(() => {
    this.checkVisibility()
  }, 100);

  constructor(props) {
    super(props);

    this.state = {
      imgLoaded: this.isImgCached(),
      imgSrc: '',
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

    return false;
    // return image.complete;
  }

  isInViewport() {
    var rect = this.el.getBoundingClientRect();
    return (rect.bottom - 60) <= (window.innerHeight || document.documentElement.clientHeight);
  }

  checkVisibility() {
    if(this.isInViewport()) {
      this.setState({
        imgSrc: this.props.imgSrc,
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  }

  componentWillUnMount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    const classes = classnames('img-loader-container', {
      'no-image': this.props.imgSrc.length === 0,
      'img-loaded': this.state.imgLoaded,
      [this.props.className]: (this.props.className !== undefined),
    })

    return (
      <div className={classes} ref={(el) => this.el = el}>
        {this.props.imgSrc.length ? <img className="img-loader-img" src={this.state.imgSrc} onLoad={this.onImgLoad.bind(this)} /> : null}
        {this.props.children}
      </div>
    );
  }
}

ImageLoader.propTypes = {
  className: React.PropTypes.string,
  imgSrc: React.PropTypes.string.isRequired,
}

export default ImageLoader;
