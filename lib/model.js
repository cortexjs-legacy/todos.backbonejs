var Backbone = require('backbone');
var LocalStorage = require('backbone.localstorage');

// Todo Model
// ----------

// Our basic **Todo** model has `title`, `order`, and `done` attributes.
var Todo = Backbone.Model.extend({

  // Default attributes for the todo item.
  defaults: function() {
    return {
      title: "empty todo...",
      order: Todos.nextOrder(),
      done: false
    };
  },

  // Ensure that each todo created has `title`.
  initialize: function() {
    if (!this.get("title")) {
      this.set({
        "title": this.defaults().title
      });
    }
  },

  // Toggle the `done` state of this todo item.
  toggle: function() {
    this.save({
      done: !this.get("done")
    });
  }

});

// Todo Collection
// ---------------

// The collection of todos is backed by *localStorage* instead of a remote
// server.
var TodoList = Backbone.Collection.extend({

  // Reference to this collection's model.
  model: Todo,

  // Save all of the todo items under the `"todos-backbone"` namespace.
  localStorage: new LocalStorage("todos-backbone"),

  // Filter down the list of all todo items that are finished.
  done: function() {
    return this.filter(function(todo) {
      return todo.get('done');
    });
  },

  // Filter down the list to only todo items that are still not finished.
  remaining: function() {
    return this.without.apply(this, this.done());
  },

  // We keep the Todos in sequential order, despite being saved by unordered
  // GUID in the database. This generates the next order number for new items.
  nextOrder: function() {
    if (!this.length) return 1;
    return this.last().get('order') + 1;
  },

  // Todos are sorted by their original insertion order.
  comparator: function(todo) {
    return todo.get('order');
  }

});

// Create our global collection of **Todos**.
var Todos = new TodoList();

exports.Todo = Todo;
exports.TodoList = TodoList;
exports.Todos = Todos;