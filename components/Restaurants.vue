<template>
  <div>
    <h1>Restaurants</h1>
    <div class="restaurant">
      <div v-for="restaurant in restaurants.data" :key="restaurant.id" class="rest">
        <nuxt-link :to="`restaurant/${restaurant.id}` + restaurant.slug">
          <b-card
            :title="restaurant.name"
            img-alt="Image"
            :img-src="restaurant.logo"
            img-top
            tag="article"
            style="max-width: 20rem;"
            lass="mb-2"
            img-fluid
          >
            <b-card-text>
              {{ restaurant.address }}
            </b-card-text>
          </b-card>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  apollo: {
    restaurants: gql`
      query getRestaurants {
        restaurants {
          data {
            name
            banner
            logo
            id
            description
            rating
            address
            slug
          }
        }
      }
    `
  }
}
</script>

<style>
.restaurant{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  flex-wrap: wrap;
  margin: 30px;
}
h1{
  margin: 20px;
}
.rest{
  width: 20%;
}
.rest a {
  color: black;
}
@media (max-width: 576px) {
  h1{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  .rest{
    width: 50%;
  }
}
@media (max-width: 768px) {
  h1{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  .rest{
    width: 40%;
  }
}
@media (min-width: 769px) and (max-width:1024px) {
  h1{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  .rest{
    width: 30%;
  }
}
</style>
