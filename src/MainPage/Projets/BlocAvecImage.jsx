import { Component } from "react";
import { Link } from "react-router-dom"; // Import nécessaire
import "./BlocAvecImage.css";

// Props attendus : gauche, titre, texte, image, link
export class BlocAvecImage extends Component {
    constructor(props) {
        super();
    }

    get_cote = () => {
        return this.props.gauche ? "Reverse" : "";
    }

    renderContent = () => {
        return (
            <div className={"BlocAvecImage " + this.get_cote()}>
                <div className="TextInBloc">
                    <span className="TitreBloc">{this.props.titre}</span>
                    <span className="TexteBloc">{this.props.texte}</span>
                </div>
                <img className="ImageBloc" src={this.props.image} alt={this.props.titre} />
            </div>
        );
    }

    render() {
        if (this.props.link) {
            return (
                <Link to={this.props.link} className="BlocAvecImage-Link">
                    {this.renderContent()}
                </Link>
            );
        } else {
            return this.renderContent();
        }
    }
}
