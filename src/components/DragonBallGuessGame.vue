<template>
  <div id="app">
    <h1>Dragon Ball Guess Game</h1>

    <!-- Pantalla inicial con el botón de iniciar juego -->
    <div v-if="!hasStarted">
      <button @click="startGame" class="btn-main">Iniciar Juego</button>
    </div>

    <!-- Pantalla del juego -->
    <div v-if="isGameOver && hasStarted" class="game-over">
      <h2>Game Over</h2>
      <p class="score">Acertos: {{ correctAnswers }}</p>
      <p class="score">Fallos: {{ incorrectAnswers }}</p>
      <button @click="startGame" class="btn-main">Iniciar Nuevo Juego</button>
      <button @click="goToMainMenu" class="btn-secondary">Volver al Menú</button>
      <img v-if="currentCharacter" :src="currentCharacter.image || 'default-image.jpg'" alt="Character" class="character-img">
    </div>

    <div v-else class="game-container">
      <p class="game-title">¡Adivina el Personaje de Dragon Ball!</p>

      <div v-if="currentCharacter">
        <img :src="currentCharacter.image || 'default-image.jpg'" alt="Character" class="character-img" />
      </div>

      <div v-if="gameMode === 'easy'" class="options-container">
        <button v-for="option in options" :key="option" @click="checkAnswer(option)" class="btn-option">
          {{ option }}
        </button>
      </div>
      <div v-else class="input-container">
        <input v-model="playerAnswer" placeholder="Escribe el nombre del Personaje" class="input-answer">
        <button @click="checkAnswer(playerAnswer)" class="btn-check">Comprobar respuesta</button>
      </div>

      <p class="timer">Tiempo restante: {{ timeLeft }} segundos</p>

      <!-- Mostrar los aciertos y fallos durante el juego -->
      <div class="score-board">
        <p class="score">Acertos: {{ correctAnswers }}</p>
        <p class="score">Fallos: {{ incorrectAnswers }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isGameOver: false,
      hasStarted: false,
      score: 0,
      timeLeft: 30,
      playerAnswer: '',
      gameMode: 'easy',
      options: [],
      currentCharacter: null,
      characterDetails: null,
      allCharacters: [],
      timer: null,
      correctAnswers: 0,
      incorrectAnswers: 0
    };
  },
  methods: {
    async fetchAllCharacters() {
      try {
        const response = await axios.get('https://dragonball-api.com/api/characters');
        if (!Array.isArray(response.data.items)) {
          console.error("Formato incorrecto de API:", response.data);
          return;
        }
        this.allCharacters = response.data.items;
      } catch (error) {
        console.error("Error al cargar la lista de personajes:", error);
      }
    },

    async fetchCharacter() {
      try {
        if (this.allCharacters.length === 0) {
          await this.fetchAllCharacters();
        }
        const randomIndex = Math.floor(Math.random() * this.allCharacters.length);
        const character = this.allCharacters[randomIndex];
        if (!character || !character.name || !character.image) {
          console.error("Personaje inválido o sin imagen:", character);
          return;
        }
        this.currentCharacter = character;
        await this.fetchCharacterDetails(character.id);
        this.options = this.generateOptions(character.name);
      } catch (error) {
        console.error("Error al obtener el personaje:", error);
      }
    },

    async fetchCharacterDetails(id) {
      try {
        const response = await axios.get(`https://dragonball-api.com/api/characters/${id}`);
        this.characterDetails = response.data;
      } catch (error) {
        console.error("Error al obtener detalles del personaje:", error);
      }
    },

    generateOptions(correctAnswer) {
      if (this.allCharacters.length < 4) {
        console.error("No hay suficientes personajes para generar opciones");
        return [correctAnswer];
      }
      let options = [correctAnswer];
      while (options.length < 4) {
        const randomCharacter = this.allCharacters[Math.floor(Math.random() * this.allCharacters.length)];
        if (randomCharacter && randomCharacter.name && !options.includes(randomCharacter.name)) {
          options.push(randomCharacter.name);
        }
      }
      return options.sort(() => Math.random() - 0.5);
    },

    checkAnswer(answer) {
      if (answer.toLowerCase() === this.currentCharacter.name.toLowerCase()) {
        this.score++;
        this.correctAnswers++;
      } else {
        this.incorrectAnswers++;
      }
      this.fetchCharacter();
    },

    startGame() {
      this.hasStarted = true;
      this.isGameOver = false;
      this.score = 0;
      this.correctAnswers = 0;
      this.incorrectAnswers = 0;
      this.timeLeft = 30;
      this.fetchCharacter();
      this.startTimer();
    },

    startTimer() {
      if (this.timer) clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          clearInterval(this.timer);
          this.isGameOver = true;
        }
      }, 1000);
    },

    goToMainMenu() {
      this.resetGame();
      this.$emit('resetToMainMenu');
    },

    resetGame() {
      this.isGameOver = false;
      this.hasStarted = false;
      this.correctAnswers = 0;
      this.incorrectAnswers = 0;
      this.timeLeft = 30;
    }
  },

  async mounted() {
    await this.fetchAllCharacters();
  },

  beforeUnmount() {
    if (this.timer) clearInterval(this.timer);
  }
};
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  color: #fff;
  background: linear-gradient(135deg, #2c3e50, #2980b9);
  padding: 20px;
  min-height: 100vh;
}

h1 {
  font-size: 3rem;
  color: #ffcc00;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
}

.btn-main {
  background-color: #ffcc00;
  border: none;
  padding: 12px 24px;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 15px;
  border-radius: 10px;
  transition: 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-main:hover {
  background-color: #006D5B;
}

.btn-secondary {
  background-color: #ffaa00;
  border: none;
  padding: 12px 24px;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 15px;
  border-radius: 10px;
  transition: 0.3s;
}

.btn-secondary:hover {
  background-color: #006D5B;
}

.btn-option {
  background-color: #3498db;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-option:hover {
  background-color: #2980b9;
}

.input-answer {
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 300px;
  margin: 10px;
}

.btn-check {
  background-color: #1abc9c;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-check:hover {
  background-color: #16a085;
}

.character-img {
  width: 200px;
  height: 200px;
  display: block;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  object-fit: contain;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.game-container {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
}

.timer {
  font-size: 1.5rem;
  color: #fff;
  margin: 20px 0;
}

.score-board {
  margin-top: 20px;
}

.score {
  font-size: 1.5rem;
  color: #ffcc00;
}

.game-over {
  background-color: rgba(1, 2, 14, 0.7);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
}

.game-title {
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 20px;
}

input:focus {
  outline: none;
  border-color: #ffcc00;
}

button:active {
  transform: scale(0.98);
}
</style>
