<template>
      <div class="container">
        <div class="row">
          <Sidebar />
          <div class="col-sm-9 padding-right">
            <div class="features_items">
              <!--features_items-->
              <h2 class="title text-center">Features Items</h2>
              <div class="col-sm-4" v-for="(i, index) in arr" :key="index">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo">
                      <img
                        :src="i.images[0].image"
                        class="girl img-responsive"
                        alt=""
                      />
                      <h2>Rs. {{ i.attributes.price }}</h2>
                      <div>Model name: {{ i.name }}</div>
                      <div>Quantity:{{ i.attributes.quantity }}</div>
                      <div>Features: {{ i.attributes.features }}</div>
                      <div class="text-left ">
                        <ul >
                        <li>
                          <button class="btn btn-default add-to-cart" @click="addToCart(id,name,image,price)"
                            ><i class="fa fa-shopping-cart"></i> Add to cart</button
                          ></li>
                            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
  
</template>

<script>

import Sidebar from "./includes/Sidebar.vue";
import { categorybyid } from "@/common/Service";
export default {
  name: "Category",
  components: {
    Sidebar,
  },
  data() {
    return {
      arr: [],
       paramm: undefined,
    };
  },
   watch: {
    $route(to) {
      this.paramm = to.params.id;
      categorybyid( this.paramm).then((res) => {
        this.arr = res.data.categorybyid;
        console.log(res.data);
      });
    },
  },
  created() {
    this.paramm = this.$route.params.id;
  },
  mounted() {
      categorybyid(this.paramm)
        .then((res) => {
          this.arr = res.data.categorybyid;
          console.log(this.arr);
        })
        .catch((error) => {
          console.log("Something Wrong " + error);
        });
  }
};
</script>

<style>
</style>