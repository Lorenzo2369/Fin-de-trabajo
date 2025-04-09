<template>
  <div id="app">
    <h1 class="game-title">Poke-Guess Game</h1>
    
    <!-- Pantalla inicial con el botón de iniciar juego -->
    <div v-if="!hasStarted" class="start-screen">
      <button @click="startGame" class="start-button">Iniciar Juego</button>
    </div>

    <!-- Pantalla del juego -->
    <div v-if="isGameOver && hasStarted" class="game-over-screen">
      <h2>¡Juego Terminado!</h2>
      <!-- Recuadro de resultados -->
      <div class="results-box">
        <p class="score">Puntuación Final: {{ score }}</p>
        <p class="score">Aciertos: {{ correctAnswers }}</p>
        <p class="score">Fallos: {{ incorrectAnswers }}</p>
      </div>

      <div class="buttons-container">
        <button @click="startGame" class="restart-button">Nuevo Juego</button>
        <button @click="goToMainMenu" class="main-menu-button">Menú Principal</button>
      </div>
      
      <img v-if="currentPokemon" :src="currentPokemon.sprites.front_default" alt="Pokemon" class="pokemon-img">
      
      <!-- Mostrar detalles adicionales del Pokémon -->
      <div v-if="pokemonDetails" class="pokemon-details">
        <h3>Detalles del Pokémon</h3>
        <table>
          <thead>
            <tr>
              <th>Habilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ability in pokemonDetails.abilities" :key="ability.ability.name">
              <td>{{ ability.ability.name }}</td>
            </tr>
          </tbody>
        </table>
        <h3>Estadísticas</h3>
        <table>
          <thead>
            <tr>
              <th>Estadística</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="stat in pokemonDetails.stats" :key="stat.stat.name">
              <td>{{ stat.stat.name }}</td>
              <td>{{ stat.base_stat }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Juego en progreso -->
    <div v-else>
      <p class="guess-prompt">¡Adivina el Pokémon!</p>
      <div v-if="currentPokemon">
        <img :src="currentPokemon.sprites.front_default" alt="Pokemon" class="pokemon-img" />
      </div>

      <div v-if="gameMode === 'easy'" class="options-container">
        <button v-for="option in options" :key="option" @click="checkAnswer(option)" class="option-button">
          {{ option }}
        </button>
      </div>

      <div v-else class="input-container">
        <input v-model="playerAnswer" placeholder="Escribe el nombre del Pokémon" class="answer-input"/>
        <button @click="checkAnswer(playerAnswer)" class="check-answer-button">Comprobar</button>
      </div>

      <div class="timer-container">
        <p class="timer">Tiempo restante: {{ timeLeft }} segundos</p>
        <div class="timer-bar">
          <div :style="{ width: (timeLeft / 30) * 100 + '%' }" class="timer-fill"></div>
        </div>
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
      correctAnswers: 0,
      incorrectAnswers: 0,
      timeLeft: 30,
      playerAnswer: '',
      gameMode: 'easy',
      options: [],
      currentPokemon: null,
      pokemonDetails: null,
      allPokemon: []
    };
  },
  methods: {
    async fetchAllPokemon() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=898');
        this.allPokemon = response.data.results.map(pokemon => pokemon.name);
      } catch (error) {
        console.error('Error al cargar la lista de Pokémon:', error);
      }
    },
    async fetchPokemon() {
      try {
        if (this.allPokemon.length === 0) {
          await this.fetchAllPokemon();
        }
        const randomId = Math.floor(Math.random() * 898) + 1;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        this.currentPokemon = response.data;
        await this.fetchPokemonDetails(randomId);
        this.options = this.generateOptions(this.currentPokemon.name);
      } catch (error) {
        console.error('Error al obtener el Pokémon:', error);
      }
    },
    async fetchPokemonDetails(id) {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        this.pokemonDetails = response.data;
      } catch (error) {
        console.error('Error al obtener detalles del Pokémon:', error);
      }
    },
    generateOptions(correctAnswer) {
      let options = [correctAnswer];
      while (options.length < 4) {
        const randomName = this.allPokemon[Math.floor(Math.random() * this.allPokemon.length)];
        if (!options.includes(randomName)) {
          options.push(randomName);
        }
      }
      return options.sort(() => Math.random() - 0.5);
    },
    checkAnswer(answer) {
      if (answer.toLowerCase() === this.currentPokemon.name.toLowerCase()) {
        this.score++;
        this.correctAnswers++;
      } else {
        this.incorrectAnswers++;
      }
      this.fetchPokemon();
    },
    startGame() {
      this.hasStarted = true;
      this.isGameOver = false;
      this.score = 0;
      this.correctAnswers = 0;
      this.incorrectAnswers = 0;
      this.timeLeft = 30;
      this.fetchPokemon();
      this.startTimer();
    },
    startTimer() {
      const interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          clearInterval(interval);
          this.isGameOver = true;
        }
      }, 1000);
    },
    resetGame() {
      this.hasStarted = false;
      this.isGameOver = false;
      this.score = 0;
      this.correctAnswers = 0;
      this.incorrectAnswers = 0;
      this.timeLeft = 30;
      this.playerAnswer = '';
      this.currentPokemon = null;
      this.pokemonDetails = null;
    },
    goToMainMenu() {
      this.resetGame();
      this.$emit('resetToMainMenu');
    }
  },
  async mounted() {
    await this.fetchAllPokemon();
  }
};
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  color: #fff;
  background-color: #222;
  padding: 40px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

.game-title {
  font-size: 3.5rem;
  margin-bottom: 30px;
  color: #ffcc00;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

.start-button,
.restart-button,
.main-menu-button,
.check-answer-button {
  background-color: #ffcc00;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 15px;
}

.start-button:hover,
.restart-button:hover,
.main-menu-button:hover,
.check-answer-button:hover {
  background-color: #ffaa00;
  transform: translateY(-3px);
}

.pokemon-img {
  width: 220px;
  height: 220px;
  display: block;
  margin: 30px auto;
  background-color: #fff;
  border-radius: 10px;
  object-fit: cover;
  border: 5px solid #ffcc00;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.option-button {
  background-color: #007bff;
  color: white;
  padding: 12px 25px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.option-button:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
}

.input-container {
  margin-top: 20px;
}

.answer-input {
  padding: 12px;
  font-size: 1.2rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  width: 250px;
}

.timer-container {
  margin-top: 30px;
}

.timer {
  font-size: 1.2rem;
}

.timer-bar {
  width: 100%;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  margin-top: 10px;
}

.timer-fill {
  height: 100%;
  background-color: #ffcc00;
  border-radius: 5px;
}

.score {
  font-size: 1.5rem;
  margin: 15px 0;
  color: #ffcc00;
}

.results-box {
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  margin: 30px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
}

table {
  width: 80%;
  margin: 20px auto;
  border-collapse: collapse;
  background-color: #333;
  color: white;
  border-radius: 8px;
}

th, td {
  padding: 10px;
  text-align: left;
  border: 1px solid #555;
}

th {
  background-color: #444;
}

tr:hover {
  background-color: #555;
}
</style>
