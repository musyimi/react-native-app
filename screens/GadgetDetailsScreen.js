import { useLayoutEffect } from "react";
import { Image, Text, View, StyleSheet, Button } from "react-native";
import { GADGETS } from "../data/dummy-data";
import IconButton from "../components/IconButton";

function GadgetDetailsScreen({ route, navigation }) {
    const gadgetId = route.params.gadgetId;

    const selectedGadget = GADGETS.find((gadget) => gadget.id === gadgetId);

    function headerButtonPressHandler() {
        console.log('Pressed');
    }
    
    useLayoutEffect(() => {
       navigation.setOptions({
         headerRight: () => {
            return <IconButton icon="star" color="white" onPress={headerButtonPressHandler}/>
         }
       });
    }, [navigation, headerButtonPressHandler]);
    return(
        <View>
            <Image source={{ uri: selectedGadget.imageUrl}} style={styles.image} />
            <Text>{selectedGadget.title}</Text>
            <Text>{selectedGadget.price}</Text>
            <Text>{selectedGadget.shortDescription}</Text>
        </View>
    );
}

export default GadgetDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    }
});