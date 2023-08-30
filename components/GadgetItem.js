import { Pressable, Text, View ,Image, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

function GadgetItem({id, title, imageUrl}) {

     const navigation = useNavigation();

     function selectGadgetItemHandler() {
        navigation.navigate('GadgetDetails', {
            gadgetId: id,
         });
     }

    return(
        <View>
            <Pressable
            onPress={selectGadgetItemHandler}
            >
                <View>
                  <Image source={{ uri: imageUrl}} style={styles.image}  />  
                  <Text>{title}</Text>
                </View>
            </Pressable>
            
        </View>
    );
};

export default GadgetItem;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    }
});