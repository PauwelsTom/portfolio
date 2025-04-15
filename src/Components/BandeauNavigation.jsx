import { Component } from "react";
import "./BandeauNavigation.css"

export class BandeauNavigation extends Component {
    constructor(props) {
        super();
        this.state = {
            class: "BandeauDiv atTheTop",
        }

        this.get_class = this.get_class.bind(this);
    }

    ScrollToSection = (section) => {
        window.scrollTo({
            top: document.getElementById(section).offsetTop,
            behavior: 'smooth'
        })
    }


    //* Gere le bandeau en fonction de si on est en haut de la page ou pas
    get_class() {
        if (window.scrollY === 0) {
            this.setState({ class: "BandeauDiv atTheTop" });
        } else {
            this.setState({ class: "BandeauDiv" });
        }
    }

    get_element_class = () => {
        if (window.scrollY === 0) {
            return "NavigationElements";
        } else {
            return "NavigationElements ElementMidPage";
        }
    }

    componentDidMount() {
        // Ajouter un gestionnaire d'événement pour la position de scroll
        window.addEventListener("scroll", this.get_class);
    }

    componentWillUnmount() {
        // Ne pas oublier de retirer l'événement quand le composant est démonté
        window.removeEventListener("scroll", this.get_class);
    }


    render() {
        return (
            <div className={this.state.class}>
                <div className={this.get_element_class()} onClick={() => this.ScrollToSection("Projets")}>Projects</div>
                <div className={this.get_element_class()} onClick={() => this.ScrollToSection("Languages")}>Languages</div>
                <div className={this.get_element_class()} onClick={() => this.ScrollToSection("AboutMe")}>About</div>
                <div className={this.get_element_class()} onClick={() => this.ScrollToSection("Parcours")}>Parcours</div>
            </div>
        );
    }
}