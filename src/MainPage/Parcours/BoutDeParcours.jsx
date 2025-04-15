import { Component } from "react";
import "./BoutDeParcours.css"

export class BoutDeParcours extends Component {
    constructor(props) {
        super();
    }

    render() {
        const end = this.props.end;
        return (
            <div className="BoutDeParcours">
                <div className={"TraitParcours " + (end? "EndOfParcours" : "")} />
                {end? "" : <div className="PointParcours"/>}
                <div className={"TraitParcours " + (end? "EndOfParcours" : "")} />
            </div>
        );
    }
}