neuron.config({
  "tree": {
    "todos.backbonejs": {
      "0.1.0": [
        {
          "json": {
            "^1.0.1": "1.0.1"
          },
          "backbone.localstorage": {
            "^1.1.9": "1.1.9"
          },
          "jquery": {
            "^1.9.1": "1.9.1"
          },
          "backbone": {
            "^1.1.2": "1.1.2"
          },
          "underscore": {
            "^1.5.2": "1.5.2"
          },
          "moment": {
            "^2.7.0": "2.7.0"
          }
        },
        {}
      ]
    },
    "backbone.localstorage": {
      "1.1.9": [
        {
          "backbone": {
            "~1.x.x": "1.1.2"
          },
          "underscore": {
            ">=1.4.0": "1.5.2"
          }
        },
        {}
      ]
    },
    "backbone": {
      "1.1.2": [
        {
          "underscore": {
            ">=1.5.0": "1.5.2"
          }
        },
        {}
      ]
    },
    "_": {
      "todos.backbonejs": {
        "*": "0.1.0"
      }
    }
  }
});