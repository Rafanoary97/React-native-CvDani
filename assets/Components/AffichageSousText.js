import React,{Component} from 'react'
import {Image, Text, TouchableOpacity, View} from "react-native";
import minus from "../image/icons8_minus_24px.png";
import cercle from "../image/icons8_circle_64px.png";

/**
 * affichages des sous competences, 2eme boucle
 * @param props
 * @returns {null|*}
 * @constructor
 */

const AffichageSText=(props)=>{
    {
        if (props.h1pressed) {

            return (<View style={{backgroundColor: props.background1}}>

                {props.elems1.map((caracteristique1, index) => {

                    return (
                        <View key={index}>
                            <View style={{flexDirection: "row", paddingHorizontal: 5, paddingVertical: 5}}>
                                <Image source={minus}
                                       style={{width: 20, height: 20, marginHorizontal: 10}}/>
                                <Text>{caracteristique1.titre}</Text>
                            </View>
                            <View style={{paddingHorizontal: 10}}>
                                <Text>{caracteristique1.sous_titre}</Text>

                            </View>
                        </View>

                    )

                })}

            </View>)
        }else return null
    }
}

class AffichageSousText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            caracteristique:this.props.caracteristique,
            h1pressed:false,
        }
    }

render(): React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    const h1Press = async ()  => {

        /**
         * affichage de titre en 1ere boucle
         */
        return (
            await this.setState({
                h1pressed: (!this.state.h1pressed)
            })

        )
    }

    return (

        <View key={this.props.index}>


            <TouchableOpacity
                key={this.props.index}
                accessible={true}
                onPress={h1Press}>

                {this.state.h1pressed ? (<View style={{flexDirection: "row",paddingVertical:10, backgroundColor:"#20B2AA"}}>
                    <Image source={cercle} style={{width: 20, height: 20}}/>
                    <Text style={{fontSize: 18, paddingHorizontal: 10}}>{this.props.h1.toString()}</Text>

                </View>) : (<View style={{flex: 1,
                    flexDirection: "row",paddingVertical:10,backgroundColor:"#fff8dc"}}>
                    <Image source={cercle} style={{width: 20, height: 20}}/>
                    <Text style={{fontSize: 18, paddingHorizontal: 10}}>{this.props.h1.toString()}</Text>

                </View>)
                }

                {
                    this.state.h1pressed && (<AffichageSText elems1={this.state.caracteristique}
                                                                background1={this.props.background1} h1pressed={this.state.h1pressed}
                    />)
                }
            </TouchableOpacity>

        </View>

    )
}


}
export default AffichageSousText
