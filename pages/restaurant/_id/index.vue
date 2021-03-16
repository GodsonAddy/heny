<template>
  <div>
    <div v-if="!$apollo.queries.restaurant.loading" class="mycontainer">
      <h1>Our menu</h1>
      <div class="shop">
        <div v-for="meal in restaurant.meals" :key="meal.id" class="rest">
          <nuxt-link :to="`meal/${meal.id}` + restaurant.slug + meal.slug">
            <b-card
              :img-src="meal.image"
              :img-alt="meal.name"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                <span> {{ meal.name }} </span>
                <br>
                <span id="price"> {{ meal.price }} GH</span>
                <br>
                <span> {{ meal.description }} </span>
              </b-card-text>
            </b-card>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  apollo: {
    restaurant: {
      prefetch: true,
      query: gql`
        query getRestaurant($id: ID) {
          restaurant(id: $id) {
            id
            name
            slug
            meals{
              id
              image
              name
              slug
              price
              description
            }
          }
        }
      `,
      variables () {
        return {
          id: this.$route.params.id
        }
      }
    }
  }
}
</script>

<style>
.shop {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  flex-wrap: wrap;
}

.rest{
  width: 20%;
  margin: 3px;
}

.mycontainer{
  margin: 7% 5%;
  margin-bottom: 300px;
}

h1{
  margin: 5%;
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
