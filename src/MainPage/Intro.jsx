import { Component } from "react";
import "./Intro.css"
import { IconeFlecheOrange } from "../Data/Images";

export class Intro extends Component {
    constructor(props) {
        super();
    }

    ScrollToSection = (section) => {
        window.scrollTo({
            top: document.getElementById(section).offsetTop,
            behavior: 'smooth'
        })
    }

    render() {
        return (
            <div className="Intro">
                <div className="IntroTextDiv">
                    <span className="Name">Hi, I'm Tom.</span>
                    <span className="Title">Web Developer</span>
                    <div className="AboutMeButton" onClick={() => this.ScrollToSection("AboutMe")}>
                        <span className="AboutMeText">About me</span>
                        <img id="Fleche" src={IconeFlecheOrange} alt="→"/>
                    </div>
                </div>

                <img className="PhotoMoi" src="/Moi.jpg" alt="Me"/>
            </div>
        );
    }
}