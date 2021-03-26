import React, {Component} from 'react'
import {ImageBackground, ScrollView, Text, View,} from "react-native";
import {FormationList} from "../module/FormationList"
import {ExperienceList} from "../module/ExperienceList";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import educat from "../image/Education.png"
import expert from "../image/expert.jpg"

/**
 * Affichage des formations et des experiences 2eme slide
 */
class Parcours extends Component {

    formationList = FormationList
    experienceList = ExperienceList

    constructor(props) {
        super(props);
    }



    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView >
                <View style={{backgroundColor:this.props.extraData.background1}}>
                    <View style={{flex:1, justifyContent: 'center',height:160}}>
                        <ImageBackground source={educat} style={{flex: 1, resizeMode: "cover",justifyContent: "center"}}>
                            <Text style={{fontWeight: "bold", textAlign: "center",fontSize: 24}}>FORMATION</Text>
                        </ImageBackground>


                    </View>

                    {
                        this.formationList.map((formation, index) => {
                            const title = (formation.titre)
                            const formation1 = Array(formation.formation)


                            return (<View key={index} style={{marginBottom:10}}>
                                    <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 30,
                                        backgroundColor:'#20B2AA'}}>
                                        <Text>{title.toString()}</Text>
                                    </View>

                                    <View style={{flexDirection: 'column', justifyContent: 'center',
                                        backgroundColor:'#B0C4DE',paddingVertical:10,paddingHorizontal:5}}>
                                        {formation1.map((elem, index) => (
                                            <View key={index}>
                                                <Text numberOfLines={3} >{elem.toString()}</Text>
                                                <Pressable onPress={() => navigation.push('Mise en Details',
                                                    {titre:title,elem:elem,photo:educat})}>
                                                    <Text style={{textAlign:"center", color:"#1e90ff",
                                                        textDecorationLine:"underline"}}>Voir plus de details...</Text>
                                                </Pressable>
                                            </View>

                                        )

                                        )}

                                    </View>

                                </View>
                            )
                        })}
                </View>
                <View>
                    <View style={{flex:1, justifyContent: 'center',height:160}}>
                        <ImageBackground source={expert} style={{flex: 1, resizeMode: "cover",justifyContent: "center"}}>
                            <Text style={{fontWeight: "bold", textAlign: "center",fontSize: 24}}>EXPERIENCE</Text>
                        </ImageBackground>

                    </View>

                    {
                        this.experienceList.map((experience, index) => {
                            const title = (experience.titre)
                            const caracteristique = Array(experience.caracteristique)


                            return (<View key={index} style={{marginBottom:10}}>
                                    <View  style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 30,
                                        backgroundColor:'#20B2AA'}}>
                                        <Text>{title.toString()}</Text>
                                    </View>
                                    <View style={{flexDirection: 'column', justifyContent:
                                            'center',backgroundColor:'#B0C4DE',paddingVertical:10,paddingHorizontal:5}}>
                                        {caracteristique.map((elem, index) => (
                                            <View key={index}>
                                                <Text numberOfLines={3} >{elem.toString()}</Text>
                                                <Pressable onPress={() => navigation.push('Mise en Details',
                                                    {titre:title,elem:elem,photo:expert})}>
                                                    <Text style={{textAlign:"center", color:"#1e90ff",
                                                        textDecorationLine:"underline"}}>Voir plus de details...</Text>
                                                </Pressable>
                                            </View>
                                            )

                                        )}

                                    </View>

                                </View>
                            )
                        })}

                </View>
            </ScrollView>
        )
    }
}

export default Parcours
