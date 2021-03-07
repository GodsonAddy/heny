<template>
  <div>
    <main>
      <u>
        <h1> HUSH </h1>
      </u>
      <h3>We bring your favourite restaurants</h3>
      <h3> under one roof </h3>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Main'

}
</script>

<style>
main{
  background-image: url(
    "https://img1.mashed.com/img/gallery/14-mistakes-everyone-makes-when-cooking-burgers-upgrade/intro-1592511379.jpg"
  );
  height: 100vh;
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1{
  font-size: 3em;
  font-weight: bolder;
  padding: 0px 0px 0px 500px ;
}
h3{
  font-family: cursive;
  margin: 10px 0px 0px 500px;
}
@media (max-width: 576px) {
  h1{
    font-size: 2em;
  }
   h3{
    font-size: 1em;
  }
   main{
    height: 50vh;
  }
}
</style>
