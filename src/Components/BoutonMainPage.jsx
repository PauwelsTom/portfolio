import { Component } from "react";
import "./BoutonMainPage.css"
import { IconeChevronGauche } from "../Data/Images";
import { Link } from "react-router-dom";

export class BoutonMainPage extends Component {
    constructor(props) {
        super();
        this.link = "/";
    }
    renderContent = () => {
        return (
            <div className="BoutonRetourMainPage">
                <img className="ImageRetourMainPage" src={IconeChevronGauche} alt="<"/>
            </div>
        );
    }

    render() {
        if (this.link) {
            return (
                <Link to={this.link} className="RetourMainPage-Link">
                    {this.renderContent()}
                </Link>
            );
        } else {
            return this.renderContent();
        }
    }
}