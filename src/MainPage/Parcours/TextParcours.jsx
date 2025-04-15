import { Component } from "react";
import "./TextParcours.css"

// titre, texte
export class TextParcours extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="TextParcoursDiv">
                <div className="TitreParcoursEtape">{this.props.titre}</div>
                <div className="DateParcoursEtape">{this.props.date}</div>
                <span className="TexteParcoursEtape">{this.props.texte}</span>
            </div>
        );
    }
}