<!-- pages/index.vue -->
<template>
  <div>
    <HeaderSection />

    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Miel de Grenoble</h1>
          <p class="hero-subtitle">
            Directement de nos ruches aux Alpes jusqu'à votre table
          </p>
          <NuxtLink to="/produits" class="btn-primary"
            >Découvrir nos miels</NuxtLink
          >
        </div>
      </div>
    </section>

    <section class="featured-products">
      <div class="container">
        <h2 class="section-title">Nos miels d'exception</h2>
        <div class="products-grid">
          <product-card
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
        <div class="text-center mt-8">
          <NuxtLink to="/produits" class="btn-secondary"
            >Voir tous nos produits</NuxtLink
          >
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-image">
            <!-- <img
              src="~/assets/images/apiculteur.jpg"
              alt="Notre apiculture à Grenoble"
            /> -->
          </div>
          <div class="about-content">
            <h2 class="section-title">Notre histoire</h2>
            <p>
              Installés dans la région grenobloise depuis trois générations,
              nous perpétuons un savoir-faire traditionnel dans le respect des
              abeilles et de l'environnement.
            </p>
            <p>
              Nos ruches sont situées dans des zones préservées des Alpes,
              permettant à nos abeilles de butiner une flore riche et
              diversifiée.
            </p>
            <NuxtLink to="/a-propos" class="text-link"
              >En savoir plus sur notre engagement</NuxtLink
            >
          </div>
        </div>
      </div>
    </section>

    <section class="benefits">
      <div class="container">
        <h2 class="section-title">Pourquoi choisir notre miel ?</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">
              <IconLocalHoney />
            </div>
            <h3>100% Local</h3>
            <p>Production artisanale dans la région de Grenoble</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">
              <IconNatural />
            </div>
            <h3>Naturel</h3>
            <p>Aucun traitement chimique, un miel pur et authentique</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">
              <IconEco />
            </div>
            <h3>Écologique</h3>
            <p>Pratiques apicoles respectueuses de l'environnement</p>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <div class="container">
        <h2 class="section-title">Ce que disent nos clients</h2>
        <TestimonialSlider :testimonials="testimonials" />
      </div>
    </section>

    <section class="newsletter">
      <div class="container">
        <div class="newsletter-container">
          <div class="newsletter-content">
            <h2>Restez informé</h2>
            <p>
              Inscrivez-vous à notre newsletter et recevez 10% de réduction sur
              votre première commande.
            </p>
          </div>
          <form class="newsletter-form" @submit.prevent="subscribeToNewsletter">
            <input
              v-model="email"
              type="email"
              placeholder="Votre adresse email"
              required
            />
            <button type="submit" class="btn-primary">S'abonner</button>
          </form>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      featuredProducts: [
        {
          id: 1,
          name: "Miel de Montagne",
          price: 12.9,
          // image: "/images/miel-montagne.jpg",
          description:
            "Un miel délicat aux notes florales des alpages de Chartreuse.",
        },
        {
          id: 2,
          name: "Miel de Châtaignier",
          price: 14.5,
          // image: "/images/miel-chataignier.jpg",
          description: "Un miel corsé aux arômes boisés et légèrement amers.",
        },
        {
          id: 3,
          name: "Miel d'Acacia",
          price: 15.9,
          // image: "/images/miel-acacia.jpg",
          description:
            "Un miel doux et très clair qui reste longtemps liquide.",
        },
        {
          id: 4,
          name: "Miel de Lavande",
          price: 13.9,
          // image: "/images/miel-lavande.jpg",
          description: "Un miel parfumé aux douces notes florales de lavande.",
        },
      ],
      testimonials: [
        {
          id: 1,
          name: "Sophie M.",
          text: "Un miel d'exception, on sent vraiment la différence avec les produits industriels. Le goût est incroyable !",
          rating: 5,
        },
        {
          id: 2,
          name: "Thomas L.",
          text: "Client fidèle depuis 3 ans, la qualité est toujours au rendez-vous. Le miel de châtaignier est mon préféré.",
          rating: 5,
        },
        {
          id: 3,
          name: "Marie D.",
          text: "Livraison rapide et produits soigneusement emballés. Le miel d'acacia est délicieux sur mes tartines du matin.",
          rating: 4,
        },
      ],
    };
  },
  methods: {
    subscribeToNewsletter() {
      // À implémenter: logique d'inscription à la newsletter
      alert("Merci de vous être inscrit à notre newsletter !");
      this.email = "";
    },
  },
};
</script>

<style scoped>
.hero {
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("~/assets/images/hero-apiculture.jpg"); */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 120px 0;
  margin-bottom: 60px;
}

.hero-content {
  max-width: 700px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 16px;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 32px;
  font-weight: 300;
}

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

.about-section {
  padding: 80px 0;
  background-color: #fff8e1;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.about-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.about-content p {
  margin-bottom: 20px;
}

.benefits {
  padding: 80px 0;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.benefit-card {
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-5px);
}

.benefit-icon {
  margin-bottom: 20px;
  font-size: 40px;
  color: #ffc107;
}

.testimonials {
  padding: 80px 0;
  background-color: #fff8e1;
}

.newsletter {
  padding: 80px 0;
}

.newsletter-container {
  background-color: #ffc107;
  border-radius: 8px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

.newsletter-content {
  flex: 1;
  min-width: 300px;
}

.newsletter-content h2 {
  color: #5d4037;
  margin-bottom: 10px;
}

.newsletter-form {
  display: flex;
  gap: 10px;
  flex: 1;
  min-width: 300px;
}

.newsletter-form input {
  flex: 1;
  padding: 14px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
}

.btn-primary {
  background-color: #5d4037;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #4e342e;
}

.btn-secondary {
  background-color: transparent;
  color: #5d4037;
  padding: 10px 24px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  font-weight: 600;
  border: 2px solid #5d4037;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-secondary:hover {
  background-color: #5d4037;
  color: white;
}

.text-link {
  color: #795548;
  text-decoration: none;
  font-weight: 500;
  position: relative;
}

.text-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #795548;
  transition: width 0.3s;
}

.text-link:hover::after {
  width: 100%;
}

.text-center {
  text-align: center;
}

.mt-8 {
  margin-top: 32px;
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 0;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
  }

  .newsletter-container {
    padding: 30px;
  }
}
</style>