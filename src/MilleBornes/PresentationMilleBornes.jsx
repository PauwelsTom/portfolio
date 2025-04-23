import { Component } from "react";
import "./PresentationMilleBornes.css"
import { ImageDescription } from "../Components/ImageDescription";
import { BoutonMainPage } from "../Components/BoutonMainPage";

export class PresentationMilleBornes extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="PresentationMilleBornes">
                <BoutonMainPage />
                <span className="TitrePresentationCalc">Presentation</span>
                <div className="LigneImages">
                    <ImageDescription image="/1000Bornes_Tableau_score.jpeg" description="Here we can see the leaderboard before the game start. We can add and remove players."/>
                    <ImageDescription image="/1000Bornes_Tableau_score.png" description="After the game has started, you can follow the live ranking of the players as the rounds progress."/>
                    <ImageDescription image="/1000Bornes_Calcul.png" description="When a round is over, you access this menu, which allows you to enter the number of points each player scored during that round. You can also add a teammate if you're playing in teams."/>
                </div>
            </div>
        );
    }
}