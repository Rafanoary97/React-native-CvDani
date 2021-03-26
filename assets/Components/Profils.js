import React from 'react'
import {Image, Text, View, ScrollView, SafeAreaView,Dimensions} from "react-native";
import imageDani from "../image/imageDani.jpg";
import reactnat from "../image/react_native.png";
import phone from "../image/icons8_phone_64px.png";
import marker from "../image/icons8_marker_64px.png";
import mail from "../image/icons8_gmail_64px_2.png";
import webImg from "../image/icons8_geography_64px_1.png";
import OpenURLText from "../module/PressedTexte"

/**
 * Affichage du profil, premier fond, 1er slide
 * @param props
 * @returns {*}
 * @constructor
 */
const Profils=(props)=> {
    return(
        <SafeAreaView>
            <ScrollView style={[{}]}>
                <View style={[{flex: 1,backgroundColor:props.extraData.background1}]}>
                    <View style={{height: 300}}>
                        <View style={{flex: 1,justifyContent:'center',width:windowWidth}}>
                            <Image source={reactnat} style={styles.imageReact}/>
                        </View>
                        <View style={{flex: 1,flexDirection:"row", justifyContent:'center',width:windowWidth,top:-50,elevation:30}}>
                            <Image source={imageDani} style={styles.imageFace}/>
                        </View>

                    </View>
                    <View style={{flexDirection:'column',alignItems:'center', justifyContent:'center',marginVertical:30}} >
                        <Text style={{fontSize:24}}>RAFANOARY  Daniela</Text>
                        <Text style={{fontSize:16}}>Age : 23</Text>
                    </View>
                    <View style={{flexDirection:'column',alignItems:'center', justifyContent:'center',marginVertical:10}}>
                        <View style={styles.viewStyle} >
                            <Image source={phone} style={styles.imageStyle} />
                            <View style={{ flexDirection: 'column', justifyContent: 'center'}}>
                                <OpenURLText  url={"tel:+261 34 84 268 67"}/>
                                <OpenURLText  url={"tel:+261 32 49 982 90"}/>
                            </View>
                        </View>
                        <View style={styles.viewStyle} >
                            <Image source={marker} style={styles.imageStyle} />
                            <Text>481B Andavamamba</Text>
                        </View>
                        <View style={styles.viewStyle} >
                            <Image source={mail} style={styles.imageStyle} />
                            <OpenURLText  url={"mailto:nirinadaniela97@gmail.com"}/>
                            <Text> </Text>
                        </View>
                        <View style={[styles.viewStyle,{flex: 1}]} >
                            <Image source={webImg} style={styles.imageStyle}/>
                            <OpenURLText  url={"https://web.facebook.com/zensylardaniela.rafanoary"}/>

                        </View>
                    </View>

                    <View style={{flexDirection:'column',alignItems:'center', justifyContent:'center',paddingVertical:30 }}>
                        <Text style={{textAlign:'center',fontSize:24}}>INFO +</Text>
                        <Text style={{textAlign:'center',paddingHorizontal: 40,fontSize:16}}>{aPropos}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>




    )




}

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const styles=
        {
            viewStyle:{
                padding:5,
                flexDirection:'row',
                justifyContent: 'space-around',
                alignContent: 'center',
                alignItems: 'center'
            },
            imageStyle:{
                marginRight:10,
                width: 40,
                height:40,
            },
            imageReact:{
                width: windowWidth,
                height: windowHeight/2,
            },
            imageFace:{
                borderWidth: 10,
                borderRadius:100 ,
                width: 200,
                zIndex: 10,
                height: 200
            }

        }

    const aPropos="Un homme sérieux, rigoureux, dynamique. C’est un plaisir " +
        "pour moi de rejoindre  et surtout contribuer au développement de " +
        "votre entreprise." + "\n"+" Ayant une formation en télécommunication, j’ai une large compétence " +
        "dans le domaine information qui est au delà de votre attente. En plus j’ai la capacité de m’adapter " +
        "au chose le plus rapidement."

export default React.memo(Profils)
