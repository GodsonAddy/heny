<template>
  <b-container class="contact">
    <b-row>
      <b-col class="myContainer">
        <h4>Leave us a message here</h4>
        <br>
        <b-form @submit="onSubmit">
          <b-form-input v-model="form.text" type="text" placeholder="Enter your name" />
          <br>
          <b-form-input v-model="form.email" type="email" placeholder="Email" />
          <br>
          <b-form-textarea
            id="textarea"
            v-model="form.message"
            placeholder="Enter something..."
            rows="3"
            max-rows="5"
          />
          <br>
          <b-col lg="4" class="pb-2">
            <b-button type="submit" variant="danger">
              Submit
            </b-button>
          </b-col>
        </b-form>
      </b-col>

      <b-col class="img-container">
        <img class="image" src="../assets/logo.png" alt="logo">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      form: {
        text: '',
        email: '',
        message: ''
      }
    }
  },

  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(`Thank you ${this.form.text} for contacting us. We will get back to you shortly`)
    }
  }
}
</script>

<style>
/* #logo{
    margin: 100px 30px 60px 30px;
} */

.image{
  width: 100%;
  float: right;
}

.row{
  padding: 0;
  margin: 0;
}
.contact{
  margin-bottom: 200px;
}
.myContainer{
  text-align: left;
}
</style>
