var app = new Vue({

  el: "#app",
  data: {
    todo: "",
    listTodo: [],
    clone: false
  },

  methods: {

    addTodo: function() {
      if (this.listTodo.includes(this.todo)) {
        this.clone = true;
      } else if (this.todo === "" ){
        alert("Non hai inserito nessun carattere");
      } else {
        this.listTodo.push(this.todo)
        this.todo = ""
      }
    },
    //funzione per rimuovere la singola nota
    removeTodo: function(i) {
      this.listTodo.splice(i, 1);
    },
    //funzione per rimuovere tutte le note
    removeAll: function() {
      alert('Lista cancellata');
      this.listTodo = [];
    },
    //funzione per confermare nota già presente
    confirm: function () {
     this.listTodo.push(this.todo);
     this.clone = false;
     this.todo = ""
    },
    //funzione per cancellare nota già presente
    deleteClone: function () {
     this.clone = false;
    },
    //funzione per spostare nota in su
    up: function(i){
      if(i > 0){
        let cont = this.listTodo[i];
        this.listTodo[i]= this.listTodo[i-1];
        this.listTodo[i-1] = cont;
        app.$forceUpdate()
      }
    },
    //funzione per spostare nota in giù
    down: function(i){
      if(i<(this.listTodo.length-1)){
        let cont = this.listTodo[i];
        this.listTodo[i]= this.listTodo[i+1];
        this.listTodo[i+1] = cont;
        app.$forceUpdate()
      }
    },
  }
});
