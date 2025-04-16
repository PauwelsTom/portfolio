import { Component } from "react";
import "./Intro.css"


// titre, description
export class Intro extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="IntroAnnexe">
                <u className="TitleAnnexe">{this.props.titre}</u>
                <p className="DescriptionAnnexe">{this.props.description}</p>
            </div>
        );
    }
}