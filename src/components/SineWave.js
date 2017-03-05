import React from 'react';

export default class SineWave extends React.Component {
  constructor(props) {
    super(props);

    // width of wave
    this.frequency = 0.03;

    // speed of animation
    this.speed = 50;

    this.counter = 0;

    this.setDimensions = this.setDimensions.bind(this);
    this.draw = this.draw.bind(this);

    this.state = {
      width: 0,
      height: 0,
      points: [],
    };
  }

  componentDidMount() {
    this.setDimensions();
    this.draw();

    window.addEventListener('resize', this.setDimensions);
  }

  draw() {
    let c = ++this.counter / this.speed;

    this.setState({
      points: this.move(c),
    })

    requestAnimationFrame(this.draw);
  }

  move(counter) {
    const amplitude = this.state.height / 2;
    const points = [];
    let x = 0;
    let y;

    while (x++ <= this.state.width) {
      // combine a bunch of sine waves together, moving in opposite directions
      const y1 = Math.sin(-x * (this.frequency * 1.3) + counter);
      const y2 = Math.sin(x * (this.frequency / 1.1) + counter);
      const y3 = Math.sin(-x * (this.frequency * 1.5) + counter);
      const y4 = Math.sin(x * (this.frequency / 1.6) + counter);
      y = (y1 + y2 + y3 + y4) / 4;
      points.push([x, (y * amplitude * 0.75) + (amplitude)].join(' '));
    }

    return points;
  }

  setDimensions() {
    this.setState({
      width: window.outerWidth,
      height: this.svg.parentElement.clientHeight,
    });
  }

  render() {
    return (
      <svg
        className="sine"
        width={this.state.width}
        ref={el => this.svg = el}
        height={this.state.height}>
        <polyline fill="none" points={this.state.points} />
      </svg>
    );
  }
}
