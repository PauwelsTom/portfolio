import { Component } from "react";
import "./LangageElement.css"
import { IconeLangage } from "../../Data/Images";

// langage
export class LangageElement extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="LangageElement">
                <img className="IconeLangage" src={IconeLangage[this.props.langage]} alt={this.props.langage}/>
                <span className="NomLangage">{this.props.langage}</span>
            </div>
        );
    }
}