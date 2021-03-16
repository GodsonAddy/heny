<template>
  <div>
    <div v-if="!$apollo.queries.meal.loading">
      <b-container id="meal" class="bv-example-row" fluid="sm">
        <b-row cols="2">
          <b-col>
            <b-img :src="meal.image" rounded fluid :alt="meal.name" class="avatar" />
            <div class="avatar">
              <label for="rating-inline">Rating:</label>
              <b-form-rating id="rating-inline" inline :value="meal.rating" disabled />
            </div>
            <div class="avatar">
              <span> {{ meal.delivery }} </span>
              <span> {{ meal.pickup }} </span>
            </div>
            <b-col>
              <b-button type="submit" variant="danger">
                Order now
              </b-button>
            </b-col>
          </b-col>
          <b-col>
            <div>
              <h1> Description </h1>
              <h6> {{ meal.description }} </h6>
            </div>
            <div>
              <h1> Meal Price </h1>
              <h6> {{ meal.price }} GH₵ </h6>
            </div>
            <div>
              <h1> Delivery Price </h1>
              <h6> {{ meal.delivery_price }} GH₵</h6>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <hr>
    <Comments />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Comments from '../../../../components/Comments'
export default {
  components: {
    Comments
  },
  apollo: {
    meal: {
      prefetch: true,
      query: gql`
        query getRestaurant($id: ID) {
          meal(id: $id) {
            id
            image
            name
            slug
            price
            description
            delivery
            delivery_price
            rating
            pickup
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
#meal{
    margin: 100px 30px 80px 30px;
}
h1{
  font-size: 1.5rem;
}
h6{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.avatar{
  margin-bottom: 20px;
}
.about{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
