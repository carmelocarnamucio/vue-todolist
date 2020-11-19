//BONUS:
//la possibilità di inserire la nota scritta nell’input anche con la pressione del tasto ‘enter’ da tastiera
//aggiunto tasto cancella tutto, che appare all'inserimento di una seconda nota
//aggiunta transizione quando viene eliminato una nota
//alert che ti avverte che hai già inserito lo stesso elemento nella lista o non hai inserito nussun carattere

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
        this.todo = ""
      } else if (this.todo === "" ){
        alert("Non hai inserito nessun carattere");
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
