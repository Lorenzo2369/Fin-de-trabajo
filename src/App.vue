<template>
  <div id="app" :class="{ darkMode: isDarkMode }">
    <!-- Selección de juego -->
    <div v-if="!hasSelectedGame" class="game-selection">
      <h1 class="title">Juegos de Adivinanzas</h1>
      <p class="subtitle">Selecciona tu juego favorito y comienza a jugar.</p>

      <!-- Botones para elegir juego -->
      <div class="button-container">
        <button @click="selectGame('pokemon')" class="game-button">Jugar Pokémon</button>
        <button @click="selectGame('dragonball')" class="game-button">Jugar Dragon Ball</button>
      </div>

      <!-- Imágenes con animación -->
      <div class="game-logo-container">
        <img src="@/assets/Pokeball.png" alt="Logo Pokémon" class="game-logo pokeball-logo" />
        <img src="@/assets/balldb.png" alt="Logo Dragon Ball" class="game-logo dragonball-logo" />
      </div>
    </div>

    <!-- Juegos -->
    <PokemonGuessGame 
      v-if="selectedGame === 'pokemon'" 
      :isDarkMode="isDarkMode"
      @toggleDarkMode="toggleDarkMode"
      @resetToMainMenu="resetToMenu"
    />

    <DragonBallGuessGame 
      v-if="selectedGame === 'dragonball'" 
      :isDarkMode="isDarkMode"
      @toggleDarkMode="toggleDarkMode"
      @resetToMainMenu="resetToMenu"
    />
  </div>
</template>

<script>
import PokemonGuessGame from '@/components/PokemonGuessGame.vue';
import DragonBallGuessGame from '@/components/DragonBallGuessGame.vue';

export default {
  components: {
    DragonBallGuessGame,
    PokemonGuessGame
  },
  data() {
    return {
      isDarkMode: false, // Estado inicial del fondo
      selectedGame: null // Ningún juego seleccionado al inicio
    };
  },
  computed: {
    hasSelectedGame() {
      return this.selectedGame !== null;
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode; // Alternar modo oscuro/claro
    },
    selectGame(game) {
      this.selectedGame = game;
    },
    resetToMenu() {
      this.selectedGame = null; // Regresa al menú principal
    }
  }
};
</script>

<style scoped>
/* 🌞 Modo Claro */
#app {
  height: 100vh;
  background-color: #f5f5f5;
  color: #333;
  font-family: 'Roboto', sans-serif;
  transition: background-color 0.5s ease, color 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app.darkMode {
  background-color: #121212;
  color: #e0e0e0;
}

/* 📌 Contenido */
.game-selection {
  text-align: center;
  padding: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #ffffff 0%, #f2f2f2 100%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;
  width: 400px;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
}

.game-button {
  background: #007bff;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.1em;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 48%;
}

.game-button:hover {
  background-color: #0056b3;
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.game-logo-container {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.game-logo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.pokeball-logo {
  animation: rotatePokeball 3s infinite linear;
}

.dragonball-logo {
  animation: rotateDragonBall 3s infinite linear;
}

@keyframes rotatePokeball {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes rotateDragonBall {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
}
</style>
