//Creiamo una mini app di todolist con html+css+js in Vue
//Features principali:
//un input permette all’utente di scrivere una “cosa da fare”
//un bottone permette di aggiungere quella "cosa" alla lista in pagina, come promemoria
//grazie ad un bottone (X) può eliminare quella determinata "cosa" dalla lista

var app = new Vue({

  el: "#app",
  data: {
    todo: "",
    listTodo: []
  },

  methods: {

    addTodo: function() {
      if (this.todo != "") {
        this.listTodo.push(this.todo)
        this.todo = ""
      }
    },
    removeTodo: function(i) {
      this.listTodo.splice(i, 1);
    }
  }
});
