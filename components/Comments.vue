<template>
  <div>
    <div class="comment-section">
      <center>
        <b-container fluid="sm">
          <b-row>
            <b-col sm="2">
              <b-avatar />
            </b-col>
            <b-col sm="10">
              <b-form-textarea
                id="textarea-auto-height"
                v-model="text"
                placeholder="Add a comment here..."
                rows="3"
                max-rows="8"
              />
              <b-col class="post">
                <b-button type="submit" variant="outline-primary" block>
                  POST
                </b-button>
              </b-col>
            </b-col>
          </b-row>
        </b-container>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  data () {
    return {
      text: ''
    }
  }

}
</script>

<style>
.comment-section{
  margin-top: 50px;
  margin-bottom: 300px;
}
.post{
  margin-top: 10px;
  margin-bottom: 20px;
}

</style>
