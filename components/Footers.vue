<template>
  <div>
    <footer>
      <div class="foot">
        <div>
          <p> &copy;2021 All rights reserved </p>
        </div>
        <div class="h2 mb-0">
          <h1> Follow us </h1>
          <b-icon icon="twitter" />
          <b-icon icon="facebook" />
          <b-icon icon="instagram" />
        </div>
        <div class="address">
          <h1> Address </h1>
          <p> P.O.Box 19</p>
          <p> Accra-North </p>
          <p> Ghana </p>
          <p>Tel: </p>
          <p>Email: </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footers'

}
</script>

<style>
footer{
  background: rgb(29, 27, 27);
  color: white;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px;
}
.foot{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
}
h1{
  font-size: 1.5rem;
}
.address p{
  margin: 0;
}
</style>
