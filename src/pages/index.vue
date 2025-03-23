<script setup lang="ts">
const { data: featuredProducts } = await useAsyncData("products", () => {
  return queryCollection("products").all();
});
</script>

<template>
  <div>
    <section class="featured-products">
      <div class="container">
        <h2 class="section-title">Nos miels</h2>
        <div class="products-grid">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
  color: #795548;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.mt-8 {
  margin-top: 32px;
}
</style>