var app = new Vue({

  el: "#app",
  data: {
    todo: "",
    listTodo: [],
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
