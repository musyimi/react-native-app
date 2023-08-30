import { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { GADGETS, CATEGORIES } from "../data/dummy-data";
import GadgetItem from "../components/GadgetItem";

function GadgetOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedGadgets = GADGETS.filter((gadgetItem) => {
     return gadgetItem.categoryIds.indexOf(catId) >= 0;
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id ===catId).title;

    navigation.setOptions({
      title: categoryTitle
    });

  }, [catId, navigation]);

 

  function renderGadgetItem(itemData) {
    return (<GadgetItem title={itemData.item.title}
     imageUrl={itemData.item.imageUrl}
     id = {itemData.item.id}
      />
      );
  }

   return(
    <View style={styles.container}>
        <FlatList
          data={displayedGadgets}
          keyExtractor={(item) => item.id}
          renderItem={renderGadgetItem}
         />
    </View>
   );
};

export default GadgetOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});