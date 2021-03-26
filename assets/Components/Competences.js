import React, {Component} from "react";
import {ScrollView} from "react-native";
import {CompetencesList} from "../module/CompetencesList"
import AffichageSousText from "./AffichageSousText";

/**
 * Affichage des competences 3em slide
 */
class Competences extends Component {

    constructor(props) {
        super(props);
        this.state = {
            affichage: "",

        }
    }

    render() {
        /**
         * Affichage des competences mise en boucle, 1ere boucle
         */
        return (

            <ScrollView style={{backgroundColor: this.props.extraData.background1}}>

                {CompetencesList.map((competence, index) => {
                    const h1 = competence.H1;
                    const caracteristique = competence.caracteristique

                    return (
                       <AffichageSousText key={index} h1={h1} caracteristique={caracteristique} index={index} background1={this.props.extraData.background1}/>
                    )
                })
                }
            </ScrollView>
        )
    }
}



export default Competences
