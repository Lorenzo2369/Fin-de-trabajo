<template>
    <div class="game-container">
      <h1>¿Quién es ese Pokémon?</h1>
      <img v-if="pokemon" :src="pokemon.image" class="pokemon-image" />
      <input v-model="userAnswer" @keyup.enter="checkAnswer" placeholder="Escribe el nombre..." />
      <button @click="checkAnswer">Adivinar</button>
      <button @click="getHint">Pista</button>
      <p v-if="message">{{ message }}</p>
      <p>Puntaje: {{ score }}</p>
    </div>
  </template>
  
  <script>
  import GameController from "../controllers/GameController.js";
  
  export default {
    data() {
      return {
        pokemon: null,
        userAnswer: "",
        message: "",
        score: 0,
      };
    },
    async mounted() {
      this.pokemon = await GameController.startGame();
    },
    methods: {
      async checkAnswer() {
        if (GameController.checkAnswer(this.userAnswer)) {
          this.message = "¡Correcto!";
          this.score = GameController.score;
          this.pokemon = await GameController.startGame();
          this.userAnswer = "";
        } else {
          this.message = "Incorrecto, intenta de nuevo.";
        }
      },
      getHint() {
        this.message = `Pista: ${GameController.getHint()}`;
      },
    },
  };
  </script>
  
  <style>
  .game-container {
    text-align: center;
  }
  .pokemon-image {
    width: 200px;
    filter: brightness(0); /* Silueta negra */
  }
  </style>
  