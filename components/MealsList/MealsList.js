import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import MealItem from './MealItem';

const MealsList = ({displayedMeals}) => {
    function renderMealItem({ item }) {
   
        const mealItemProps = {
          id: item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          duration: item.duration,
          complexity: item.complexity,
          affordability: item.affordability,
    
        };
        return <MealItem {...mealItemProps} />;
      }
    
      return (
        <View style={styles.container}>
          <FlatList
            data={displayedMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
          />
        </View>
      );
}

export default MealsList

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  })