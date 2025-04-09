import PokeAPIService from "../services/PokeAPIService.js";
import Pokemon from "../models/Pokemon.js";

export default {
  currentPokemon: null,
  score: 0,
  attempts: 0,
  hints: 0,

  async startGame() {
    const data = await PokeAPIService.getRandomPokemon();
    this.currentPokemon = new Pokemon(data.name, data.image);
    this.attempts = 0;
    this.hints = 0;
    return this.currentPokemon;
  },

  checkAnswer(userInput) {
    if (userInput.toLowerCase() === this.currentPokemon.name.toLowerCase()) {
      this.score += 10;
      return true;
    } else {
      this.attempts++;
      return false;
    }
  },

  getHint() {
    this.hints++;
    return this.currentPokemon.name.substring(0, this.hints);
  },
};
