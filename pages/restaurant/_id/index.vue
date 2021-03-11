<template>
  <div>
    <div v-if="!$apollo.queries.restaurant.loading">
      <div class="shop">
        <h1>  {{ restaurant.id }} </h1>
        <h1>  {{ restaurant.slug }} </h1>
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
  margin-top: 80px;
}

</style>
