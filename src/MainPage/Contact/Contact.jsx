import { Component } from "react";
import "./Contact.css"
import { IconeGithub, IconeLinkedin, IconeMail, IconePhone } from "../../Data/Images";

export class Contact extends Component {
    render() {
        return (
            <div className="ContactDiv">
                <u className="ContactTitre">Contact</u>

                <div className="ContactListDiv">
                    <a className="ContactElement" href="mailto:tom.j.pauwels@gmail.com">
                        <span className="ContactElementText">tom.j.pauwels@gmail.com</span>
                        <img className="IconeContact" src={IconeMail} alt="mail"/>
                    </a>

                    <a className="ContactElement" href="tel:+33649959956">
                        <span className="ContactElementText">+33 6 49 95 99 56</span>
                        <img className="IconeContact" src={IconePhone} alt="phone"/>
                    </a>

                    <a className="ContactElement" href="https://www.linkedin.com/in/pauwels-tom/" target="_blank" rel="noopener noreferrer">
                        <span className="ContactElementText">LinkedIn</span>
                        <img className="IconeContact" src={IconeLinkedin} alt="linkedin"/>
                    </a>

                    <a className="ContactElement" href="https://github.com/PauwelsTom" target="_blank" rel="noopener noreferrer">
                        <span className="ContactElementText">GitHub</span>
                        <img className="IconeContact" src={IconeGithub} alt="github"/>
                    </a>
                </div>
                
            </div>
        );
    }
}