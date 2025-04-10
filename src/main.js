const app = Vue.createApp({
    data() {
      return {
        message: '¡Hola, Pokémon Adivinanza!'
      };
    }
  });
  
  app.config.devtools = true;  // Activa los devtools para depuración
  app.mount('#app');
  