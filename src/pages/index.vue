<template>
  <div class="container mx-auto px-4 py-8">
    <header class="text-center mb-12">
      <h1 class="text-4xl font-bold text-amber-800 mb-4">
        Nos Miels d'Exception
      </h1>
      <p class="text-xl text-gray-600">
        Découvrez nos miels artisanaux, récoltés avec passion
      </p>
    </header>

    <section class="grid md:grid-cols-3 gap-8">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow flex flex-col justify-between"
      >
        <div>
          <div class="mb-4">
            <img
              :src="product.image"
              :alt="product.name"
              class="mx-auto h-64 w-64 object-cover rounded-lg"
            />
          </div>
          <h2 class="text-2xl font-semibold text-center mb-4 text-amber-700">
            {{ product.name }}
          </h2>
          <p class="text-gray-600 mb-4 text-center">
            {{ product.description }}
          </p>
        </div>
        <div>
          <table class="w-full">
            <thead>
              <tr class="border-b">
                <th class="py-2 text-left">Quantité</th>
                <th class="py-2 text-right">Prix</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="size in product.sizes"
                :key="size.quantity"
                :class="{ 'opacity-50': size.price === null }"
              >
                <td class="py-2">
                  {{ size.quantity }}g
                  <span
                    v-if="size.price === null"
                    class="text-sm text-gray-500 ml-2"
                  >
                    (Indisponible)
                  </span>
                </td>
                <td class="py-2 text-right">
                  {{ size.price !== null ? size.price + "€" : "---" }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="mt-16 bg-amber-50 p-8 rounded-lg">
      <h2 class="text-3xl font-bold text-center mb-8 text-amber-900">
        Contactez-nous
      </h2>
      <form class="max-w-lg mx-auto" @submit.prevent="sendEmail">
        <div class="mb-4">
          <label class="block mb-2">Nom</label>
          <input
            v-model="emailForm.name"
            type="text"
            class="w-full p-2 border rounded"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2">Email</label>
          <input
            v-model="emailForm.email"
            type="email"
            class="w-full p-2 border rounded"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2">Message</label>
          <textarea
            v-model="emailForm.message"
            class="w-full p-2 border rounded h-32"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-amber-600 text-white p-3 rounded hover:bg-amber-700 transition"
        >
          Envoyer un message
        </button>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data: products } = await useAsyncData("products", () => {
  return queryCollection("products").all();
});

const emailForm = ref({
  name: "",
  email: "",
  message: "",
});

const sendEmail = () => {
  // Logique d'envoi d'email à implémenter
  console.log("Email envoyé:", emailForm.value);
  // Vous devrez intégrer un service d'envoi d'email backend
};
</script>

<style scoped>
body {
  background-color: #fffbeb;
}
</style>
