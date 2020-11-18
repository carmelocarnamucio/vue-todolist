//Creiamo una mini app di todolist con html+css+js in Vue
//Features principali:
//un input permette all’utente di scrivere una “cosa da fare”
//un bottone permette di aggiungere quella "cosa" alla lista in pagina, come promemoria
//grazie ad un bottone (X) può eliminare quella determinata "cosa" dalla lista
//BONUS:
//dò la possibilità anche di inserire la nuova “cosa da fare”, scritta nell’input anche con la pressione del tasto ‘enter’ da tastiera;
//aggiunto tasto cancella tutto
//aggiunta transizione quando viene eliminato elemento
//alert che ti avverte che hai già inserito lo stesso elemento nella lista

var app = new Vue({

  el: "#app",
  data: {
    todo: "",
    listTodo: [],
  },

  methods: {

    addTodo: function() {
      if (this.listTodo.includes(this.todo)) {
        alert("PROMEMORIA: Hai già inserito questa nota nella lista");
        this.listTodo.push(this.todo)
      } else {
        this.listTodo.push(this.todo)
        this.todo = ""
      }
    },
    removeTodo: function(i) {
      this.listTodo.splice(i, 1);
    },
    removeAll: function() {
      alert('Lista cancellata');
      this.listTodo = [];
    }
  }
});