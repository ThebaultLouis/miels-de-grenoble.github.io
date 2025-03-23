<!-- components/FooterSection.vue -->
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-col">
          <div class="footer-logo">
            <!-- <img src="~/assets/images/logo.svg" alt="Miel de Grenoble" /> -->
            <span>Miel de Grenoble</span>
          </div>
          <p class="footer-description">
            Apiculteurs passionnés à Grenoble. Nos miels sont produits dans le
            respect des abeilles et de l'environnement.
          </p>
          <div class="social-links">
            <a href="#" aria-label="Facebook">
              <IconFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <IconInstagram />
            </a>
            <a href="#" aria-label="Twitter">
              <IconTwitter />
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h3>Nos produits</h3>
          <ul class="footer-links">
            <li>
              <NuxtLink to="/produits/miel-montagne">Miel de Montagne</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/produits/miel-chataignier"
                >Miel de Châtaignier</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/produits/miel-acacia">Miel d'Acacia</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/produits/miel-lavande">Miel de Lavande</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/produits/miel-tilleul">Miel de Tilleul</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Informations</h3>
          <ul class="footer-links">
            <li><NuxtLink to="/a-propos">Notre histoire</NuxtLink></li>
            <li>
              <NuxtLink to="/processus">Processus de fabrication</NuxtLink>
            </li>
            <li><NuxtLink to="/blog">Blog</NuxtLink></li>
            <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Contact</h3>
          <address class="contact-info">
            <p><IconMapPin /> 123 Rue des Abeilles, 38000 Grenoble</p>
            <p><IconPhone /> 04 76 12 34 56</p>
            <p><IconMail /> contact@miel-grenoble.fr</p>
          </address>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          © {{ new Date().getFullYear() }} Miel de Grenoble. Tous droits
          réservés.
        </p>
        <div class="legal-links">
          <NuxtLink to="/mentions-legales">Mentions légales</NuxtLink>
          <NuxtLink to="/cgv">CGV</NuxtLink>
          <NuxtLink to="/confidentialite"
            >Politique de confidentialité</NuxtLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #5d4037;
  color: white;
  padding: 60px 0 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-col h3 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.footer-logo img {
  height: 40px;
}

.footer-description {
  margin-bottom: 20px;
  line-height: 1.6;
  opacity: 0.8;
}

.social-links {
  display: flex;
  gap: 15px;
  font-size: 1.5rem;
}

.social-links a {
  color: white;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.social-links a:hover {
  opacity: 1;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 10px;
}
</style>