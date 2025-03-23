<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <NuxtLink to="/" class="logo">
          <span>Miels de Grenoble</span>
        </NuxtLink>

        <div class="header-actions">
          <NuxtLink to="/panier" class="cart-btn">
            <Icon name="uil:github" />
            <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      cartCount: 3, // À remplacer par la vraie valeur du panier
    };
  },
};
</script>

<style scoped>
.header {
  background-color: #ffc107;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #5d4037;
  text-decoration: none;
}

.logo img {
  height: 40px;
}

.main-nav ul {
  display: flex;
  list-style: none;
  gap: 30px;
}

.main-nav a {
  color: #5d4037;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  padding: 8px 0;
  position: relative;
}

.main-nav a:hover {
  color: #8d6e63;
}

.main-nav a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #8d6e63;
  transition: width 0.3s;
}

.main-nav a:hover::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.search-btn,
.cart-btn,
.account-btn {
  background: none;
  border: none;
  color: #5d4037;
  font-size: 1.25rem;
  cursor: pointer;
  position: relative;
  transition: color 0.3s;
}

.search-btn:hover,
.cart-btn:hover,
.account-btn:hover {
  color: #8d6e63;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #5d4037;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .main-nav {
    display: none; /* À remplacer par un menu mobile */
  }
}
</style>
