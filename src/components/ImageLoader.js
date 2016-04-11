import React from 'react';
import classnames from 'classnames';

class ImageLoader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgLoaded: this.isImgCached(),
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

  render() {
    const classes = classnames({
      'img-loader-container': true,
      'no-image': this.props.imgSrc.length === 0,
      [this.props.className]: (this.props.className !== undefined),
      'img-loaded': this.state.imgLoaded,
    })

    return (
      <div className={classes}>
        {this.props.imgSrc.length ? <img className="img-loader-img" src={this.props.imgSrc} onLoad={this.onImgLoad.bind(this)} /> : null}
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
