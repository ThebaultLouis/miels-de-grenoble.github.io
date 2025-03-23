<template>
  <div class="product-card">
    <div class="product-image">
      <NuxtLink :to="`/produits/${product.id}`">
        <img :src="product.image" :alt="product.name" />
      </NuxtLink>
    </div>
    <div class="product-info">
      <h3 class="product-name">
        <NuxtLink :to="`/produits/${product.id}`">{{ product.name }}</NuxtLink>
      </h3>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-footer">
        <span class="product-price">{{ formatPrice(product.price) }}</span>
        <button class="add-to-cart" @click="addToCart">
          <IconCart /> Ajouter
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatPrice(price) {
      return price.toFixed(2).replace(".", ",") + " €";
    },
    addToCart() {
      // À implémenter: ajouter le produit au panier
      this.$emit("add-to-cart", this.product);
    },
  },
};
</script>

<style scoped>
.product-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.product-image {
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-info {
  padding: 20px;
}

.product-name {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.product-name a {
  color: #5d4037;
  text-decoration: none;
  transition: color 0.3s;
}

.product-name a:hover {
  color: #ffc107;
}

.product-description {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 20px;
  line-height: 1.5;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-weight: bold;
  font-size: 1.1rem;
  color: #5d4037;
}

.add-to-cart {
  background-color: #ffc107;
  color: #5d4037;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s;
}

.add-to-cart:hover {
  background-color: #ffb300;
}
</style>