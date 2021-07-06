import React from 'react';

import MasterPortal from './MasterPortal';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedThrough: false,
    };
    this.agreeToTerms = this.agreeToTerms.bind(this);
  }
  agreeToTerms() {
    this.setState({ clickedThrough: true });
  }
  render() {

    if (this.state.clickedThrough) {
      return <MasterPortal />;
    }

    return (
      <div id="entrance" className="row container">
        <div>
          <h1>Hiii~</h1>
          <h2>This is my yolga studio website</h2>
          <h3>NO JOKIN' OR FUSSIN' OK?</h3>
          <button onClick={this.agreeToTerms}>I agree to not joke and fuss around</button>
        </div>
        <div>
          <img src="/penny_outdoors.jpg" />
        </div>
      </div>
    );
  }
}
