<template>
  <div ref="paypal" style="margin-top:25px"></div>

</template>

<script>
export default {
name:"Paypal",
 data: function() {
    return {
      loaded: false,
      paidFor: false,
      product: {
        price: 777.77,
        description: "leg lamp from that one movie",
        img: "./assets/lamp.jpg"
      }
    };
  },
  mounted: function() {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=ARNRNvgJTH0oaRUrQUC-p-MgCXzIOl5T6um6YqdW7U9mkwzV-ZkfCtp9c0QH6dRWArJY85Yh3rLCT5Vu";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: "FInal Total",
                  amount: {
                    currency_code: "USD",
                    value: 100
                  },
                },
              ],
            });
          },
         
        })
        .render(this.$refs.paypal);
    },
  },

}
</script>

<style>

</style>