import React, {useCallback} from "react";
import {Alert, Linking, Pressable, Text} from "react-native";

 const OpenURLText = ({ url}) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {

            await Linking.openURL(url);
        } else {
            Alert.alert(`Url non reconnu : ${url}`);
        }
    }, [url]);
    return <Pressable onPress={handlePress}>
        <Text  style={{flexWrap:'wrap',color:"#1e90ff",textDecorationLine:"underline" }}>{url}</Text>
    </Pressable>
};
 export default React.memo(OpenURLText)
