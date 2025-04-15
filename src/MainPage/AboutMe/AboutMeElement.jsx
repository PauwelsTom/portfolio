import { Component } from "react";
import "./AboutMeElement.css"

// Name
export class AboutMeElement extends Component {
    constructor(props) {
        super();
    }

    get_class = () => {
        switch(this.props.name) {
            case "Magician":
                return "Magie";
            case "Penspinning":
                return "Penspinning";
            case "Sport":
                return "Sport";
            case "Theater":
                return "Theatre";
            case "Batterie":
                return "Batterie";
            case "Guitare":
                return "Guitare";
            case "Rubik's Cube":
                return "Rubik";
            case "Astronomy":
                return "Astronomie";
            case "Karate":
                return "Karate";
            default:
                return "";
        }
    }

    get_name = () => {
        switch(this.props.name) {
            case "Magician":
                return "Magic";
            case "Penspinning":
                return "Penspinning";
            case "Sport":
                return "Triathlon";
            case "Theater":
                return "Theater";
            case "Batterie":
                return "Drums";
            case "Guitare":
                return "Guitar";
            case "Rubik's Cube":
                return "Rubik's Cube";
            case "Astronomy":
                return "Astronomy";
            case "Karate":
                return "Karate";
            default:
                return "";
        }
    }

    render() {
        return (
            <div className={"AboutMeElement " + this.get_class()}>
                <span className="TitreAboutMeElement">{this.get_name()}</span>
            </div>
        );
    }
}