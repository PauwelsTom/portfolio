import { Component } from "react";
import "./SectionLangages.css"
import { LangageElement } from "./LangageElement";

export class SectionLangages extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="SectionLangages" id="Languages">
                <span className="TitreLangage">Langages</span>

                <span className="SousTitreLangage">Web</span>

                <div className="SousTitreLangage">
                    <LangageElement langage="HTML"/>
                    <LangageElement langage="CSS"/>
                    <LangageElement langage="JavaScript"/>
                    <LangageElement langage="ReactJS"/>
                    <LangageElement langage="Python"/>
                    <LangageElement langage="JAVA"/>
                    <LangageElement langage="SQL"/>
                </div>

                <span className="SousTitreLangage">Autres</span>

                <div className="SousTitreLangage">
                    <LangageElement langage="C"/>
                    <LangageElement langage="C++"/>
                    <LangageElement langage="OPENGL"/>
                </div>
            </div>
        );
    }
}