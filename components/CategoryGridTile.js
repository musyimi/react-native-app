import { Pressable, View, Text , StyleSheet } from "react-native";

function CategoryGridTile({title, color, onPress}) {
    return <View style={styles.gridItem}>
        <Pressable
          android_ripple={{color: '#ccc'}} 
          style={styles.button}
          onPress={onPress}
          >
            <View style={[styles.innerView, {backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;

const styles = StyleSheet.create({
   gridItem: {
    flex: 1,
    margin: 8,
    height: 150,
    borderRadius: 0.5,
    elevation: 1,
    overflow: 'hidden'
   },
   button: {
      flex: 1
   },
   innerView: {
     flex: 1,
     padding: 16,
     borderRadius: 0.5,

     justifyContent: 'center',
     alignItems: 'center'
   }, 
   title: {
    fontWeight: 'bold',
    fontSize: 18
   }
});