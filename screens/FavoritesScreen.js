import { StyleSheet, Text, View, ViewBase } from 'react-native'
import React from 'react'
import MealsList from '../components/MealsList/MealsList'
import { MEALS } from '../data/dummy-data'
import { useSelector } from 'react-redux'

const FavoritesScreen = () => {
  const favoriteMealsRedux = useSelector((state) => state.favoriteMeals.ids) 

  const favoriteMeals = MEALS.filter(meal => favoriteMealsRedux.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    )
  }
  return <MealsList displayedMeals={favoriteMeals} />
}

export default FavoritesScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})