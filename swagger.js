const m2s = require('mongoose-to-swagger');
const User = require('./models/user.model');
const Car = require('./models/car.model');

exports.options = {
  "components": {
    "schemas": {
      User: m2s(User),
      Car: m2s(Car)
    }
  },
  "openapi": "3.1.0",
  "info": {
    "version": "1.0.0",
    "title": "Booking  API",
    "description": "Booking Project Application",
    "contact": {
      "name": "API Support",
      "url": "https://www.example.com",
      "email": "support@example.com"
    },
  },
  "servers": [
    {
      url: 'http://localhost:3000',
      description: 'Local Server'
    },
    {
      url: "https://www.example.com",
      description: "Testing Server"
    }
  ],
  "tags": [
    {
      "name": "Users",
      "description": "API for users"
    },
    {
      "name": "Cars",
      "description": "API for cars"
    },
    {
      "name": "Users and Cars",
      "description": "API for users and their cars"
    }
  ],
  "paths": {
    "/api/users": {
      "get": {
        "tags": [
          "Users"
        ],
        "description": "Returns all users",
        "responses": {
          "200": {
            "description": "A list of users.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Users"
        ],
        "description": "Create new user",
        "requestBody": {
          "description": "User that we want to create",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "username": { "type": "string" },
                  "password": { "type": "string" },
                  "name": { "type": "string" },
                  "surname": { "type": "string" },
                  "email": { "type": "string" },
                  "phone": { "type": "string" },
                  "car": {
                    "type": "object",
                    "properties": {
                      "brand": { "type": "string" },
                      "model": { "type": "string" },
                      "year": { "type": "string" },
                      "seat": { "type": "number" },
                      "cc": { "type": "string" },
                      "transmission": { "type": "string" },
                      "price": { "type": "number" },
                      "photURL": { "type": "string" },
                    }
                  }
                },
                "required": ["username", "password", "email"]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "New user is created"
          }
        }
      }
    },
    "/api/users/{username}": {
      "get": {
        "tags": [
          "Users"
        ],
        "parameters": [
          {
            "name": "username",
            "in": "path",
            "required": true,
            "description": "Username of user that we want to find",
            "type": "string"
          }
        ],
        "description": "Get user with specific username, field description",
        "summary": "Summary Details",
        "responses": {
          "200": {
            "description": "User find",
            "schema": {
              "$ref": "#/components/schemas/User"
            }
          }
        }
      },
      "patch": {
        "tags": [
          "Users"
        ],
        "description": "Update user",
        "parameters": [
          {
            "name": "username",
            "in": "path",
            "required": true,
            "description": "Username of user that we want to update",
            "type": "string"
          }
        ],
        "requestBody": {
          "description": "Data of user that we want to update",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "username": { "type": "string" },
                  "password": { "type": "string" },
                  "name": { "type": "string" },
                  "surname": { "type": "string" },
                  "email": { "type": "string" },
                  "phone": { "type": "string" },
                  "car": {
                    "type": "object",
                    "properties": {
                      "brand": { "type": "string" },
                      "model": { "type": "string" },
                      "year": { "type": "string" },
                      "seat": { "type": "number" },
                      "cc": { "type": "string" },
                      "transmission": { "type": "string" },
                      "price": { "type": "number" },
                      "photURL": { "type": "string" },
                    }
                  }
                },
                "required": ["email"]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "User updated",
            "schema": {
              "$ref": "#/components/schemas/User"
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Users"
        ],
        "description": "Delete user",
        "parameters": [
          {
            "name": "username",
            "in": "path",
            "description": "Username of user that we want to delete",
            "schema": {
              "$ref": "#/components/schemas/User"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Delete a user"
          }
        }
      }
    },
    "/api/users-cars": {
      "get": {
        "tags": [
          "Users and Cars"
        ],
        "summary": "Get all user's cars",
        "description": "All user's cars",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/components/schemas/User"
            }
          }
        }
      },
      "post": {
        "tags": [
          "Users and Cars"
        ],
        "description": "Add new car for user",
        "requestBody": {
          "descritpion": "User that we want to add product",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "username": { "type": "string" },
                  "products": {
                    "type": "array",
                    "items": {
                      "type": "objects",
                      "properties": {
                        "brand": { "type": "string" },
                        "model": { "type": "string" },
                        "year": { "type": "string" },
                        "seat": { "type": "number" },
                        "cc": { "type": "string" },
                        "transmission": { "type": "string" },
                        "price": { "type": "number" },
                        "photURL": { "type": "string" },
                      }
                    }
                  }
                }
              },
              "required": ["brand"]
            }
          }
        }
      },
      "responses": {
        "200": {
          "description": "New car is added"
        }
      }
    }
  },
  "/api/users-cars/{username}": {
    "get": {
      "tags": [
        "Users and Cars"
      ],
      "parameters": [
        {
          "name": "username",
          "in": "path",
          "required": true,
          "description": "User's username to find cars",
          "type": "string"
        }
      ],
      "description": "Description Text",
      "summary": "Summary Text",
      "responses": {
        "200": {
          "description": "User's cars",
          "schema": {
            "$ref": "#/components/schemas/User"
          }
        }
      }
    },
    "patch": {
      "tags": [
        "Users and Cars"
      ],
      "description": "Update user's car",
      "parameters": [
        {
          "name": "username",
          "in": "path",
          "required": true,
          "description": "User's username to find cars",
          "type": "string"
        }
      ],
      "requestBody": {
        "description": "Description for request body",
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "properties": {
                "username": { "type": "string" },
                "car": {
                  "type": "object",
                  "properties": {
                    "brand": { "type": "string" },
                    "model": { "type": "string" },
                    "year": { "type": "string" },
                    "seat": { "type": "number" },
                    "cc": { "type": "string" },
                    "transmission": { "type": "string" },
                    "price": { "type": "number" },
                    "photURL": { "type": "string" },
                  }
                }
              },
              "required": ["brand"]
            }
          }
        }
      },
      "responses": {
        "200": {
          "description": "Car has been updated"
        }
      }
    }
  },
  "/api/users-cars/{username}/cars/{brand}": {
    "delete": {
      "tags": [
        "Users and Cars"
      ],
      "description": "Description for delete",
      "parameters": [
        {
          "name": "username",
          "in": "path",
          "description": "username to find",
          "required": true
        },
        {
          "name": "brand",
          "in": "path",
          "description": "brand name to delete",
          "required": true
        }
      ],
      "responses": {
        "200": {
          "description": "Car deleted"
        }
      }
    }
  },
  "/api/cars": {
    "get": {
      "tags": [
        "Cars"
      ],
      "description": "Get all cars",
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/components/schemas/Product"
          }
        }
      }
    },
    "post": {
      "tags": [
        "Cars"
      ],
      "description": "Insert car",
      "requestBody": {
        "description": "Data of product that we want to insert",
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "properties": {
                "brand": { "type": "string" },
                "model": { "type": "string" },
                "year": { "type": "string" },
                "seat": { "type": "number" },
                "cc": { "type": "string" },
                "transmission": { "type": "string" },
                "price": { "type": "number" },
                "photURL": { "type": "string" }
              },
              "required": ["brand"]
            }
          }
        }
      },
      "responses": {
        "200": {
          "description": "New car is created"
        }
      },
      "responses": {
        "400": {
          "description": "Problem in creating car"
        }
      }
    },
    "patch": {
      "tags": [
        "Cars"
      ],
      "descritpion": "Update cars"
    },
    "requestBody": {
      "description": "Description for request body",
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "brand": { "type": "string" },
              "model": { "type": "string" },
              "year": { "type": "string" },
              "seat": { "type": "number" },
              "cc": { "type": "string" },
              "transmission": { "type": "string" },
              "price": { "type": "number" },
              "photURL": { "type": "string" },
            },
            "required": ["brand"]
          }
        }
      }
    },
    "responses": {
      "200": {
        "description": "Success update"
      }
    },
    "responses": {
      "400": {
        "description": "Error in update"
      }
    }
  },
  "/api/cars/{brand}": {
    "get": {
      "tags": [
        "Cars"
      ],
      "description": "Get one car if exists",
      "parameters": [
        {
          "name": "brand",
          "in": "path",
          "description": "car to find",
          "required": true
        }
      ],
      "responses": {
        "200": {
          "description": "car find"
        }
      }
    },
    "delete": {
      "tags": [
        "Cars"
      ],
      "description": "Delete a car",
      "parameters": [
        {
          "name": "Brand",
          "in": "path",
          "description": "Brand name to delete",
          "required": true
        }
      ],
      "responses": {
        "200": {
          "description": "car deleted"
        }
      }
    }
  }
}

