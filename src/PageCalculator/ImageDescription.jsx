import { Component } from "react";
import "./ImageDescription.css"


// image, description
export class ImageDescription extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="ImageDescription">
                <img className="ImageDescriptionImg" src={this.props.image} alt={this.props.image} />

                <p className="DescriptionImageText">
                    {this.props.description}
                </p>
            </div>
        );
    }
}