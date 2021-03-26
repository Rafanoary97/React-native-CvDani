import React, {Component} from 'react'
import {Button, ImageBackground, ScrollView, Text, View} from "react-native";

/**
 * Affichage de composant enfant a chaque parcours
 */
class FormantionView extends Component{
    constructor(props) {
        super(props);
        this.state={
            titre:this.props.route.params.titre,
            elements:this.props.route.params.elem
        }
    }
    render(){
        return(
            <ScrollView style={{backgroundColor:this.props.extraData.background1}}>

                <View style={{flex:1, justifyContent: 'center',height:160}}>
                    <ImageBackground source={this.props.route.params.photo} style={{flex: 1, resizeMode: "cover",justifyContent: "center"}}>
                        <Text style={{fontWeight: "bold", textAlign: "center",fontSize: 24}}>FORMATION</Text>
                    </ImageBackground>


                </View>
                <View>
                    <View style={{flex:1,alignItems: 'center', justifyContent: 'center', paddingVertical: 30,
                        backgroundColor:'#20B2AA'}}>
                        <Text>{this.state.titre}</Text>
                    </View>

                    <View style={{flexDirection: 'column', justifyContent: 'center',
                        backgroundColor:'#B0C4DE',paddingVertical:10,paddingLeft:15}}>
                        <Text>{this.state.elements}</Text>
                    </View>

                    <View style={{flexDirection:"row",  justifyContent:"center",marginVertical:10}}>
                        <Button title={"Retour"}
                                style={{backgroundColor:this.props.extraData.color}}
                                onPress={()=>this.props.navigation.goBack()}/>
                    </View>

                </View>

            </ScrollView>
        )
    }
}
export default FormantionView
