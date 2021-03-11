<template>
  <div>
    <h1>  {{ $route.params.slug }} </h1>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  apollo: {
    restaurant: {
      prefetch: true,
      query: gql`
        query getRestaurant {
          restaurant {
            id
            name
            slug
          }
        }
      `,
      variables () {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  }
}
</script>

<style>

</style>
