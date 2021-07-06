import React from "react";
import axios from "axios";

class MasterPortal extends React.Component {
    constructor() {
        super();
        this.state = {
            positions: [],
            currentlyViewing: null,
        };
    }
    async componentDidMount() {
        const positionsResponse = await axios.get("/api/positions");
        this.setState({ positions: positionsResponse.data, currentlyViewing: positionsResponse.data[0].id });
    }
    render() {

        if (this.state.positions.length === 0) {
            return <h1>WAIT ITS LOADING OK?</h1>
        }

        let currentPose = this.state.positions.find(p => p.id === this.state.currentlyViewing);
        if (!currentPose) {
            currentPose = this.state.positions[0];
        }

        return (
            <div id="positions-library">
                <ul>
                    {this.state.positions.map(positionData => {
                        return <li onClick={() => this.setState({ currentlyViewing: positionData.id })} key={positionData.id}>{positionData.name}</li>
                    })}
                </ul>
                <div id="current-pose">
                    <h1>{currentPose.name}</h1>
                    <img src={currentPose.referencePhoto} />
                    <h5>{currentPose.description}</h5>
                </div>
            </div>
        );
    }
}

export default MasterPortal;