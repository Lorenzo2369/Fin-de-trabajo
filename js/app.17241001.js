(function(){"use strict";var e={1053:function(e,t,a){var r=a(5130),s=a(6768),o=a(4232),n=a.p+"img/Pokeball.21afca8f.png",i=a.p+"img/balldb.10e5b172.png";const l={key:0,class:"game-selection"},c={class:"button-container"};function u(e,t,a,r,u,h){const m=(0,s.g2)("PokemonGuessGame"),k=(0,s.g2)("DragonBallGuessGame");return(0,s.uX)(),(0,s.CE)("div",{id:"app",class:(0,o.C4)({darkMode:u.isDarkMode})},[h.hasSelectedGame?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",l,[t[2]||(t[2]=(0,s.Lk)("h1",{class:"title"},"Juegos de Adivinanzas",-1)),t[3]||(t[3]=(0,s.Lk)("p",{class:"subtitle"},"Selecciona tu juego favorito y comienza a jugar.",-1)),(0,s.Lk)("div",c,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=e=>h.selectGame("pokemon")),class:"game-button"},"Jugar Pokémon"),(0,s.Lk)("button",{onClick:t[1]||(t[1]=e=>h.selectGame("dragonball")),class:"game-button"},"Jugar Dragon Ball")]),t[4]||(t[4]=(0,s.Lk)("div",{class:"game-logo-container"},[(0,s.Lk)("img",{src:n,alt:"Logo Pokémon",class:"game-logo pokeball-logo"}),(0,s.Lk)("img",{src:i,alt:"Logo Dragon Ball",class:"game-logo dragonball-logo"})],-1))])),"pokemon"===u.selectedGame?((0,s.uX)(),(0,s.Wv)(m,{key:1,isDarkMode:u.isDarkMode,onToggleDarkMode:h.toggleDarkMode,onResetToMainMenu:h.resetToMenu},null,8,["isDarkMode","onToggleDarkMode","onResetToMainMenu"])):(0,s.Q3)("",!0),"dragonball"===u.selectedGame?((0,s.uX)(),(0,s.Wv)(k,{key:2,isDarkMode:u.isDarkMode,onToggleDarkMode:h.toggleDarkMode,onResetToMainMenu:h.resetToMenu},null,8,["isDarkMode","onToggleDarkMode","onResetToMainMenu"])):(0,s.Q3)("",!0)],2)}const h={id:"app"},m={key:0,class:"start-screen"},k={key:1,class:"game-over-screen"},d={class:"results-box"},p={class:"score"},g={class:"score"},v={class:"score"},f={class:"buttons-container"},b=["src"],L={key:1,class:"pokemon-details"},C={key:2},y={key:0},w=["src"],M={key:1,class:"options-container"},A=["onClick"],G={key:2,class:"input-container"},P={class:"timer-container"},E={class:"timer"},D={class:"timer-bar"};function T(e,t,a,n,i,l){return(0,s.uX)(),(0,s.CE)("div",h,[t[11]||(t[11]=(0,s.Lk)("h1",{class:"game-title"},"Poke-Guess Game",-1)),i.hasStarted?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",m,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>l.startGame&&l.startGame(...e)),class:"start-button"},"Iniciar Juego")])),i.isGameOver&&i.hasStarted?((0,s.uX)(),(0,s.CE)("div",k,[t[9]||(t[9]=(0,s.Lk)("h2",null,"¡Juego Terminado!",-1)),(0,s.Lk)("div",d,[(0,s.Lk)("p",p,"Puntuación Final: "+(0,o.v_)(i.score),1),(0,s.Lk)("p",g,"Aciertos: "+(0,o.v_)(i.correctAnswers),1),(0,s.Lk)("p",v,"Fallos: "+(0,o.v_)(i.incorrectAnswers),1)]),(0,s.Lk)("div",f,[(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>l.startGame&&l.startGame(...e)),class:"restart-button"},"Nuevo Juego"),(0,s.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>l.goToMainMenu&&l.goToMainMenu(...e)),class:"main-menu-button"},"Menú Principal")]),i.currentPokemon?((0,s.uX)(),(0,s.CE)("img",{key:0,src:i.currentPokemon.sprites.front_default,alt:"Pokemon",class:"pokemon-img"},null,8,b)):(0,s.Q3)("",!0),i.pokemonDetails?((0,s.uX)(),(0,s.CE)("div",L,[t[7]||(t[7]=(0,s.Lk)("h3",null,"Detalles del Pokémon",-1)),(0,s.Lk)("table",null,[t[5]||(t[5]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",null,"Habilidad")])],-1)),(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.pokemonDetails.abilities,(e=>((0,s.uX)(),(0,s.CE)("tr",{key:e.ability.name},[(0,s.Lk)("td",null,(0,o.v_)(e.ability.name),1)])))),128))])]),t[8]||(t[8]=(0,s.Lk)("h3",null,"Estadísticas",-1)),(0,s.Lk)("table",null,[t[6]||(t[6]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",null,"Estadística"),(0,s.Lk)("th",null,"Valor")])],-1)),(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.pokemonDetails.stats,(e=>((0,s.uX)(),(0,s.CE)("tr",{key:e.stat.name},[(0,s.Lk)("td",null,(0,o.v_)(e.stat.name),1),(0,s.Lk)("td",null,(0,o.v_)(e.base_stat),1)])))),128))])])])):(0,s.Q3)("",!0)])):((0,s.uX)(),(0,s.CE)("div",C,[t[10]||(t[10]=(0,s.Lk)("p",{class:"guess-prompt"},"¡Adivina el Pokémon!",-1)),i.currentPokemon?((0,s.uX)(),(0,s.CE)("div",y,[(0,s.Lk)("img",{src:i.currentPokemon.sprites.front_default,alt:"Pokemon",class:"pokemon-img"},null,8,w)])):(0,s.Q3)("",!0),"easy"===i.gameMode?((0,s.uX)(),(0,s.CE)("div",M,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.options,(e=>((0,s.uX)(),(0,s.CE)("button",{key:e,onClick:t=>l.checkAnswer(e),class:"option-button"},(0,o.v_)(e),9,A)))),128))])):((0,s.uX)(),(0,s.CE)("div",G,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>i.playerAnswer=e),placeholder:"Escribe el nombre del Pokémon",class:"answer-input"},null,512),[[r.Jo,i.playerAnswer]]),(0,s.Lk)("button",{onClick:t[4]||(t[4]=e=>l.checkAnswer(i.playerAnswer)),class:"check-answer-button"},"Comprobar")])),(0,s.Lk)("div",P,[(0,s.Lk)("p",E,"Tiempo restante: "+(0,o.v_)(i.timeLeft)+" segundos",1),(0,s.Lk)("div",D,[(0,s.Lk)("div",{style:(0,o.Tr)({width:i.timeLeft/30*100+"%"}),class:"timer-fill"},null,4)])])]))])}a(4114),a(8111),a(1701);var X=a(4373),_={data(){return{isGameOver:!1,hasStarted:!1,score:0,correctAnswers:0,incorrectAnswers:0,timeLeft:30,playerAnswer:"",gameMode:"easy",options:[],currentPokemon:null,pokemonDetails:null,allPokemon:[]}},methods:{async fetchAllPokemon(){try{const e=await X.A.get("https://pokeapi.co/api/v2/pokemon?limit=898");this.allPokemon=e.data.results.map((e=>e.name))}catch(e){console.error("Error al cargar la lista de Pokémon:",e)}},async fetchPokemon(){try{0===this.allPokemon.length&&await this.fetchAllPokemon();const e=Math.floor(898*Math.random())+1,t=await X.A.get(`https://pokeapi.co/api/v2/pokemon/${e}`);this.currentPokemon=t.data,await this.fetchPokemonDetails(e),this.options=this.generateOptions(this.currentPokemon.name)}catch(e){console.error("Error al obtener el Pokémon:",e)}},async fetchPokemonDetails(e){try{const t=await X.A.get(`https://pokeapi.co/api/v2/pokemon/${e}`);this.pokemonDetails=t.data}catch(t){console.error("Error al obtener detalles del Pokémon:",t)}},generateOptions(e){let t=[e];while(t.length<4){const e=this.allPokemon[Math.floor(Math.random()*this.allPokemon.length)];t.includes(e)||t.push(e)}return t.sort((()=>Math.random()-.5))},checkAnswer(e){e.toLowerCase()===this.currentPokemon.name.toLowerCase()?(this.score++,this.correctAnswers++):this.incorrectAnswers++,this.fetchPokemon()},startGame(){this.hasStarted=!0,this.isGameOver=!1,this.score=0,this.correctAnswers=0,this.incorrectAnswers=0,this.timeLeft=30,this.fetchPokemon(),this.startTimer()},startTimer(){const e=setInterval((()=>{this.timeLeft>0?this.timeLeft--:(clearInterval(e),this.isGameOver=!0)}),1e3)},resetGame(){this.hasStarted=!1,this.isGameOver=!1,this.score=0,this.correctAnswers=0,this.incorrectAnswers=0,this.timeLeft=30,this.playerAnswer="",this.currentPokemon=null,this.pokemonDetails=null},goToMainMenu(){this.resetGame(),this.$emit("resetToMainMenu")}},async mounted(){await this.fetchAllPokemon()}},O=a(1241);const j=(0,O.A)(_,[["render",T],["__scopeId","data-v-bc9a7748"]]);var S=j;const I={id:"app"},F={key:0},J={key:1,class:"game-over"},Q={class:"score"},x={class:"score"},B=["src"],$={key:2,class:"game-container"},K={key:0},R=["src"],V={key:1,class:"options-container"},N=["onClick"],U={key:2,class:"input-container"},z={class:"timer"},W={class:"score-board"},H={class:"score"},q={class:"score"};function Y(e,t,a,n,i,l){return(0,s.uX)(),(0,s.CE)("div",I,[t[7]||(t[7]=(0,s.Lk)("h1",null,"Dragon Ball Guess Game",-1)),i.hasStarted?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",F,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>l.startGame&&l.startGame(...e)),class:"btn-main"},"Iniciar Juego")])),i.isGameOver&&i.hasStarted?((0,s.uX)(),(0,s.CE)("div",J,[t[5]||(t[5]=(0,s.Lk)("h2",null,"Game Over",-1)),(0,s.Lk)("p",Q,"Acertos: "+(0,o.v_)(i.correctAnswers),1),(0,s.Lk)("p",x,"Fallos: "+(0,o.v_)(i.incorrectAnswers),1),(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>l.startGame&&l.startGame(...e)),class:"btn-main"},"Iniciar Nuevo Juego"),(0,s.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>l.goToMainMenu&&l.goToMainMenu(...e)),class:"btn-secondary"},"Volver al Menú"),i.currentCharacter?((0,s.uX)(),(0,s.CE)("img",{key:0,src:i.currentCharacter.image||"default-image.jpg",alt:"Character",class:"character-img"},null,8,B)):(0,s.Q3)("",!0)])):((0,s.uX)(),(0,s.CE)("div",$,[t[6]||(t[6]=(0,s.Lk)("p",{class:"game-title"},"¡Adivina el Personaje de Dragon Ball!",-1)),i.currentCharacter?((0,s.uX)(),(0,s.CE)("div",K,[(0,s.Lk)("img",{src:i.currentCharacter.image||"default-image.jpg",alt:"Character",class:"character-img"},null,8,R)])):(0,s.Q3)("",!0),"easy"===i.gameMode?((0,s.uX)(),(0,s.CE)("div",V,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.options,(e=>((0,s.uX)(),(0,s.CE)("button",{key:e,onClick:t=>l.checkAnswer(e),class:"btn-option"},(0,o.v_)(e),9,N)))),128))])):((0,s.uX)(),(0,s.CE)("div",U,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>i.playerAnswer=e),placeholder:"Escribe el nombre del Personaje",class:"input-answer"},null,512),[[r.Jo,i.playerAnswer]]),(0,s.Lk)("button",{onClick:t[4]||(t[4]=e=>l.checkAnswer(i.playerAnswer)),class:"btn-check"},"Comprobar respuesta")])),(0,s.Lk)("p",z,"Tiempo restante: "+(0,o.v_)(i.timeLeft)+" segundos",1),(0,s.Lk)("div",W,[(0,s.Lk)("p",H,"Acertos: "+(0,o.v_)(i.correctAnswers),1),(0,s.Lk)("p",q,"Fallos: "+(0,o.v_)(i.incorrectAnswers),1)])]))])}var Z={data(){return{isGameOver:!1,hasStarted:!1,score:0,timeLeft:30,playerAnswer:"",gameMode:"easy",options:[],currentCharacter:null,characterDetails:null,allCharacters:[],timer:null,correctAnswers:0,incorrectAnswers:0}},methods:{async fetchAllCharacters(){try{const e=await X.A.get("https://dragonball-api.com/api/characters");if(!Array.isArray(e.data.items))return void console.error("Formato incorrecto de API:",e.data);this.allCharacters=e.data.items}catch(e){console.error("Error al cargar la lista de personajes:",e)}},async fetchCharacter(){try{0===this.allCharacters.length&&await this.fetchAllCharacters();const e=Math.floor(Math.random()*this.allCharacters.length),t=this.allCharacters[e];if(!t||!t.name||!t.image)return void console.error("Personaje inválido o sin imagen:",t);this.currentCharacter=t,await this.fetchCharacterDetails(t.id),this.options=this.generateOptions(t.name)}catch(e){console.error("Error al obtener el personaje:",e)}},async fetchCharacterDetails(e){try{const t=await X.A.get(`https://dragonball-api.com/api/characters/${e}`);this.characterDetails=t.data}catch(t){console.error("Error al obtener detalles del personaje:",t)}},generateOptions(e){if(this.allCharacters.length<4)return console.error("No hay suficientes personajes para generar opciones"),[e];let t=[e];while(t.length<4){const e=this.allCharacters[Math.floor(Math.random()*this.allCharacters.length)];e&&e.name&&!t.includes(e.name)&&t.push(e.name)}return t.sort((()=>Math.random()-.5))},checkAnswer(e){e.toLowerCase()===this.currentCharacter.name.toLowerCase()?(this.score++,this.correctAnswers++):this.incorrectAnswers++,this.fetchCharacter()},startGame(){this.hasStarted=!0,this.isGameOver=!1,this.score=0,this.correctAnswers=0,this.incorrectAnswers=0,this.timeLeft=30,this.fetchCharacter(),this.startTimer()},startTimer(){this.timer&&clearInterval(this.timer),this.timer=setInterval((()=>{this.timeLeft>0?this.timeLeft--:(clearInterval(this.timer),this.isGameOver=!0)}),1e3)},goToMainMenu(){this.resetGame(),this.$emit("resetToMainMenu")},resetGame(){this.isGameOver=!1,this.hasStarted=!1,this.correctAnswers=0,this.incorrectAnswers=0,this.timeLeft=30}},async mounted(){await this.fetchAllCharacters()},beforeUnmount(){this.timer&&clearInterval(this.timer)}};const ee=(0,O.A)(Z,[["render",Y],["__scopeId","data-v-32aa0f56"]]);var te=ee,ae={components:{DragonBallGuessGame:te,PokemonGuessGame:S},data(){return{isDarkMode:!1,selectedGame:null}},computed:{hasSelectedGame(){return null!==this.selectedGame}},methods:{toggleDarkMode(){this.isDarkMode=!this.isDarkMode},selectGame(e){this.selectedGame=e},resetToMenu(){this.selectedGame=null}}};const re=(0,O.A)(ae,[["render",u],["__scopeId","data-v-2cd4e40a"]]);var se=re;(0,r.Ef)(se).mount("#app")}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,r,s,o){if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],s=e[u][1],o=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(i=!1,o<n&&(n=o));if(i){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,s,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,o,n=r[0],i=r[1],l=r[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(l)var u=l(a)}for(t&&t(r);c<n.length;c++)o=n[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},r=self["webpackChunkpoke_guess"]=self["webpackChunkpoke_guess"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(1053)}));r=a.O(r)})();
//# sourceMappingURL=app.17241001.js.map