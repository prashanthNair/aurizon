export const swaggerDocument = {
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "Aurizon",
    "description": "Aurizon Application API",
    "license": {
      "name": "",
      "url": ""
    }
  },
  "host": "localhost:3000",
  "basePath": "/api/v1",
  "tags": [
    {
      "name": "Users",
      "description": "API for users in the system"
    }
  ],
  "schemes": [
    "http"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "paths": {
    "/auth": {
      "post": {
        "tags": [
          "login"
        ],
        "description": "Login user in to system",
        "parameters": [
          {
            "name": "user",
            "in": "body",
            "description": "Login user in to system",
            "schema": {
              "$ref": "#/definitions/User"
            }
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "LoggedIn sucessfully",
            "schema": {
              "$ref": "#/definitions/User"
            }
          }
        }
      }
    },
    "/auth/create": {
      "post": {
        "tags": [
          "SignUp"
        ],
        "description": "SignUp user in to system",
        "parameters": [
          {
            "name": "user",
            "in": "body",
            "description": "SignUp user in to system",
            "schema": {
              "$ref": "#/definitions/User"
            }
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "User Created Sucessfully",
            "schema": {
              "$ref": "#/definitions/User"
            }
          }
        }
      }
    },
    "/home": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "Get all facility",
        "responses": {
          "200": {
            "description": "All facilities",
            "schema": {
              "$ref": "#/definitions/Home"
            }
          }
        }
      }
    },
    "/home/{search}": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "Search facility",
        "parameters": [
          {
            "name": "search"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Search facilities",
            "schema": {
              "$ref": "#/definitions/Home"
            }
          }
        }
      }
    },

    "/Facilities": {
      "get": {
        "tags": [
          "Facilities"
        ],
        "summary": "Get Selected Facility",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Search facilities",
            "schema": {
              "$ref": "#/definitions/ParentalFacility"
            }
          }
        }
      }
    },
    "/Facilities/{search}": {
      "get": {
        "tags": [
          "Facilities"
        ],
        "summary": "Search sub Facility",
        "parameters": [
          {
            "name": "search"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Search facilities",
            "schema": {
              "$ref": "#/definitions/ParentalFacilityDetails"
            }
          }
        }
      }
    },
    "/facilities/{facilityName}/review/{id}": {
      "get": {
        "tags": [
          "Review"
        ],
        "summary": "Facility details",
        "parameters": [
          {
            "name": "facilityName"
          },
          {
            "name": "id"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "All reviews",
            "schema": {
              "$ref": "#/definitions/Review"
            }
          }
        }
      },
      "post": {
        "tags": [
          "Review"
        ],
        "description": "Post new Review",
        "parameters": [
          {
            "name": "review",
            "in": "body",
            "description": "Post new Review",
            "schema": {
              "$ref": "#/definitions/Review"
            }
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Review Created Sucessfully",
            "schema": {
              "$ref": "#/definitions/Review"
            }
          }
        }
      }
    }
  },
  "definitions": {
    "Home": {
      "required": [],
      "properties": {
        "_id": {
          "type": "string",
        },
        "name": {
          "type": "string",
        },
        "id": {
          "type": "string"
        },
        "created_date": {
          "type": "string"
        },
        "isValid": {
          "type": "string"
        }
      }
    },
    "User": {
      "required": [],
      "properties": {

        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "created_date": {
          "type": "string"
        },
        "isActive": {
          "type": "string"
        }
      }
    },
    "ParentalFacility": {
      "properties": {
        "id": {
          "type": "number",
        },
        "name": {
          "type": "string",
        },
        "created_date": {
          "type": "string"
        },
        "isEnable": {
          "type": "boolean"
        }
      }
    },
    "ParentalFacilityDetails": {
      "properties": {
        "id": {
          "type": "string",
        },
        "locationInfo": {
          "type": "string",
        },
        "statusMessage": {
          "type": "string"
        },
        "otherFacilities": {
          "type": "string"
        },
        "occupancyInfo": {
          "type": "string"
        },
        "isEnabled": {
          "type": "string"
        }
      }
    },
    "Review": {

      "properties": {
        "id": {
          "type": "string",
        },
        "name": {
          "type": "string",
        },
        "rating": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "category": {
          "type": "string"
        },
        "categoryId": {
          "type": "Number"
        },
        "created_date": {
          "type": "Date"
        },
        "isValid": {
          "type": "boolean"
        }
      }
    },
    "Users": {
      "type": "array",
      "$ref": "#/definitions/User"
    }
  }
}