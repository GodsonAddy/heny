<template>
  <div>
    <h1>Restaurants</h1>
    <div v-for="food in restaurants.data" :key="food.id" class="restaurant">
      <b-card
        title="Card Title"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        lass="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
          {{ food.name }}
        </b-card-text>
        <b-button href="#" variant="primary">
          Go somewhere
        </b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'Restaurants',
  apollo: {
    restaurants: gql` {
      query getRestaurants {
        restaurants{
          data{
            logo
            name
            banner
          }
        }
      }
    }`
  }
}
</script>

<style>
.restaurant{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
h1{
  margin: 20px;
}
</style>
