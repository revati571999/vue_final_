<template>
  <div>
      <button class="btn btn-primary"> Cart {{numInCart}}</button>
  </div>
</template>

<script>
export default {
  name:"ShoppingCart",
  computed :{
      inCart() { return this.$store.getters.inCart},
      numInCart() { return this.inCart.length}
  }
}
</script>

<style>

</style>