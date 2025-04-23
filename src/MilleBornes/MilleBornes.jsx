import { Component } from "react";
import "./MilleBornes.css"
import { Intro } from "../Components/Intro";
import { PresentationMilleBornes } from "./PresentationMilleBornes";

export class MilleBornes extends Component {

    render() {
        return (
            <div className="MilleBornesPage">
                <Intro titre="1000Bornes Score calculator" description="As a recurrent player of the Mille Bornes board game, I decided to create an application to keep track of the scores, which is originally quite tedious to do manually." />
                <PresentationMilleBornes />
            </div>
        );
    }
}