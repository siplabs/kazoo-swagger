var jsonAPI =
{
    "swagger": "2.0",
    "info": {
        "title": "KAZOO API",
        "description": "Crossbar is a RESTful way of communicating with Kazoo. It is one of many Kazoo Apps  that make it easier to leverage the power of the Kazoo platform. Crossbar is a great example of an abstraction layer that exposes powerful APIs while hiding complexity. It lets you get Kazoo up and running quickly, allowing you to explore this powerful platform.",
        "version": "v2"
    },
    "host": "api.your.domain",
    "schemes": [
        "http",
        "https"
    ],
    "basePath": "/v2",
    "consumes": [
        "application/json",
        "text/xml",
        "text/csv",
        "application/octet-stream",
        "image/*"
    ],
    "produces": [
        "application/json",
        "text/xml",
        "text/csv",
        "application/octet-stream",
        "image/*"
    ],
    "parameters": {
        "account_id": {
            "name": "account_id",
            "type": "string",
            "description": "Account identifier",
            "in": "path",
            "required": true
        },
        "auth_token_header": {
            "name": "auth_token_header",
            "type": "string",
            "description": "Authorization token",
            "in": "header",
            "required": true
        },
        "auth_token_query": {
            "name": "auth_token_query",
            "type": "string",
            "description": "Authorization token",
            "in": "query",
            "required": false
        }
    },
    "paths": {
        "/accounts/{account_id}": {
            "get": {
                "summary": "Get account",
                "description": "Accounts represent tenants or customers on the system. Each account represents an individual dataset or sandbox that only one tenant can access. The data set is architecturally independent from other tenants.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Accounts"
                ],
                "responses": {
                    "200": {
                        "description": "An object of account",
                        "schema": {
                            "$ref": "#/definitions/account"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create account",
                "description": "Create account",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "account",
                        "description": "New account",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/account"
                        }
                    }
                ],
                "tags": [
                    "Accounts"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new account",
                        "schema": {
                            "$ref": "#/definitions/account"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update account",
                "description": "Update account",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "account",
                        "description": "Updated account",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/account"
                        }
                    }
                ],
                "tags": [
                    "Accounts"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated account",
                        "schema": {
                            "$ref": "#/definitions/account"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update account",
                "description": "Update account",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "account",
                        "description": "Updates of the account",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/account"
                        }
                    }
                ],
                "tags": [
                    "Accounts"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated account",
                        "schema": {
                            "$ref": "#/definitions/account"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete account",
                "description": "Delete account",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Accounts"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted account",
                        "schema": {
                            "$ref": "#/definitions/account"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/access_lists": {
            "get": {
                "summary": "Get access lists",
                "description": "SBC-level per-account access lists allow setting individual IP-based access filtering rules which significantly increases security for users working on-premise.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Access lists"
                ],
                "responses": {
                    "200": {
                        "description": "Access lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/access_list"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create access list",
                "description": "Create access list",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "access_list",
                        "description": "New access list",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/access_list"
                        }
                    }
                ],
                "tags": [
                    "Access lists"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new access list",
                        "schema": {
                            "$ref": "#/definitions/access_list"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/access_lists/{access_list_id}": {
            "get": {
                "summary": "Get access list",
                "description": "Get access list",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "access_list_id",
                        "type": "string",
                        "description": "Access list identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Access lists"
                ],
                "responses": {
                    "200": {
                        "description": "Access list",
                        "schema": {
                            "$ref": "#/definitions/access_list"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update access list",
                "description": "Update access list",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "access_list_id",
                        "type": "string",
                        "description": "Access list identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "access_list",
                        "description": "Updated access list",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/access_list"
                        }
                    }
                ],
                "tags": [
                    "Access lists"
                ],
                "responses": {
                    "200": {
                        "description": "Access list",
                        "schema": {
                            "$ref": "#/definitions/access_list"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update access list",
                "description": "Update access_list",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "access_list_id",
                        "type": "string",
                        "description": "Access list identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "access_list",
                        "description": "Updates of the access list",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/access_list"
                        }
                    }
                ],
                "tags": [
                    "Access lists"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated access list",
                        "schema": {
                            "$ref": "#/definitions/access_list"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete access list",
                "description": "Delete access list",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "access_list_id",
                        "type": "string",
                        "description": "Access list identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Access lists"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted access list",
                        "schema": {
                            "$ref": "#/definitions/access_list"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/apps_store": {
            "get": {
                "summary": "Get apps",
                "description": "Apps Store list apps allowed by your service plan.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Apps store"
                ],
                "responses": {
                    "200": {
                        "description": "Apps store",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/app"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create app",
                "description": "Create app",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "app",
                        "description": "New app",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/app"
                        }
                    }
                ],
                "tags": [
                    "Apps store"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new app",
                        "schema": {
                            "$ref": "#/definitions/app"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/apps_store/{app_id}": {
            "get": {
                "summary": "Get app",
                "description": "Get app",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "app_id",
                        "type": "string",
                        "description": "App identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Apps store"
                ],
                "responses": {
                    "200": {
                        "description": "App",
                        "schema": {
                            "$ref": "#/definitions/app"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update app",
                "description": "Update app",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "app_id",
                        "type": "string",
                        "description": "App identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "app",
                        "description": "Updated app",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/app"
                        }
                    }
                ],
                "tags": [
                    "Apps store"
                ],
                "responses": {
                    "200": {
                        "description": "App",
                        "schema": {
                            "$ref": "#/definitions/app"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update app",
                "description": "Update app",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "app_id",
                        "type": "string",
                        "description": "App identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "app",
                        "description": "Updates of the app",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/app"
                        }
                    }
                ],
                "tags": [
                    "Apps store"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated app",
                        "schema": {
                            "$ref": "#/definitions/app"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete app",
                "description": "Delete app",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "app_id",
                        "type": "string",
                        "description": "App identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Apps store"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted app",
                        "schema": {
                            "$ref": "#/definitions/app"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/apps_store/blacklist": {
            "get": {
                "summary": "Get apps blacklist",
                "description": "Get apps blacklist",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Apps store"
                ],
                "responses": {
                    "200": {
                        "description": "Apps blacklist",
                        "schema": {
                            "$ref": "#/definitions/blacklist"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update apps blacklist",
                "description": "Update apps blacklist",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "blacklist",
                        "description": "Updated apps blacklist",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/blacklist"
                        }
                    }
                ],
                "tags": [
                    "Apps store"
                ],
                "responses": {
                    "200": {
                        "description": "App",
                        "schema": {
                            "$ref": "#/definitions/blacklist"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/apps_store/{app_id}/icon": {
            "get": {
                "summary": "Get icon app",
                "description": "Get icon app",
                "produces": [
                    "image/*"
                ],
                "parameters": [
                    {
                        "name": "app_id",
                        "type": "string",
                        "description": "App identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Apps store"
                ],
                "responses": {
                    "200": {
                        "description": "App",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/apps_store/{app_id}/screenshot/{screenshot_id}": {
            "get": {
                "summary": "Get screenshot app",
                "description": "Get screenshot app",
                "produces": [
                    "image/*"
                ],
                "parameters": [
                    {
                        "name": "app_id",
                        "type": "string",
                        "description": "App identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "name": "screenshot_id",
                        "type": "string",
                        "description": "Screenshot identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Apps store"
                ],
                "responses": {
                    "200": {
                        "description": "Screenshot",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/blacklists": {
            "get": {
                "summary": "Get blacklists",
                "description": "A blacklist is a map of caller id numbers that can be then apply to the account to block these callers to call the system.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Blacklists"
                ],
                "responses": {
                    "200": {
                        "description": "Blacklists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/blacklist"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create blacklist",
                "description": "Create blacklist",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "blacklist",
                        "description": "New blacklist",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/blacklist"
                        }
                    }
                ],
                "tags": [
                    "Blacklists"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new blacklist",
                        "schema": {
                            "$ref": "#/definitions/blacklist"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/blacklists/{blacklist_id}": {
            "get": {
                "summary": "Get blacklist",
                "description": "Get blacklist",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "blacklist_id",
                        "type": "string",
                        "description": "Blacklist identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Blacklists"
                ],
                "responses": {
                    "200": {
                        "description": "Blacklist",
                        "schema": {
                            "$ref": "#/definitions/blacklist"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update blacklist",
                "description": "Update blacklist",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "blacklist_id",
                        "type": "string",
                        "description": "Blacklist identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "blacklist",
                        "description": "Updated blacklist",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/blacklist"
                        }
                    }
                ],
                "tags": [
                    "Blacklists"
                ],
                "responses": {
                    "200": {
                        "description": "Blacklist",
                        "schema": {
                            "$ref": "#/definitions/blacklist"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update blacklist",
                "description": "Update blacklist",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "blacklist_id",
                        "type": "string",
                        "description": "Blacklist identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "blacklist",
                        "description": "Updates of the blacklist",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/blacklist"
                        }
                    }
                ],
                "tags": [
                    "Blacklists"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated blacklist",
                        "schema": {
                            "$ref": "#/definitions/blacklist"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete blacklist",
                "description": "Delete blacklist",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "blacklist_id",
                        "type": "string",
                        "description": "Blacklist identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Blacklists"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted blacklist",
                        "schema": {
                            "$ref": "#/definitions/blacklist"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/callflows": {
            "get": {
                "summary": "Get callflows",
                "description": "Call flows describe steps to take in order to process a phone call. They are trees of information related to a phone call such as 'answer, play file, record file' etc. that are logically grouped together and ordered.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Callflows"
                ],
                "responses": {
                    "200": {
                        "description": "Callflows",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/callflow"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create callflow",
                "description": "Create callflow",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "callflow",
                        "description": "New callflow",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/callflow"
                        }
                    }
                ],
                "tags": [
                    "Callflows"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new callflow",
                        "schema": {
                            "$ref": "#/definitions/callflow"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/callflows/{callflow_id}": {
            "get": {
                "summary": "Get callflow",
                "description": "Get callflow",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "callflow_id",
                        "type": "string",
                        "description": "Callflow identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Callflows"
                ],
                "responses": {
                    "200": {
                        "description": "Callflow",
                        "schema": {
                            "$ref": "#/definitions/callflow"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update callflow",
                "description": "Update callflow",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "callflow_id",
                        "type": "string",
                        "description": "Callflow identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "callflow",
                        "description": "Updated callflow",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/callflow"
                        }
                    }
                ],
                "tags": [
                    "Callflows"
                ],
                "responses": {
                    "200": {
                        "description": "Callflow",
                        "schema": {
                            "$ref": "#/definitions/callflow"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update callflow",
                "description": "Update callflow",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "callflow_id",
                        "type": "string",
                        "description": "Callflow identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "callflow",
                        "description": "Updates of the callflow",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/callflow"
                        }
                    }
                ],
                "tags": [
                    "Callflows"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated callflow",
                        "schema": {
                            "$ref": "#/definitions/callflow"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete callflow",
                "description": "Delete callflow",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "callflow_id",
                        "type": "string",
                        "description": "Callflow identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Callflows"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted callflow",
                        "schema": {
                            "$ref": "#/definitions/callflow"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/cdrs": {
            "get": {
                "summary": "Get cdrs",
                "description": "The CDR is a list of attributes related to the processing and execution of a call leg. There are a number of properties that will always exist and a handful of fields that will conditionally exist, depending on the type of call made. There is also a sub-object, under the key 'Custo -Channel-Vars', that represent Kazoo-specific key/value pairs.",
                "produces": [
                    "application/json",
                    "application/octet-stream",
                    "text/csv"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "CDRs"
                ],
                "responses": {
                    "200": {
                        "description": "CDRs",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/cdr"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/cdrs/{cdr_id}": {
            "get": {
                "summary": "Get CDR",
                "description": "Get CDR",
                "produces": [
                    "application/json",
                    "application/octet-stream",
                    "text/csv"
                ],
                "parameters": [
                    {
                        "name": "cdr_id",
                        "type": "string",
                        "description": "CDR identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "CDRs"
                ],
                "responses": {
                    "200": {
                        "description": "CDR",
                        "schema": {
                            "$ref": "#/definitions/cdr"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/clicktocall": {
            "get": {
                "summary": "Get clicktocalls",
                "description": "Click-to-call allows you to create URLs that can be POSTed to with a phone number or SIP URI and create a phone call from the provided contact information to a destination you have pre-determined.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Click-to-call"
                ],
                "responses": {
                    "200": {
                        "description": "An object of clicktocall or clicktocalls lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/clicktocall"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create clicktocall",
                "description": "Create clicktocall",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "clicktocall",
                        "description": "New clicktocall",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/clicktocall"
                        }
                    }
                ],
                "tags": [
                    "Click-to-call"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new clicktocall",
                        "schema": {
                            "$ref": "#/definitions/clicktocall"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/clicktocall/{clicktocall_id}": {
            "get": {
                "summary": "Get clicktocall",
                "description": "Get clicktocall",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "clicktocall_id",
                        "type": "string",
                        "description": "Clicktocall identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Click-to-call"
                ],
                "responses": {
                    "200": {
                        "description": "An object of clicktocall",
                        "schema": {
                            "$ref": "#/definitions/clicktocall"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update clicktocall",
                "description": "Update clicktocall",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "clicktocall_id",
                        "type": "string",
                        "description": "Clicktocall identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "clicktocall",
                        "description": "Updated clicktocall",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/clicktocall"
                        }
                    }
                ],
                "tags": [
                    "Click-to-call"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated clicktocall",
                        "schema": {
                            "$ref": "#/definitions/clicktocall"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update clicktocall",
                "description": "Update clicktocall",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "clicktocall_id",
                        "type": "string",
                        "description": "Clicktocall identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "clicktocall",
                        "description": "Updates of the clicktocall",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/clicktocall"
                        }
                    }
                ],
                "tags": [
                    "Click-to-call"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated clicktocall",
                        "schema": {
                            "$ref": "#/definitions/clicktocall"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete clicktocall",
                "description": "Delete clicktocall",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "clicktocall_id",
                        "type": "string",
                        "description": "Clicktocall identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Click-to-call"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted clicktocall",
                        "schema": {
                            "$ref": "#/definitions/clicktocall"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/conferences": {
            "get": {
                "summary": "Get conferences lists",
                "description": "This API allow you to define a conference.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Conferences"
                ],
                "responses": {
                    "200": {
                        "description": "An object of conference or conferences lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/conference"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create conference",
                "description": "Create conference",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "conference",
                        "description": "New conference",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/conference"
                        }
                    }
                ],
                "tags": [
                    "Conferences"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new conference",
                        "schema": {
                            "$ref": "#/definitions/conference"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/conferences/{conference_id}": {
            "get": {
                "summary": "Get conference",
                "description": "Get conference",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "conference_id",
                        "type": "string",
                        "description": "Conference identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Conferences"
                ],
                "responses": {
                    "200": {
                        "description": "An object of conference",
                        "schema": {
                            "$ref": "#/definitions/conference"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update conference",
                "description": "Update conference",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "conference_id",
                        "type": "string",
                        "description": "Conference identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "conference",
                        "description": "Updated conference",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/conference"
                        }
                    }
                ],
                "tags": [
                    "Conferences"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated conference",
                        "schema": {
                            "$ref": "#/definitions/conference"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update conference",
                "description": "Update conference",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "conference_id",
                        "type": "string",
                        "description": "Conference identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "conference",
                        "description": "Updates of the conference",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/conference"
                        }
                    }
                ],
                "tags": [
                    "Conferences"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated conference",
                        "schema": {
                            "$ref": "#/definitions/conference"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete conference",
                "description": "Delete conference",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "conference_id",
                        "type": "string",
                        "description": "Conference identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Conferences"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted conference",
                        "schema": {
                            "$ref": "#/definitions/conference"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/devices": {
            "get": {
                "summary": "Get devices",
                "description": "This API allows you to define a SIP phone that you will attach to the system. This can be used with Hardware phones, Android Smartphones, iPhones, iPads and other devices which support SIP.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Devices"
                ],
                "responses": {
                    "200": {
                        "description": "An object of device",
                        "schema": {
                            "$ref": "#/definitions/device"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create device",
                "description": "Create device",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "device",
                        "description": "New device",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/device"
                        }
                    }
                ],
                "tags": [
                    "Devices"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new device",
                        "schema": {
                            "$ref": "#/definitions/device"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/devices/{device_id}": {
            "get": {
                "summary": "Get device",
                "description": "Get device",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "device_id",
                        "type": "string",
                        "description": "Device identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Devices"
                ],
                "responses": {
                    "200": {
                        "description": "An object of device",
                        "schema": {
                            "$ref": "#/definitions/device"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update device",
                "description": "Update device",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "device_id",
                        "type": "string",
                        "description": "Device identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "device",
                        "description": "Updated device",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/device"
                        }
                    }
                ],
                "tags": [
                    "Devices"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated device",
                        "schema": {
                            "$ref": "#/definitions/device"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update device",
                "description": "Update device",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "device_id",
                        "type": "string",
                        "description": "Device identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "device",
                        "description": "Updates of the device",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/device"
                        }
                    }
                ],
                "tags": [
                    "Devices"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated device",
                        "schema": {
                            "$ref": "#/definitions/device"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete device",
                "description": "Delete device",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "device_id",
                        "type": "string",
                        "description": "Device identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Devices"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted device",
                        "schema": {
                            "$ref": "#/definitions/device"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/devices/{device_id}/access_lists": {
            "get": {
                "summary": "Get access lists",
                "description": "SBC-level per-device access lists allow setting individual IP-based access filtering rules which significantly increases security for users working on-premise.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "device_id",
                        "type": "string",
                        "description": "Device identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Access lists"
                ],
                "responses": {
                    "200": {
                        "description": "Access lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/access_list"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create access list",
                "description": "Create access list",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "device_id",
                        "type": "string",
                        "description": "Device identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "access_list",
                        "description": "New access list",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/access_list"
                        }
                    }
                ],
                "tags": [
                    "Access lists"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new access list",
                        "schema": {
                            "$ref": "#/definitions/access_list"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/devices/{device_id}/access_lists/{access_list_id}": {
            "get": {
                "summary": "Get access list",
                "description": "Get access list",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "access_list_id",
                        "type": "string",
                        "description": "Access list identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "name": "device_id",
                        "type": "string",
                        "description": "Device identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Access lists"
                ],
                "responses": {
                    "200": {
                        "description": "Access list",
                        "schema": {
                            "$ref": "#/definitions/access_list"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update access list",
                "description": "Update access list",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "access_list_id",
                        "type": "string",
                        "description": "Access list identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "name": "device_id",
                        "type": "string",
                        "description": "Device identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "access_list",
                        "description": "Updated access list",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/access_list"
                        }
                    }
                ],
                "tags": [
                    "Access lists"
                ],
                "responses": {
                    "200": {
                        "description": "Access list",
                        "schema": {
                            "$ref": "#/definitions/access_list"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update access list",
                "description": "Update access_list",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "access_list_id",
                        "type": "string",
                        "description": "Access list identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "name": "device_id",
                        "type": "string",
                        "description": "Device identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "access_list",
                        "description": "Updates of the access list",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/access_list"
                        }
                    }
                ],
                "tags": [
                    "Access lists"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated access list",
                        "schema": {
                            "$ref": "#/definitions/access_list"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete access list",
                "description": "Delete access list",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "access_list_id",
                        "type": "string",
                        "description": "Access list identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "name": "device_id",
                        "type": "string",
                        "description": "Device identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Access lists"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted access list",
                        "schema": {
                            "$ref": "#/definitions/access_list"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/directories": {
            "get": {
                "summary": "Get directories lists",
                "description": "Dial-by-name Directory. This allows a caller to search for people by having the caller enter the first or last name of the party they'd like to reach.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Directories"
                ],
                "responses": {
                    "200": {
                        "description": "An object of directory or directories lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/directory"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create directory",
                "description": "Create directory",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "directory",
                        "description": "New directory",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/directory"
                        }
                    }
                ],
                "tags": [
                    "Directories"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new directory",
                        "schema": {
                            "$ref": "#/definitions/directory"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/directories/{directory_id}": {
            "get": {
                "summary": "Get directory",
                "description": "Get directory",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "directory_id",
                        "type": "string",
                        "description": "Directory identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Directories"
                ],
                "responses": {
                    "200": {
                        "description": "An object of directory",
                        "schema": {
                            "$ref": "#/definitions/directory"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update directory",
                "description": "Update directory",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "directory_id",
                        "type": "string",
                        "description": "Directory identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "directory",
                        "description": "Updated directory",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/directory"
                        }
                    }
                ],
                "tags": [
                    "Directories"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated directory",
                        "schema": {
                            "$ref": "#/definitions/directory"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update directory",
                "description": "Update directory",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "directory_id",
                        "type": "string",
                        "description": "Directory identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "directory",
                        "description": "Updates of the directory",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/directory"
                        }
                    }
                ],
                "tags": [
                    "Directories"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated directory",
                        "schema": {
                            "$ref": "#/definitions/directory"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete directory",
                "description": "Delete directory",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "directory_id",
                        "type": "string",
                        "description": "Directory identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Directories"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted directory",
                        "schema": {
                            "$ref": "#/definitions/directory"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/faxes": {
            "get": {
                "summary": "Get faxes lists",
                "description": "This API allows you send faxes individually, or in bulk.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Faxes"
                ],
                "responses": {
                    "200": {
                        "description": "An object of fax or faxes lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/fax"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create fax",
                "description": "Create fax",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "fax",
                        "description": "New fax",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/fax"
                        }
                    }
                ],
                "tags": [
                    "Faxes"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new fax",
                        "schema": {
                            "$ref": "#/definitions/fax"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/faxes/{fax_id}": {
            "get": {
                "summary": "Get fax",
                "description": "Get fax",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "fax_id",
                        "type": "string",
                        "description": "Fax identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Faxes"
                ],
                "responses": {
                    "200": {
                        "description": "An object of fax",
                        "schema": {
                            "$ref": "#/definitions/fax"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update fax",
                "description": "Update fax",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "fax_id",
                        "type": "string",
                        "description": "Fax identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "fax",
                        "description": "Updated fax",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/fax"
                        }
                    }
                ],
                "tags": [
                    "Faxes"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated fax",
                        "schema": {
                            "$ref": "#/definitions/fax"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update fax",
                "description": "Update fax",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "fax_id",
                        "type": "string",
                        "description": "Fax identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "fax",
                        "description": "Updates of the fax",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/fax"
                        }
                    }
                ],
                "tags": [
                    "Faxes"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated fax",
                        "schema": {
                            "$ref": "#/definitions/fax"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete fax",
                "description": "Delete fax",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "fax_id",
                        "type": "string",
                        "description": "Fax identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Faxes"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted fax",
                        "schema": {
                            "$ref": "#/definitions/fax"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/faxboxes": {
            "get": {
                "summary": "Get faxboxes lists",
                "description": "This API allows you send faxes individually, or in bulk.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Faxboxes"
                ],
                "responses": {
                    "200": {
                        "description": "An object of faxbox or faxboxes lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/faxbox"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create faxbox",
                "description": "Create faxbox",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "faxbox",
                        "description": "New faxbox",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/faxbox"
                        }
                    }
                ],
                "tags": [
                    "Faxboxes"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new faxbox",
                        "schema": {
                            "$ref": "#/definitions/faxbox"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/faxboxes/{faxbox_id}": {
            "get": {
                "summary": "Get faxbox",
                "description": "Get faxbox",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "faxbox_id",
                        "type": "string",
                        "description": "Faxbox identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Faxboxes"
                ],
                "responses": {
                    "200": {
                        "description": "An object of faxbox",
                        "schema": {
                            "$ref": "#/definitions/faxbox"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update faxbox",
                "description": "Update faxbox",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "faxbox_id",
                        "type": "string",
                        "description": "Faxbox identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "faxbox",
                        "description": "Updated faxbox",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/faxbox"
                        }
                    }
                ],
                "tags": [
                    "Faxboxes"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated faxbox",
                        "schema": {
                            "$ref": "#/definitions/faxbox"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update faxbox",
                "description": "Update faxbox",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "faxbox_id",
                        "type": "string",
                        "description": "Faxbox identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "faxbox",
                        "description": "Updates of the faxbox",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/faxbox"
                        }
                    }
                ],
                "tags": [
                    "Faxboxes"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated faxbox",
                        "schema": {
                            "$ref": "#/definitions/faxbox"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete faxbox",
                "description": "Delete faxbox",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "faxbox_id",
                        "type": "string",
                        "description": "Faxbox identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Faxboxes"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted faxbox",
                        "schema": {
                            "$ref": "#/definitions/faxbox"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/lists": {
            "get": {
                "summary": "Get lists",
                "description": "A list is a map of caller id numbers that can be then apply to the account to block these callers to call the system.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Lists"
                ],
                "responses": {
                    "200": {
                        "description": "Lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/list"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create list",
                "description": "Create list",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "list",
                        "description": "New list",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/list"
                        }
                    }
                ],
                "tags": [
                    "Lists"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new list",
                        "schema": {
                            "$ref": "#/definitions/list"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/lists/{list_id}": {
            "get": {
                "summary": "Get list",
                "description": "Get list",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "list_id",
                        "type": "string",
                        "description": "List identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Lists"
                ],
                "responses": {
                    "200": {
                        "description": "List",
                        "schema": {
                            "$ref": "#/definitions/list"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update list",
                "description": "Update list",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "list_id",
                        "type": "string",
                        "description": "List identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "list",
                        "description": "Updated list",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/list"
                        }
                    }
                ],
                "tags": [
                    "Lists"
                ],
                "responses": {
                    "200": {
                        "description": "List",
                        "schema": {
                            "$ref": "#/definitions/list"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update list",
                "description": "Update list",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "list_id",
                        "type": "string",
                        "description": "List identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "list",
                        "description": "Updates of the list",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/list"
                        }
                    }
                ],
                "tags": [
                    "Lists"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated list",
                        "schema": {
                            "$ref": "#/definitions/list"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete list",
                "description": "Delete list",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "list_id",
                        "type": "string",
                        "description": "List identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Lists"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted list",
                        "schema": {
                            "$ref": "#/definitions/list"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/media": {
            "get": {
                "summary": "Get media lists",
                "description": "Media management encompasses the collection of media (from a stream or file), the conversion of media to a final format, and the storage of media. It also handles retrieval of media and/or sets of media.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Media"
                ],
                "responses": {
                    "200": {
                        "description": "An object of media or media lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/media"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create media",
                "description": "Create media",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "media",
                        "description": "New media",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/media"
                        }
                    }
                ],
                "tags": [
                    "Media"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new media",
                        "schema": {
                            "$ref": "#/definitions/media"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/media/{media_id}": {
            "get": {
                "summary": "Get media",
                "description": "Get media",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "media_id",
                        "type": "string",
                        "description": "Media identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Media"
                ],
                "responses": {
                    "200": {
                        "description": "An object of media",
                        "schema": {
                            "$ref": "#/definitions/media"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update media",
                "description": "Update media",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "media_id",
                        "type": "string",
                        "description": "Media identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "media",
                        "description": "Updated media",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/media"
                        }
                    }
                ],
                "tags": [
                    "Media"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated media",
                        "schema": {
                            "$ref": "#/definitions/media"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update media",
                "description": "Update media",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "media_id",
                        "type": "string",
                        "description": "Media identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "media",
                        "description": "Updates of the media",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/media"
                        }
                    }
                ],
                "tags": [
                    "Media"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated media",
                        "schema": {
                            "$ref": "#/definitions/media"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete media",
                "description": "Delete media",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "media_id",
                        "type": "string",
                        "description": "Media identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Media"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted media",
                        "schema": {
                            "$ref": "#/definitions/media"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/menus": {
            "get": {
                "summary": "Get menu lists",
                "description": "Menus, IVRs, what ever you call them, allow you to create branches in the callflow based on the caller's input.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Menus"
                ],
                "responses": {
                    "200": {
                        "description": "An object of menu or menus lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/menu"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create menu",
                "description": "Create menu",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "menu",
                        "description": "New menu",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/menu"
                        }
                    }
                ],
                "tags": [
                    "Menus"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new menu",
                        "schema": {
                            "$ref": "#/definitions/menu"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/menus/{menu_id}": {
            "get": {
                "summary": "Get menu",
                "description": "Get menu",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "menu_id",
                        "type": "string",
                        "description": "Menu identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Menus"
                ],
                "responses": {
                    "200": {
                        "description": "An object of menu",
                        "schema": {
                            "$ref": "#/definitions/menu"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update menu",
                "description": "Update menu",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "menu_id",
                        "type": "string",
                        "description": "Menu identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "menu",
                        "description": "Updated menu",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/menu"
                        }
                    }
                ],
                "tags": [
                    "Menus"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated menu",
                        "schema": {
                            "$ref": "#/definitions/menu"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update menu",
                "description": "Update menu",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "menu_id",
                        "type": "string",
                        "description": "Menu identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "menu",
                        "description": "Updates of the menu",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/menu"
                        }
                    }
                ],
                "tags": [
                    "Menus"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated menu",
                        "schema": {
                            "$ref": "#/definitions/menu"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete menu",
                "description": "Delete menu",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "menu_id",
                        "type": "string",
                        "description": "Menu identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Menus"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted menu",
                        "schema": {
                            "$ref": "#/definitions/menu"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/notifications": {
            "get": {
                "summary": "Get notifications",
                "description": "Allow managing templates for notification emails.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Notifications"
                ],
                "responses": {
                    "200": {
                        "description": "An object of notification or notifications lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/notification"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create notification",
                "description": "Create notification",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "notification",
                        "description": "New notification",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/notification"
                        }
                    }
                ],
                "tags": [
                    "Notifications"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new notification",
                        "schema": {
                            "$ref": "#/definitions/notification"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/notifications/{notification_id}": {
            "get": {
                "summary": "Get notification",
                "description": "Get notification",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "notification_id",
                        "type": "string",
                        "description": "Notification identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Notifications"
                ],
                "responses": {
                    "200": {
                        "description": "An object of notification",
                        "schema": {
                            "$ref": "#/definitions/notification"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update notification",
                "description": "Update notification",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "notification_id",
                        "type": "string",
                        "description": "Notification identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "notification",
                        "description": "Updated notification",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/notification"
                        }
                    }
                ],
                "tags": [
                    "Notifications"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated notification",
                        "schema": {
                            "$ref": "#/definitions/notification"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update notification",
                "description": "Update notification",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "notification_id",
                        "type": "string",
                        "description": "Notification identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "notification",
                        "description": "Updates of the notification",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/notification"
                        }
                    }
                ],
                "tags": [
                    "Notifications"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated notification",
                        "schema": {
                            "$ref": "#/definitions/notification"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete notification",
                "description": "Delete notification",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "notification_id",
                        "type": "string",
                        "description": "Notification identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Notifications"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted notification",
                        "schema": {
                            "$ref": "#/definitions/notification"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/phone_numbers": {
            "get": {
                "summary": "Get phone number lists",
                "description": "Learn how to use the 2600hz mobile API set to activate and manage numbers.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Phone numbers"
                ],
                "responses": {
                    "200": {
                        "description": "An object of phone number or phone numbers lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/phone_number"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create phone number",
                "description": "Create phone number",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "phone_number",
                        "description": "New phone number",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/phone_number"
                        }
                    }
                ],
                "tags": [
                    "Phone numbers"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new phone number",
                        "schema": {
                            "$ref": "#/definitions/phone_number"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/phone_numbers/{phone_number_id}": {
            "get": {
                "summary": "Get phone number",
                "description": "Get phone number",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "phone_number_id",
                        "type": "string",
                        "description": "Phone number identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Phone numbers"
                ],
                "responses": {
                    "200": {
                        "description": "An object of phone number",
                        "schema": {
                            "$ref": "#/definitions/phone_number"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update phone number",
                "description": "Update phone number",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "phone_number_id",
                        "type": "string",
                        "description": "Phone number identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "phone_number",
                        "description": "Updated phone number",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/phone_number"
                        }
                    }
                ],
                "tags": [
                    "Phone numbers"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated phone number",
                        "schema": {
                            "$ref": "#/definitions/phone_number"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update phone number",
                "description": "Update phone number",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "phone_number_id",
                        "type": "string",
                        "description": "Phone number identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "phone_number",
                        "description": "Updates of the phone number",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/phone_number"
                        }
                    }
                ],
                "tags": [
                    "Phone numbers"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated phone number",
                        "schema": {
                            "$ref": "#/definitions/phone_number"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete phone number",
                "description": "Delete phone number",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "phone_number_id",
                        "type": "string",
                        "description": "Phone number identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Phone numbers"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted phone number",
                        "schema": {
                            "$ref": "#/definitions/phone_number"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/queues": {
            "get": {
                "summary": "Get queues",
                "description": "When you have more callers than agents to handle those calls, you can create a call queue to put the callers on hold while agents process callers in the order they arrived in the call queue.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Queues"
                ],
                "responses": {
                    "200": {
                        "description": "Queues",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/queue"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create queue",
                "description": "Create queue",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "queue",
                        "description": "New queue",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/queue"
                        }
                    }
                ],
                "tags": [
                    "Queues"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new queue",
                        "schema": {
                            "$ref": "#/definitions/queue"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/queues/{queue_id}": {
            "get": {
                "summary": "Get queue",
                "description": "Get queue",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "queue_id",
                        "type": "string",
                        "description": "Queue identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Queues"
                ],
                "responses": {
                    "200": {
                        "description": "Queue",
                        "schema": {
                            "$ref": "#/definitions/queue"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update queue",
                "description": "Update queue",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "queue_id",
                        "type": "string",
                        "description": "Queue identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "queue",
                        "description": "Updated queue",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/queue"
                        }
                    }
                ],
                "tags": [
                    "Queues"
                ],
                "responses": {
                    "200": {
                        "description": "Queue",
                        "schema": {
                            "$ref": "#/definitions/queue"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update queue",
                "description": "Update queue",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "queue_id",
                        "type": "string",
                        "description": "Queue identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "queue",
                        "description": "Updates of the queue",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/queue"
                        }
                    }
                ],
                "tags": [
                    "Queues"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated queue",
                        "schema": {
                            "$ref": "#/definitions/queue"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete queue",
                "description": "Delete queue",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "queue_id",
                        "type": "string",
                        "description": "Queue identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Queues"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted queue",
                        "schema": {
                            "$ref": "#/definitions/queue"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/rates": {
            "get": {
                "summary": "Get rates",
                "description": "How much will calls to various prefixes cost, per-minute, if applicable? Manage the rate deck via this API!",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Rates"
                ],
                "responses": {
                    "200": {
                        "description": "Rates",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/rate"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create rate",
                "description": "Create rate",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "rate",
                        "description": "New rate",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/rate"
                        }
                    }
                ],
                "tags": [
                    "Rates"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new rate",
                        "schema": {
                            "$ref": "#/definitions/rate"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/rates/{rate_id}": {
            "get": {
                "summary": "Get rate",
                "description": "Get rate",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "rate_id",
                        "type": "string",
                        "description": "Rate identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Rates"
                ],
                "responses": {
                    "200": {
                        "description": "Rate",
                        "schema": {
                            "$ref": "#/definitions/rate"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update rate",
                "description": "Update rate",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "rate_id",
                        "type": "string",
                        "description": "Rate identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "rate",
                        "description": "Updated rate",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/rate"
                        }
                    }
                ],
                "tags": [
                    "Rates"
                ],
                "responses": {
                    "200": {
                        "description": "Rate",
                        "schema": {
                            "$ref": "#/definitions/rate"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update rate",
                "description": "Update rate",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "rate_id",
                        "type": "string",
                        "description": "Rate identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "rate",
                        "description": "Updates of the rate",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/rate"
                        }
                    }
                ],
                "tags": [
                    "Rates"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated rate",
                        "schema": {
                            "$ref": "#/definitions/rate"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete rate",
                "description": "Delete rate",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "rate_id",
                        "type": "string",
                        "description": "Rate identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Rates"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted rate",
                        "schema": {
                            "$ref": "#/definitions/rate"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/resources": {
            "get": {
                "summary": "Get resources",
                "description": "Resources represent external assets such as TDM hardware, SIP trunks, transcoders, and other remote termination/originating call services or equipment.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Resources"
                ],
                "responses": {
                    "200": {
                        "description": "An object of resource or resources lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/resource"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create resource",
                "description": "Create resource",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "resource",
                        "description": "New resource",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/resource"
                        }
                    }
                ],
                "tags": [
                    "Resources"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new resource",
                        "schema": {
                            "$ref": "#/definitions/resource"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/resources/{resource_id}": {
            "get": {
                "summary": "Get resource",
                "description": "Get resource",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "resource_id",
                        "type": "string",
                        "description": "Resource identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Resources"
                ],
                "responses": {
                    "200": {
                        "description": "An object of resource",
                        "schema": {
                            "$ref": "#/definitions/resource"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update resource",
                "description": "Update resource",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "resource_id",
                        "type": "string",
                        "description": "Resource identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "resource",
                        "description": "Updated resource",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/resource"
                        }
                    }
                ],
                "tags": [
                    "Resources"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated resource",
                        "schema": {
                            "$ref": "#/definitions/resource"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update resource",
                "description": "Update resource",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "resource_id",
                        "type": "string",
                        "description": "Resource identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "resource",
                        "description": "Updates of the resource",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/resource"
                        }
                    }
                ],
                "tags": [
                    "Resources"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated resource",
                        "schema": {
                            "$ref": "#/definitions/resource"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete resource",
                "description": "Delete resource",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "resource_id",
                        "type": "string",
                        "description": "Resource identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Resources"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted resource",
                        "schema": {
                            "$ref": "#/definitions/resource"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/service_plans": {
            "get": {
                "summary": "Get service plans",
                "description": "This api allow you to service_plan the service plans that you can subscribe to.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Service plans"
                ],
                "responses": {
                    "200": {
                        "description": "Service plans",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/service_plan"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create service plan",
                "description": "Create service plan",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "service_plan",
                        "description": "New service_plan",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/service_plan"
                        }
                    }
                ],
                "tags": [
                    "Service plans"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new service_plan",
                        "schema": {
                            "$ref": "#/definitions/service_plan"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/service_plans/{service_plan_id}": {
            "get": {
                "summary": "Get service plan",
                "description": "Get service plan",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "service_plan_id",
                        "type": "string",
                        "description": "Service plan identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Service plans"
                ],
                "responses": {
                    "200": {
                        "description": "Service plan",
                        "schema": {
                            "$ref": "#/definitions/service_plan"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update service plan",
                "description": "Update service plan",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "service_plan_id",
                        "type": "string",
                        "description": "Service plan identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "service_plan",
                        "description": "Updated service plan",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/service_plan"
                        }
                    }
                ],
                "tags": [
                    "Service plans"
                ],
                "responses": {
                    "200": {
                        "description": "Service plan",
                        "schema": {
                            "$ref": "#/definitions/service_plan"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update service plan",
                "description": "Update service plan",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "service_plan_id",
                        "type": "string",
                        "description": "Service plan identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "service_plan",
                        "description": "Updates of the service plan",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/service_plan"
                        }
                    }
                ],
                "tags": [
                    "Service plans"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated service plan",
                        "schema": {
                            "$ref": "#/definitions/service_plan"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete service plan",
                "description": "Delete service plan",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "service_plan_id",
                        "type": "string",
                        "description": "Service plan identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Service plans"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted service plan",
                        "schema": {
                            "$ref": "#/definitions/service_plan"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/temporal_rules": {
            "get": {
                "summary": "Get temporal rules lists",
                "description": "Timed Routes, also known as temporal routes, allow you to control the route a call takes based on time-of-day parameters.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Temporal rules"
                ],
                "responses": {
                    "200": {
                        "description": "An object of temporal rule or temporal rules lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/temporal_rule"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create temporal rule",
                "description": "Create temporal rule",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "temporal_rule",
                        "description": "New temporal rule",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/temporal_rule"
                        }
                    }
                ],
                "tags": [
                    "Temporal rules"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new temporal_rule",
                        "schema": {
                            "$ref": "#/definitions/temporal_rule"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/temporal_rules/{temporal_rule_id}": {
            "get": {
                "summary": "Get temporal rule",
                "description": "Get temporal rule",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "temporal_rule_id",
                        "type": "string",
                        "description": "Temporal rule identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Temporal rules"
                ],
                "responses": {
                    "200": {
                        "description": "An object of temporal rule",
                        "schema": {
                            "$ref": "#/definitions/temporal_rule"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update temporal rule",
                "description": "Update temporal rule",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "temporal_rule_id",
                        "type": "string",
                        "description": "Temporal rule identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "temporal_rule",
                        "description": "Updated temporal rule",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/temporal_rule"
                        }
                    }
                ],
                "tags": [
                    "Temporal rules"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated temporal rule",
                        "schema": {
                            "$ref": "#/definitions/temporal_rule"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update temporal rule",
                "description": "Update temporal rule",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "temporal_rule_id",
                        "type": "string",
                        "description": "Temporal rule identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "temporal_rule",
                        "description": "Updates of the temporal rule",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/temporal_rule"
                        }
                    }
                ],
                "tags": [
                    "Temporal rules"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated temporal rule",
                        "schema": {
                            "$ref": "#/definitions/temporal_rule"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete temporal rule",
                "description": "Delete temporal rule",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "temporal_rule_id",
                        "type": "string",
                        "description": "Temporal rule identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Temporal rules"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted temporal rule",
                        "schema": {
                            "$ref": "#/definitions/temporal_rule"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/temporal_rules_sets": {
            "get": {
                "summary": "Get temporal rules sets lists",
                "description": "A temporal rule set is a collection of temporal rules that can be used in a callflow to match more that one rule. And can also be re-used.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Temporal rules sets"
                ],
                "responses": {
                    "200": {
                        "description": "An object of temporal rules set or temporal rules sets lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/temporal_rules_set"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create temporal rules set",
                "description": "Create temporal rules set",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "temporal_rules_set",
                        "description": "New temporal rules set",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/temporal_rules_set"
                        }
                    }
                ],
                "tags": [
                    "Temporal rules sets"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new temporal_rules set",
                        "schema": {
                            "$ref": "#/definitions/temporal_rules_set"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/temporal_rules_sets/{temporal_rules_set_id}": {
            "get": {
                "summary": "Get temporal rules set",
                "description": "Get temporal rules set",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "temporal_rules_set_id",
                        "type": "string",
                        "description": "Temporal rules set identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Temporal rules sets"
                ],
                "responses": {
                    "200": {
                        "description": "An object of temporal rules set",
                        "schema": {
                            "$ref": "#/definitions/temporal_rules_set"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update temporal rules set",
                "description": "Update temporal rules set",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "temporal_rules_set_id",
                        "type": "string",
                        "description": "Temporal rules set identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "temporal_rules_set",
                        "description": "Updated temporal rules set",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/temporal_rules_set"
                        }
                    }
                ],
                "tags": [
                    "Temporal rules sets"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated temporal rules set",
                        "schema": {
                            "$ref": "#/definitions/temporal_rules_set"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update temporal rules set",
                "description": "Update temporal rules set",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "temporal_rules_set_id",
                        "type": "string",
                        "description": "Temporal rules set identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "temporal_rules_set",
                        "description": "Updates of the temporal rules set",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/temporal_rules_set"
                        }
                    }
                ],
                "tags": [
                    "Temporal rules sets"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated temporal rules set",
                        "schema": {
                            "$ref": "#/definitions/temporal_rules_set"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete temporal rules set",
                "description": "Delete temporal rules set",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "temporal_rules_set_id",
                        "type": "string",
                        "description": "Temporal rules set identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Temporal rules sets"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted temporal rules set",
                        "schema": {
                            "$ref": "#/definitions/temporal_rules_set"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/token_restrictions": {
            "get": {
                "summary": "Get token_restrictions",
                "description": "Token restrictions - set of rules saved in auth token document. These rules grant access to API URIs. If the token document doesn't have any rules then this module won't apply any restrictions to request.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Token restrictions"
                ],
                "responses": {
                    "200": {
                        "description": "Token restrictions",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/token_restriction"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create token restriction",
                "description": "Create token restriction",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "token_restriction",
                        "description": "New token restriction",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/token_restriction"
                        }
                    }
                ],
                "tags": [
                    "Token restrictions"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new token restriction",
                        "schema": {
                            "$ref": "#/definitions/token_restriction"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/token_restrictions/{token_restriction_id}": {
            "get": {
                "summary": "Get token restriction",
                "description": "Get token restriction",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "token_restriction_id",
                        "type": "string",
                        "description": "Token restriction identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Token restrictions"
                ],
                "responses": {
                    "200": {
                        "description": "Token restriction",
                        "schema": {
                            "$ref": "#/definitions/token_restriction"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update token restriction",
                "description": "Update token restriction",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "token_restriction_id",
                        "type": "string",
                        "description": "Token restriction identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "token_restriction",
                        "description": "Updated token restriction",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/token_restriction"
                        }
                    }
                ],
                "tags": [
                    "Token restrictions"
                ],
                "responses": {
                    "200": {
                        "description": "Token restriction",
                        "schema": {
                            "$ref": "#/definitions/token_restriction"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update token restriction",
                "description": "Update token restriction",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "token_restriction_id",
                        "type": "string",
                        "description": "Token restriction identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "token_restriction",
                        "description": "Updates of the token restriction",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/token_restriction"
                        }
                    }
                ],
                "tags": [
                    "Token restrictions"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated token restriction",
                        "schema": {
                            "$ref": "#/definitions/token_restriction"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete token restriction",
                "description": "Delete token restriction",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "token_restriction_id",
                        "type": "string",
                        "description": "Token restriction identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Token restrictions"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted token restriction",
                        "schema": {
                            "$ref": "#/definitions/token_restriction"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/users": {
            "get": {
                "summary": "Get users lists",
                "description": "A user is an organizational object that allows for tracking authentication, permissions and other settings. It can be used to store generic metadata which other modules can look for in the event they need to fail-back to global user settings.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Users"
                ],
                "responses": {
                    "200": {
                        "description": "An object of user or users lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/user"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create user",
                "description": "Create user",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "user",
                        "description": "New user",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/user"
                        }
                    }
                ],
                "tags": [
                    "Users"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new user",
                        "schema": {
                            "$ref": "#/definitions/user"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/users/{user_id}": {
            "get": {
                "summary": "Get user",
                "description": "A user is an organizational object that allows for tracking authentication, permissions and other settings. It can be used to store generic metadata which other modules can look for in the event they need to fail-back to global user settings.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "user_id",
                        "type": "string",
                        "description": "User identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Users"
                ],
                "responses": {
                    "200": {
                        "description": "An object of user",
                        "schema": {
                            "$ref": "#/definitions/user"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update user",
                "description": "Update user",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "user_id",
                        "type": "string",
                        "description": "User identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "user",
                        "description": "Updated user",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/user"
                        }
                    }
                ],
                "tags": [
                    "Users"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated user",
                        "schema": {
                            "$ref": "#/definitions/user"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update user",
                "description": "Update user",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "user_id",
                        "type": "string",
                        "description": "User identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "user",
                        "description": "Updates of the user",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/user"
                        }
                    }
                ],
                "tags": [
                    "Users"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated user",
                        "schema": {
                            "$ref": "#/definitions/user"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete user",
                "description": "Delete user",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "user_id",
                        "type": "string",
                        "description": "User identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Users"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted user",
                        "schema": {
                            "$ref": "#/definitions/user"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/vmboxes": {
            "get": {
                "summary": "Get vmboxes lists",
                "description": "Learn how to use the 2600hz mobile API set to manage voice-mail boxes.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "VMBoxes"
                ],
                "responses": {
                    "200": {
                        "description": "An object of vmboxe or vmboxes lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/vmboxe"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create vmboxe",
                "description": "Create vmboxe",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "vmboxe",
                        "description": "New vmboxe",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/vmboxe"
                        }
                    }
                ],
                "tags": [
                    "VMBoxes"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new vmboxe",
                        "schema": {
                            "$ref": "#/definitions/vmboxe"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/vmboxes/{vmboxe_id}": {
            "get": {
                "summary": "Get vmboxe",
                "description": "Get object a vmboxe",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "vmboxe_id",
                        "type": "string",
                        "description": "VMBoxe identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "VMBoxes"
                ],
                "responses": {
                    "200": {
                        "description": "An object of vmboxe",
                        "schema": {
                            "$ref": "#/definitions/vmboxe"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update vmboxe",
                "description": "Update vmboxe",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "vmboxe_id",
                        "type": "string",
                        "description": "VMBoxe identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "vmboxe",
                        "description": "Updated vmboxe",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/vmboxe"
                        }
                    }
                ],
                "tags": [
                    "VMBoxes"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated vmboxe",
                        "schema": {
                            "$ref": "#/definitions/vmboxe"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update vmboxe",
                "description": "Update vmboxe",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "vmboxe_id",
                        "type": "string",
                        "description": "VMBoxe identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "vmboxe",
                        "description": "Updates of the vmboxe",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/vmboxe"
                        }
                    }
                ],
                "tags": [
                    "VMBoxes"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated vmboxe",
                        "schema": {
                            "$ref": "#/definitions/vmboxe"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete vmboxe",
                "description": "Delete vmboxe",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "vmboxe_id",
                        "type": "string",
                        "description": "VMBoxe identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "VMBoxes"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted vmboxe",
                        "schema": {
                            "$ref": "#/definitions/vmboxe"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/accounts/{account_id}/whitelabel/domains": {
            "get": {
                "summary": "Get whitelabel",
                "description": "Get whitelabel",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "domain",
                        "type": "string",
                        "description": "Domain",
                        "in": "query",
                        "required": false
                    },
                    {
                        "name": "domain_object",
                        "description": "Object domain",
                        "in": "body",
                        "required": false,
                        "schema": {
                            "$ref": "#/definitions/domain"
                        }
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Whitelabel"
                ],
                "responses": {
                    "200": {
                        "description": "An object of whitelabel",
                        "schema": {
                            "$ref": "#/definitions/whitelabel"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update whitelabel",
                "description": "Update whitelabel",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "domain",
                        "type": "string",
                        "description": "Domain",
                        "in": "query",
                        "required": false
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "whitelabel",
                        "description": "Updated whitelabel",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/whitelabel"
                        }
                    }
                ],
                "tags": [
                    "Whitelabel"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated whitelabel",
                        "schema": {
                            "$ref": "#/definitions/whitelabel"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update whitelabel",
                "description": "Update whitelabel",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "domain",
                        "type": "string",
                        "description": "Domain",
                        "in": "query",
                        "required": false
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "whitelabel",
                        "description": "Updates of the whitelabel",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/whitelabel"
                        }
                    }
                ],
                "tags": [
                    "Whitelabel"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated whitelabel",
                        "schema": {
                            "$ref": "#/definitions/whitelabel"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete whitelabel",
                "description": "Delete whitelabel",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "domain",
                        "type": "string",
                        "description": "Domain",
                        "in": "query",
                        "required": false
                    },
                    {
                        "name": "domain_object",
                        "description": "Object domain",
                        "in": "body",
                        "required": false,
                        "schema": {
                            "$ref": "#/definitions/domain"
                        }
                    },
                    {
                        "$ref": "#/parameters/account_id"
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Whitelabel"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted whitelabel",
                        "schema": {
                            "$ref": "#/definitions/whitelabel"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/notifications": {
            "get": {
                "summary": "Get notifications",
                "description": "Allow managing templates for notification emails.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Notifications"
                ],
                "responses": {
                    "200": {
                        "description": "An object of notification or notifications lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/notification"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create notification",
                "description": "Create notification",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "notification",
                        "description": "New notification",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/notification"
                        }
                    }
                ],
                "tags": [
                    "Notifications"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new notification",
                        "schema": {
                            "$ref": "#/definitions/notification"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/notifications/{notification_id}": {
            "get": {
                "summary": "Get notification",
                "description": "Get notification",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "notification_id",
                        "type": "string",
                        "description": "Notification identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Notifications"
                ],
                "responses": {
                    "200": {
                        "description": "An object of notification",
                        "schema": {
                            "$ref": "#/definitions/notification"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update notification",
                "description": "Update notification",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "notification_id",
                        "type": "string",
                        "description": "Notification identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "notification",
                        "description": "Updated notification",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/notification"
                        }
                    }
                ],
                "tags": [
                    "Notifications"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated notification",
                        "schema": {
                            "$ref": "#/definitions/notification"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update notification",
                "description": "Update notification",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "notification_id",
                        "type": "string",
                        "description": "Notification identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "notification",
                        "description": "Updates of the notification",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/notification"
                        }
                    }
                ],
                "tags": [
                    "Notifications"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated notification",
                        "schema": {
                            "$ref": "#/definitions/notification"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete notification",
                "description": "Delete notification",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "notification_id",
                        "type": "string",
                        "description": "Notification identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Notifications"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted notification",
                        "schema": {
                            "$ref": "#/definitions/notification"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/resources": {
            "get": {
                "summary": "Get resources",
                "description": "Resources represent external assets such as TDM hardware, SIP trunks, transcoders, and other remote termination/originating call services or equipment.",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Resources"
                ],
                "responses": {
                    "200": {
                        "description": "An object of resource or resources lists",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/resource"
                            }
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "put": {
                "summary": "Create resource",
                "description": "Create resource",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "resource",
                        "description": "New resource",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/resource"
                        }
                    }
                ],
                "tags": [
                    "Resources"
                ],
                "responses": {
                    "201": {
                        "description": "An object of new resource",
                        "schema": {
                            "$ref": "#/definitions/resource"
                        }
                    },
                    "400": {
                        "description": "invalid data",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        },
        "/resources/{resource_id}": {
            "get": {
                "summary": "Get resource",
                "description": "Get resource",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "resource_id",
                        "type": "string",
                        "description": "Resource identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Resources"
                ],
                "responses": {
                    "200": {
                        "description": "An object of resource",
                        "schema": {
                            "$ref": "#/definitions/resource"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "post": {
                "summary": "Update resource",
                "description": "Update resource",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "resource_id",
                        "type": "string",
                        "description": "Resource identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "resource",
                        "description": "Updated resource",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/resource"
                        }
                    }
                ],
                "tags": [
                    "Resources"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated resource",
                        "schema": {
                            "$ref": "#/definitions/resource"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "patch": {
                "summary": "Update resource",
                "description": "Update resource",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "resource_id",
                        "type": "string",
                        "description": "Resource identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    },
                    {
                        "name": "resource",
                        "description": "Updates of the resource",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/resource"
                        }
                    }
                ],
                "tags": [
                    "Resources"
                ],
                "responses": {
                    "200": {
                        "description": "An object of updated resource",
                        "schema": {
                            "$ref": "#/definitions/resource"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete resource",
                "description": "Delete resource",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "resource_id",
                        "type": "string",
                        "description": "Resource identifier",
                        "in": "path",
                        "required": true
                    },
                    {
                        "$ref": "#/parameters/auth_token_header"
                    },
                    {
                        "$ref": "#/parameters/auth_token_query"
                    }
                ],
                "tags": [
                    "Resources"
                ],
                "responses": {
                    "200": {
                        "description": "An object of deleted resource",
                        "schema": {
                            "$ref": "#/definitions/resource"
                        }
                    },
                    "401": {
                        "description": "invalid credentials",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "405": {
                        "description": "method not allowed",
                        "schema": {
                            "type": "object"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "type": "object"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "access_list": {
            "title": "ACL Entry",
            "type": "object",
            "description": "Access Control List entries for device or account",
            "required": [
                "cidrs",
                "order"
            ],
            "additionalProperties": true,
            "properties": {
                "cidrs": {
                    "title": "CIDR",
                    "type": "array",
                    "description": "Classless Inter-Domain Routing IP notation for use on the access lists",
                    "items": {
                        "type": "string",
                        "description": "CIDR IP to use on access lists"
                    }
                },
                "order": {
                    "title": "Order",
                    "type": "string",
                    "description": "Allow-Deny or Deny-Allow?",
                    "enum": [
                        "allow,deny",
                        "deny,allow"
                    ]
                },
                "user_agent": {
                    "title": "User-Agent",
                    "type": "string",
                    "description": "RegExp to match valid user agent strings"
                }
            }
        },
        "account": {
            "title": "Account",
            "type": "object",
            "description": "Accounts represent tenants or customers on the system. Each account represents an individual dataset or sandbox that only one tenant can access. The data set is architecturally independent from other tenants.",
            "required": [
                "name",
                "metaflows"
            ],
            "properties": {
                "call_restriction": {
                    "title": "Call Restrictions",
                    "type": "object",
                    "description": "Account level call restrictions for each available number classification",
                    "default": {},
                    "additionalProperties": {
                        "properties": {
                            "action": {
                                "title": "Action",
                                "type": "object",
                                "description": "If set to deny all calls of this type will be rejected. If set to inherit the user/device rules apply",
                                "enum": [
                                    "inherit",
                                    "deny"
                                ]
                            }
                        }
                    }
                },
                "call_waiting": {
                    "$ref": "#/definitions/call_waiting"
                },
                "caller_id": {
                    "title": "Default Caller ID",
                    "type": "object",
                    "description": "The account default caller ID parameters",
                    "default": {},
                    "$ref": "#/definitions/caller_id"
                },
                "caller_id_options": {
                    "title": "Caller ID option",
                    "type": "object",
                    "description": "The Caller ID Option Parameters",
                    "properties": {
                        "reformat": {
                            "type": "string",
                            "description": "A regular expression that if matched internal caller id numbers are replaced by"
                        }
                    }
                },
                "dial_plan": {
                    "title": "Default Dialplan",
                    "type": "object",
                    "description": "A list of default rules used to modify dialed numbers",
                    "default": {},
                    "additionalProperties": {
                        "properties": {
                            "description": {
                                "title": "Name",
                                "type": "string",
                                "description": "Friendly name for this regex dialplan"
                            },
                            "prefix": {
                                "title": "Prefix",
                                "type": "string",
                                "description": "Prefix the prepend to the capture group after applying the regex"
                            },
                            "suffix": {
                                "title": "Suffix",
                                "type": "string",
                                "description": "Suffix the append to the capture group after applying the regex"
                            }
                        }
                    }
                },
                "do_not_distrip": {
                    "title": "DND Parameters",
                    "type": "object",
                    "properties": {
                        "enabled": {
                            "title": "Enabled?",
                            "type": "boolean",
                            "description": "The default value for do-not-disturb"
                        }
                    }
                },
                "enabled": {
                    "title": "Is Enabled?",
                    "type": "boolean",
                    "description": "Determines if the account is currently enabled",
                    "default": true
                },
                "language": {
                    "title": "Language",
                    "type": "string",
                    "description": "The language for this account",
                    "default": "en-us"
                },
                "metaflows": {
                    "$ref": "#/definitions/metaflow"
                },
                "music_on_hold": {
                    "title": "Music on Hold",
                    "type": "object",
                    "description": "The default music on hold parameters",
                    "default": {},
                    "properties": {
                        "media_id": {
                            "title": "Media ID",
                            "type": "string",
                            "description": "The ID of a media object that should be used as the default music on hold",
                            "maxLength": 128
                        }
                    }
                },
                "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "A friendly name for the account",
                    "minLength": 1,
                    "maxLength": 128
                },
                "org": {
                    "title": "Organizational name",
                    "type": "string",
                    "description": "Full legal name of the organization"
                },
                "preflow": {
                    "title": "Preflows",
                    "type": "object",
                    "description": "Each property provides functionality that can be applied to calls using the callflow application",
                    "default": {},
                    "additionalProperties": false,
                    "properties": {
                        "always": {
                            "title": "Callflow ID",
                            "type": "string",
                            "description": "The ID of a callflow to always execute prior to processing the callflow with numbers/patterns matching the request"
                        }
                    }
                },
                "realm": {
                    "title": "Realm",
                    "type": "string",
                    "description": "The realm of the account, ie&#58; 'account1.2600hz.com'",
                    "pattern": "^([.\\w_-]+)$",
                    "minLength": 4,
                    "maxLength": 253,
                    "format": "uri"
                },
                "ringtones": {
                    "title": "Ringtone Parameters",
                    "type": "object",
                    "default": {},
                    "properties": {
                        "external": {
                            "title": "External",
                            "type": "string",
                            "description": "The alert info SIP header added when the call is from internal sources",
                            "maxLength": 256
                        },
                        "internal": {
                            "title": "Internal",
                            "type": "string",
                            "description": "The alert info SIP header added when the call is from external sources",
                            "maxLength": 256
                        }
                    }
                },
                "timezone": {
                    "title": "Default Timezone",
                    "type": "string",
                    "description": "The Caller ID Option Parameters",
                    "default": "America/Los_Angeles",
                    "minLength": 5,
                    "maxLength": 32
                }
            }
        },
        "app": {
            "title": "Application",
            "type": "object",
            "description": "Appstore applications",
            "required": [
                "api_url",
                "author",
                "i18n",
                "icon",
                "license",
                "name",
                "price",
                "version"
            ],
            "properties": {
                "api_url": {
                    "title": "Api url",
                    "type": "string",
                    "description": "Application api url",
                    "format": "uri"
                },
                "author": {
                    "title": "Author",
                    "type": "string",
                    "description": "Application author",
                    "minLength": 2,
                    "maxLength": 64
                },
                "i18n": {
                    "title": "i18n",
                    "type": "object",
                    "description": "Application source url",
                    "properties": {
                        "[a-z]{2}\\-[A-Z]{2}": {
                            "type": "object",
                            "required": [
                                "description",
                                "label"
                            ],
                            "properties": {
                                "description": {
                                    "title": "Description",
                                    "type": "string",
                                    "minLength": 3
                                },
                                "extended_description": {
                                    "title": "Extended Description",
                                    "type": "string"
                                },
                                "features": {
                                    "title": "Features",
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "label": {
                                    "title": "Label",
                                    "type": "string",
                                    "minLength": 3,
                                    "maxLength": 64
                                }
                            }
                        }
                    }
                },
                "icon": {
                    "title": "Icon",
                    "type": "string",
                    "description": "Application icon"
                },
                "license": {
                    "title": "License",
                    "type": "string",
                    "description": "Application license"
                },
                "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "Application name",
                    "minLength": 3,
                    "maxLength": 64
                },
                "price": {
                    "title": "Price",
                    "type": "integer",
                    "description": "Application price",
                    "minimum": 0
                },
                "screenshots": {
                    "title": "Screenshots",
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "source_url": {
                    "title": "Source Url",
                    "type": "string",
                    "description": "Application source url",
                    "format": "uri"
                },
                "tags": {
                    "title": "Tags",
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "urls": {
                    "title": "URLs",
                    "type": "object"
                },
                "version": {
                    "title": "Version",
                    "type": "string",
                    "description": "Application version"
                }
            }
        },
        "blacklist": {
            "title": "Blacklists",
            "type": "object",
            "description": "Schema for a blacklists",
            "required": [
                "name"
            ],
            "properties": {
                "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "A friendly name for the temporal rule set",
                    "minLength": 1,
                    "maxLength": 128
                },
                "number": {
                    "title": "Number",
                    "type": "object",
                    "description": "Map of caller id number to block",
                    "default": {}
                }
            }
        },
        "bookkeeper": {
            "title": "Bookkeepers",
            "type": "object",
            "description": "The bookkeeper modules provided by Kazoo",
            "properties": {
                "braintree": {
                    "type": "object"
                },
                "local": {
                    "type": "object"
                }
            }
        },
        "call_waiting": {
            "title": "Call waiting",
            "type": "object",
            "description": "Parameters for server-side call waiting",
            "properties": {
                "enebled": {
                    "title": "Is Enabled?",
                    "type": "boolean",
                    "description": "Determines if server side call waiting is enabled/disabled"
                }
            }
        },
        "caller_id": {
            "title": "Caller ID",
            "type": "object",
            "description": "Defines caller ID settings based on the type of call being made",
            "properties": {
                "emergency": {
                    "title": "Emergency",
                    "type": "object",
                    "description": "The caller ID used when a resource is flagged as 'emergency'",
                    "properties": {
                        "name": {
                            "title": "Name",
                            "type": "string",
                            "description": "The caller id name for the object type",
                            "maxLength": 35
                        },
                        "number": {
                            "title": "Number",
                            "type": "string",
                            "description": "The caller id name for the object type",
                            "maxLength": 35
                        }
                    }
                },
                "external": {
                    "title": "External",
                    "type": "object",
                    "description": "The default caller ID used when dialing external numbers",
                    "properties": {
                        "name": {
                            "title": "Name",
                            "type": "string",
                            "description": "The caller id name for the object type",
                            "maxLength": 35
                        },
                        "number": {
                            "title": "Number",
                            "type": "string",
                            "description": "The caller id name for the object type",
                            "maxLength": 35
                        }
                    }
                },
                "internal": {
                    "title": "Internal",
                    "type": "object",
                    "description": "The default caller ID used when dialing internal extensions",
                    "properties": {
                        "name": {
                            "title": "Name",
                            "type": "string",
                            "description": "The caller id name for the object type",
                            "maxLength": 35
                        },
                        "number": {
                            "title": "Number",
                            "type": "string",
                            "description": "The caller id name for the object type",
                            "maxLength": 35
                        }
                    }
                }
            }
        },
        "callflow": {
            "title": "Callflow",
            "type": "object",
            "description": "Call flows describe steps to take in order to process a phone call. They are trees of information related to a phone call such as 'answer, play file, record file' etc. that are logically grouped together and ordered.",
            "required": [
                "flow"
            ],
            "properties": {
                "featurecode": {
                    "title": "Feature Code Parameters",
                    "type": "object",
                    "description": "When the callflow is used as a featurecode this object tracks the intended match of the pattern and name of the feature",
                    "properties": {
                        "name": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 128
                        },
                        "number": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 30
                        }
                    }
                },
                "flow": {
                    "title": "Callflow",
                    "type": "object",
                    "description": "A callflow node defines a module to execute, data to provide to that module, and one or more children to branch to",
                    "required": [
                        "data",
                        "module"
                    ],
                    "properties": {
                        "children": {
                            "title": "Children Callflows",
                            "type": "object",
                            "description": "Children callflows",
                            "default": {}
                        },
                        "data": {
                            "title": "Module Data",
                            "type": "object",
                            "description": "The data/arguments of the callflow module",
                            "default": {}
                        },
                        "module": {
                            "title": "Module Name",
                            "type": "string",
                            "description": "The name of the callflow module to excute at this node",
                            "minLength": 1,
                            "maxLength": 64
                        }
                    }
                },
                "metaflow": {
                    "description": "Actions applied to a call outside of the normal callflow, initiated by the caller(s)",
                    "$ref": "#/definitions/metaflow"
                },
                "numbers": {
                    "title": "Numbers",
                    "type": "array",
                    "description": "A list of static numbers that the callflow should execute for",
                    "default": [],
                    "items": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 36
                    }
                },
                "patterns": {
                    "title": "Patterns",
                    "type": "array",
                    "description": "A list of regular expressions that the callflow should execute for, with optional capture groups",
                    "default": [],
                    "items": {
                        "type": "string",
                        "minLength": 1
                    }
                }
            }
        },
        "cdr": {
            "title": "CDR",
            "type": "object",
            "description": "Call Detail Records",
            "required": [
                "call_id"
            ],
            "additionalProperties": false,
            "properties": {
                "app_name": {
                    "title": "Application Name",
                    "type": "string",
                    "description": "The Kazoo application that issued the CDR"
                },
                "app_version": {
                    "title": "Application Version",
                    "type": "string",
                    "description": "The internal Kazoo version number of the application that issued the CDR"
                },
                "billing_seconds": {
                    "title": "Billing (seconds)",
                    "type": "string",
                    "description": "The number of seconds the call leg can be billed for (typically from when the call leg is answered"
                },
                "call_direction": {
                    "title": "Direction",
                    "type": "string",
                    "description": "Direction of the call, relative to the media switch",
                    "enum": [
                        "inbound",
                        "outbound"
                    ]
                },
                "call_id": {
                    "title": "Call ID",
                    "type": "string",
                    "description": "Unique identifier of the call leg"
                },
                "callee_id_name": {
                    "title": "Callee ID Name",
                    "type": "string",
                    "description": "The indicated name of the callee"
                },
                "callee_id_number": {
                    "title": "Callee ID Number",
                    "type": "string",
                    "description": "The indicated number of the callee"
                },
                "caller_id_name": {
                    "title": "Callee ID Name",
                    "type": "string",
                    "description": "The indicated name of the caller"
                },
                "caller_id_number": {
                    "title": "Callee ID Number",
                    "type": "string",
                    "description": "The indicated number of the caller"
                },
                "custom_channel_vars": {
                    "title": "CCVs",
                    "type": "object",
                    "description": "Kazoo-specific key/value pairs set on the channel",
                    "additionalProperties": {
                        "type": "string"
                    }
                },
                "custom_sip_headers": {
                    "title": "Custom SIP Headers",
                    "type": "object",
                    "description": "A property list of SIP headers beging with the prefix 'X-'",
                    "additionalProperties": {
                        "type": "string"
                    }
                },
                "digits_dialed": {
                    "title": "Digits Dialed",
                    "type": "string",
                    "description": "All the DTMF tones detected on this leg of the call"
                },
                "disposition": {
                    "title": "Hangup Disposition",
                    "type": "string",
                    "description": "Who sent the SIP BYE message"
                },
                "duration_seconds": {
                    "title": "Duration (seconds)",
                    "type": "string",
                    "description": "The duration of the call leg, in seconds"
                },
                "fax_bad_rows": {
                    "type": "string"
                },
                "fax_ecm_used": {
                    "type": "string"
                },
                "fax_result_code": {
                    "type": "string"
                },
                "fax_result_text": {
                    "type": "string"
                },
                "fax_success": {
                    "type": "string"
                },
                "fax_total_pages": {
                    "type": "string"
                },
                "fax_transfer_rate": {
                    "type": "string"
                },
                "fax_transferred_pages": {
                    "type": "string"
                },
                "from": {
                    "title": "From",
                    "type": "string",
                    "description": "Built by Kazoo, depending on direction, to represent the From user"
                },
                "from_uri": {
                    "title": "SIP From",
                    "type": "string",
                    "description": "The From SIP URI"
                },
                "hangup_cause": {
                    "title": "Hangup Cause",
                    "type": "string",
                    "description": "The reason for the call leg's termination"
                },
                "hangup_code": {
                    "title": "Hangup Code",
                    "type": "string",
                    "description": "The SIP hangup code, if available"
                },
                "local_sdp": {
                    "title": "Local SDP",
                    "type": "string",
                    "description": "The SDP negotiated by the local agent"
                },
                "media_server": {
                    "title": "Media Server",
                    "type": "string",
                    "description": "The hostname of the media server that processed the call"
                },
                "node": {
                    "title": "Erlang Node",
                    "type": "string",
                    "description": "The ecallmgr which issued the CDR"
                },
                "other_leg_call_id": {
                    "title": "Other Leg Call ID",
                    "type": "string",
                    "description": "If this leg was bridged, the call-id of the opposite leg"
                },
                "other_leg_call_id_name": {
                    "title": "Other Leg Caller ID Name",
                    "type": "string",
                    "description": "Caller ID name of the bridged leg"
                },
                "other_leg_call_id_number": {
                    "title": "Other Leg Caller ID Number",
                    "type": "string",
                    "description": "Caller ID number of the bridged leg"
                },
                "other_leg_destination_number": {
                    "title": "Other Leg Destination",
                    "type": "string",
                    "description": "Dialed number of the other leg"
                },
                "other_leg_direction": {
                    "title": "Other Leg Direction",
                    "type": "string",
                    "description": "direction of the other leg, relative to the media server"
                },
                "presence_id": {
                    "title": "Presence ID",
                    "type": "string",
                    "description": "ID used in NOTIFY SIP messages"
                },
                "remote_sdp": {
                    "title": "Remote SDP",
                    "type": "string",
                    "description": "The SDP negotiated by the remote agent"
                },
                "request": {
                    "title": "Request",
                    "type": "string",
                    "description": "Built by Kazoo this is the processed request URI"
                },
                "ringing_seconds": {
                    "title": "Ringing (seconds)",
                    "type": "string",
                    "description": "How many seconds the leg was ringing (pre-answer)"
                },
                "timestamp": {
                    "title": "Timestamp (Gregorian seconds)",
                    "type": "string",
                    "description": "UTC timestamp, in gregorian seconds, of when the CDR was generated"
                },
                "to": {
                    "title": "To",
                    "type": "string",
                    "description": "Built by Kazoo, depending on direction, to represent the To user"
                },
                "to_uri": {
                    "title": "SIP To",
                    "type": "string",
                    "description": "The To SIP URI"
                },
                "user_agent": {
                    "title": "SIP User Agent",
                    "type": "string",
                    "description": "User agent header from SIP packet"
                }
            }
        },
        "clicktocall": {
            "title": "Click-to-Call",
            "type": "object",
            "description": "Click-to-call allows you to create URLs that can be POSTed to with a phone number or SIP URI and create a phone call from the provided contact information to a destination you have pre-determined.",
            "required": [
                "extension",
                "name"
            ],
            "properties": {
                "auth_required": {
                    "title": "Is Auth Required?",
                    "type": "boolean",
                    "description": "Determines if this click to call requires valid auth-tokens when invoked",
                    "default": true
                },
                "caller_id_number": {
                    "title": "Keep Original Caller ID?",
                    "type": "string",
                    "description": "Explicitly set caller id number"
                },
                "extension": {
                    "title": "Extension Number",
                    "type": "string",
                    "description": "The extension to connect to when the click to call is invoked"
                },
                "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "A friendly name for the click to call",
                    "minLength": 1,
                    "maxLength": 128
                },
                "outbound_callee_id_name": {
                    "title": "Outbound Callee ID Name",
                    "type": "string",
                    "description": "Callee ID Name of the device calling out to the contact number"
                },
                "outbound_callee_id_number": {
                    "title": "Outbound Callee ID Number",
                    "type": "string",
                    "description": "Callee ID Number of the device calling out to the contact number"
                },
                "throttle": {
                    "title": "Rate Limit",
                    "type": "integer",
                    "description": "The rate that this click to call can be invoked"
                },
                "whitelist": {
                    "title": "Allowed Numbers",
                    "type": "array",
                    "description": "A list of regular expressions that the click to call can dial to",
                    "items": {
                        "type": "string",
                        "minLength": 1
                    }
                }
            }
        },
        "conference": {
            "title": "Conference",
            "type": "object",
            "description": "Schema for conferences",
            "properties": {
                "conference_number": {
                    "title": "General Call In Numbers",
                    "type": "array",
                    "description": "Defines conference numbers that can be used by members or moderators",
                    "default": [],
                    "uniqueItems": true,
                    "items": {
                        "type": "string"
                    }
                },
                "focus": {
                    "title": "Focus",
                    "type": "string",
                    "description": "This is a read-only property indicating the media server hosting the conference"
                },
                "member": {
                    "title": "Member Call In",
                    "type": "object",
                    "description": "Defines the discovery properties for a member",
                    "default": {},
                    "properties": {
                        "join_deaf": {
                            "title": "Join Deaf?",
                            "type": "boolean",
                            "description": "Determines if a member will join deaf",
                            "default": true
                        },
                        "join_muted": {
                            "title": "Join Muted?",
                            "type": "boolean",
                            "description": "Determines if a member will join muted",
                            "default": true
                        },
                        "numbers": {
                            "title": "Call In Numbers",
                            "type": "array",
                            "description": "Defines the conference number(s) for members",
                            "default": [],
                            "uniqueItems": true,
                            "items": {
                                "type": "string"
                            },
                            "minItems": 0
                        },
                        "pins": {
                            "title": "Pin Numbers",
                            "type": "array",
                            "description": "Defines the pin number(s) for members",
                            "default": [],
                            "items": {
                                "type": "string"
                            }
                        }
                    }
                },
                "moderator": {
                    "title": "Moderator Call In",
                    "type": "object",
                    "description": "Defines the discovery properties for a moderator",
                    "default": {},
                    "properties": {
                        "join_deaf": {
                            "title": "Join Deaf?",
                            "type": "boolean",
                            "description": "Determines if a moderator will join deaf",
                            "default": true
                        },
                        "join_muted": {
                            "title": "Join Muted?",
                            "type": "boolean",
                            "description": "Determines if a moderator will join muted",
                            "default": true
                        },
                        "numbers": {
                            "title": "Call In Numbers",
                            "type": "array",
                            "description": "Defines the conference number(s) for moderators",
                            "default": [],
                            "uniqueItems": true,
                            "items": {
                                "type": "string"
                            },
                            "minItems": 0
                        },
                        "pins": {
                            "title": "Pin Numbers",
                            "type": "array",
                            "description": "Defines the pin number(s) for moderators",
                            "default": [],
                            "items": {
                                "type": "string"
                            }
                        }
                    }
                },
                "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "A friendly name for the conference",
                    "minLength": 1,
                    "maxLength": 128
                },
                "owner_id": {
                    "title": "Owner ID",
                    "type": "string",
                    "description": "The user ID who manages this conference",
                    "minLength": 32,
                    "maxLength": 32
                },
                "play_name": {
                    "title": "Play Name",
                    "type": "boolean",
                    "description": "Do we need to announce new conference members?",
                    "default": false
                },
                "profile": {
                    "title": "Profile",
                    "type": "string",
                    "description": "The XML profile name used to configure the conference"
                }
            }
        },
        "device": {
            "title": "Device",
            "type": "object",
            "description": "A device be it a SIP phone or landline number",
            "required": [
                "name"
            ],
            "properties": {
                "call_forward": {
                    "title": "Call Forwarding Parameters",
                    "type": "object",
                    "description": "The device call forward parameters",
                    "properties": {
                        "direct_calls_only": {
                            "title": "Direct Calls Only?",
                            "type": "boolean",
                            "description": "Determines if the calls that are not directly sent to the device should be forwarded",
                            "default": false
                        },
                        "enabled": {
                            "title": "Is Enabled?",
                            "type": "boolean",
                            "description": "Determines if the call forwarding should be used",
                            "default": false
                        },
                        "failover": {
                            "title": "Use if Device Offline?",
                            "type": "boolean",
                            "description": "Enable the call-forwarding parameters if the device is offline",
                            "default": false
                        },
                        "ignore_early_media": {
                            "title": "Ignore Early Media?",
                            "type": "boolean",
                            "description": "The option to determine if early media from the call forwarded number should ignored",
                            "default": true
                        },
                        "keep_caller_id": {
                            "title": "Keep Original Caller ID?",
                            "type": "boolean",
                            "description": "Determines if the caller id is kept when the call is forwarded, if not the devices caller id is used",
                            "default": true
                        },
                        "number": {
                            "title": "Number",
                            "type": "string",
                            "description": "The number to forward calls to",
                            "maxLength": 35
                        },
                        "require_keypress": {
                            "title": "Require Keypress?",
                            "type": "boolean",
                            "description": "Determines if the callee is prompted to press 1 to accept the call",
                            "default": true
                        },
                        "substitute": {
                            "title": "Substitute Device?",
                            "type": "boolean",
                            "description": "Determines if the call forwarding replaces the device",
                            "default": true
                        }
                    }
                },
                "call_restriction": {
                    "title": "Call Restrictions",
                    "type": "object",
                    "description": "Device level call restrictions for each available number classification",
                    "default": {},
                    "additionalProperties": {
                        "properties": {
                            "action": {
                                "title": "Action",
                                "type": "object",
                                "description": "If set to deny all calls of this type will be rejected.  If set to inherit the user/device rules apply",
                                "enum": [
                                    "inherit",
                                    "deny"
                                ]
                            }
                        }
                    }
                },
                "call_waiting": {
                    "$ref": "#/definitions/call_waiting"
                },
                "caller_id": {
                    "title": "Default Caller ID",
                    "type": "object",
                    "description": "The device caller ID parameters",
                    "default": {},
                    "$ref": "#/definitions/caller_id"
                },
                "contact_list": {
                    "title": "Contect List Parameters",
                    "type": "object",
                    "properties": {
                        "exclude": {
                            "title": "Is Excluded?",
                            "type": "boolean",
                            "description": "If set to true the device is excluded from the contact list"
                        }
                    }
                },
                "device_type": {
                    "title": "Device Type",
                    "type": "string",
                    "description": "Arbitrary device type used by the UI and billing system"
                },
                "dial_plan": {
                    "title": "Dialplan",
                    "type": "object",
                    "description": "A list of rules used to modify dialed numbers",
                    "default": {},
                    "additionalProperties": {
                        "properties": {
                            "description": {
                                "title": "Name",
                                "type": "string",
                                "description": "Friendly name for this regex dialplan"
                            },
                            "prefix": {
                                "title": "Prefix",
                                "type": "string",
                                "description": "Prefix the prepend to the capture group after applying the regex"
                            },
                            "suffix": {
                                "title": "Suffix",
                                "type": "string",
                                "description": "Suffix the append to the capture group after applying the regex"
                            }
                        }
                    }
                },
                "do_not_distrip": {
                    "title": "DND Parameters",
                    "type": "object",
                    "properties": {
                        "enabled": {
                            "title": "Enabled?",
                            "type": "boolean",
                            "description": "Is do-not-disturb enabled for this device?"
                        }
                    }
                },
                "enabled": {
                    "title": "Enabled",
                    "type": "boolean",
                    "description": "Determines if the device is currently enabled",
                    "default": true
                },
                "language": {
                    "title": "Language",
                    "type": "string",
                    "description": "The language for the device"
                },
                "media": {
                    "title": "Media Parameters",
                    "type": "object",
                    "description": "The device media parameters",
                    "default": {},
                    "properties": {
                        "audio": {
                            "title": "Audio Options",
                            "type": "object",
                            "description": "The audio media parameters",
                            "default": {},
                            "properties": {
                                "codecs": {
                                    "title": "Codecs",
                                    "type": "array",
                                    "description": "A list of audio codecs the device supports",
                                    "default": [
                                        "PCMU"
                                    ],
                                    "items": {
                                        "type": "string",
                                        "enum": [
                                            "OPUS",
                                            "CELT@32000h",
                                            "G7221@32000h",
                                            "G7221@16000h",
                                            "G722",
                                            "speex@32000h",
                                            "speex@16000h",
                                            "PCMU",
                                            "PCMA",
                                            "G729",
                                            "GSM",
                                            "CELT@48000h",
                                            "CELT@64000h",
                                            "G722_16",
                                            "G722_32",
                                            "CELT_48",
                                            "CELT_64",
                                            "Speex",
                                            "speex"
                                        ]
                                    }
                                }
                            }
                        },
                        "bypass_media": {
                            "title": "Is Media Direct?",
                            "type": "array",
                            "description": "Default bypass media mode",
                            "enum": [
                                true,
                                false,
                                "auto"
                            ],
                            "items": {
                                "type": "string"
                            }
                        },
                        "encription": {
                            "title": "Encryption Parameters",
                            "type": "object",
                            "default": {},
                            "properties": {
                                "enforce_sequrity": {
                                    "title": "Is Encryption Enabled?",
                                    "type": "boolean",
                                    "default": false
                                },
                                "methods": {
                                    "title": "Supported Encryption Types",
                                    "type": "array",
                                    "default": [],
                                    "items": {
                                        "type": "string",
                                        "enum": [
                                            "zrtp",
                                            "srtp"
                                        ]
                                    }
                                }
                            }
                        },
                        "fax_option": {
                            "title": "Is T.38 Supported?",
                            "type": "boolean",
                            "description": "Support T.38"
                        },
                        "ignore_early_media": {
                            "title": "Ignore Early Media?",
                            "type": "boolean",
                            "description": "The option to determine if early media from the device should always be ignored"
                        },
                        "progress_timeout": {
                            "title": "Progress Timeout (seconds)",
                            "type": "integer",
                            "description": "The progress timeout to apply to the device"
                        },
                        "video": {
                            "title": "Video Options",
                            "type": "object",
                            "description": "The video media parameters",
                            "default": {},
                            "properties": {
                                "codecs": {
                                    "type": "array",
                                    "description": "A list of video codecs the device supports",
                                    "default": [],
                                    "items": {
                                        "type": "string",
                                        "enum": [
                                            "VP8",
                                            "H264",
                                            "H263",
                                            "H261"
                                        ]
                                    }
                                }
                            }
                        }
                    }
                },
                "metaflows": {
                    "description": "The device metaflow parameters",
                    "$ref": "#/definitions/metaflow"
                },
                "music_on_hold": {
                    "title": "Music on Hold",
                    "type": "object",
                    "description": "The music on hold parameters used if not a property of the device owner",
                    "default": {},
                    "properties": {
                        "media_id": {
                            "title": "Media ID",
                            "type": "string",
                            "description": "The ID of a media object that should be used as the music on hold",
                            "maxLength": 128
                        }
                    }
                },
                "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "A friendly name for the device",
                    "minLength": 1,
                    "maxLength": 128
                },
                "outbound_flags": {
                    "title": "Outbound Flags",
                    "type": "array",
                    "description": "List of flags (features) this device requires when making outbound calls",
                    "items": {
                        "type": "string"
                    }
                },
                "owner_id": {
                    "title": "Owner ID",
                    "type": "string",
                    "description": "The ID of the user object that 'owns' the device",
                    "minLength": 32,
                    "maxLength": 32
                },
                "provision": {
                    "title": "Provision",
                    "type": "object",
                    "description": "Provision Data",
                    "properties": {
                        "feature_keys": {
                            "title": "Feature Keys",
                            "type": "object",
                            "properties": {
                                "^[0-9]+$": {
                                    "type": "object",
                                    "required": [
                                        "type"
                                    ],
                                    "properties": {
                                        "type": {
                                            "title": "Type",
                                            "type": "string",
                                            "description": "Feature key type",
                                            "enum": [
                                                "presence",
                                                "parking",
                                                "personal_parking",
                                                "speed_dial"
                                            ]
                                        },
                                        "value": {
                                            "title": "Value",
                                            "type": "integer",
                                            "description": "Feature key value",
                                            "minimum": 1,
                                            "maximum": 10
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "registr_overwrite_notify": {
                    "title": "Send NOTIFY if Register Overwritten?",
                    "type": "boolean",
                    "description": "When true enables overwrite notifications",
                    "default": false
                },
                "ringtones": {
                    "title": "Ringtone Parameters",
                    "type": "object",
                    "default": {},
                    "properties": {
                        "external": {
                            "title": "External",
                            "type": "string",
                            "description": "The alert info SIP header added when the call is from internal sources",
                            "maxLength": 256
                        },
                        "internal": {
                            "title": "Internal",
                            "type": "string",
                            "description": "The alert info SIP header added when the call is from external sources",
                            "maxLength": 256
                        }
                    }
                },
                "sip": {
                    "title": "SIP Parameters",
                    "type": "object",
                    "default": {},
                    "properties": {
                        "costum_sip_headers": {
                            "title": "Custom SIP Headers",
                            "type": "object",
                            "description": "A property list of SIP headers beging with the prefix 'X-'",
                            "additionalProperties": {
                                "type": "object"
                            }
                        },
                        "ignore_complated_elsewhere": {
                            "title": "Show Calls Answered Elsewhere as Missed?",
                            "type": "boolean",
                            "description": "When set to false the phone should not consider ring group calls answered elsewhere as missed"
                        },
                        "invite_format": {
                            "title": "Invite Format",
                            "type": "string",
                            "description": "The SIP request URI invite format",
                            "default": "username",
                            "enum": [
                                "username",
                                "npan",
                                "1npan",
                                "e164",
                                "route"
                            ]
                        },
                        "ip": {
                            "title": "IP Address",
                            "type": "string",
                            "description": "IP address for this device"
                        },
                        "method": {
                            "title": "Authentication Method",
                            "type": "string",
                            "description": "Method of authentication",
                            "default": "password",
                            "enum": [
                                "password",
                                "ip"
                            ]
                        },
                        "number": {
                            "title": "Static Number",
                            "type": "string",
                            "description": "The number used if the invite format is 1npan, npan, or e164 (if not set the dialed number is used)"
                        },
                        "password": {
                            "title": "Password",
                            "type": "string",
                            "description": "SIP authentication password",
                            "minLength": 5,
                            "maxLength": 32
                        },
                        "realm": {
                            "title": "Realm",
                            "type": "string",
                            "description": "SIP authentication password",
                            "format": "uri"
                        },
                        "registration_expiration": {
                            "title": "Minimum Registration (seconds)",
                            "type": "integer",
                            "description": "The time, in seconds, to force registrations to expire",
                            "default": 300
                        },
                        "route": {
                            "title": "Route SIP URI",
                            "type": "string",
                            "description": "The SIP URL used if the invite format is 'route'"
                        },
                        "static_route": {
                            "title": "Static SIP URI",
                            "type": "string",
                            "description": "Sends all inbound calls to this string (instead of dialed number or username)"
                        },
                        "username": {
                            "title": "Username",
                            "type": "string",
                            "description": "SIP authentication username",
                            "minLength": 2,
                            "maxLength": 32
                        }
                    }
                },
                "suppress_unregistr_notifications": {
                    "title": "Do Not Send Unregister Emails?",
                    "type": "boolean",
                    "description": "When true disables deregister notifications",
                    "default": false
                },
                "timezone": {
                    "title": "Timezone",
                    "type": "string",
                    "description": "Device's timezone"
                }
            }
        },
        "directory": {
            "title": "Directory",
            "type": "object",
            "description": "Allow a caller to search for a user/device by name instead of extensiDID",
            "properties": {
                "confirm_match": {
                    "title": "Confirm?",
                    "type": "boolean",
                    "description": "When one match is found, require caller to confirm the match before connecting",
                    "default": true
                },
                "max_dtmf": {
                    "title": "Maximum digits",
                    "type": "integer",
                    "description": "Cap the number of DTMF characters collected from a caller, 0 for unlimited",
                    "default": 0,
                    "minimum": 0
                },
                "min_dtmf": {
                    "title": "Minimum digits",
                    "type": "integer",
                    "description": "How many DTMF characters to collect from a caller before processing the directory",
                    "default": 3,
                    "minimum": 1
                },
                "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "The name of the directory",
                    "minLength": 1
                },
                "sort_by": {
                    "title": "Sort By",
                    "type": "string",
                    "description": "What field to sort on in matching documents when a caller enters characters",
                    "default": "last_name",
                    "enum": [
                        "first_name",
                        "last_name"
                    ]
                }
            }
        },
        "domain": {
            "title": "domains",
            "type": "object",
            "description": "Domain settings for white-labelling",
            "properties": {
                "A": {
                    "title": "A",
                    "type": "object",
                    "description": "A records"
                },
                "CNAME": {
                    "title": "CNAME",
                    "type": "object",
                    "description": "CNAME records",
                    "$ref": "#/definitions/domain_host"
                },
                "MX": {
                    "title": "MX",
                    "type": "object",
                    "description": "MX records, typically for email servers"
                },
                "NAPTR": {
                    "title": "NAPTR",
                    "type": "object",
                    "description": "NAPTR records"
                },
                "SRV": {
                    "title": "SRV",
                    "type": "object",
                    "description": "SRV records"
                },
                "TXT": {
                    "title": "TXT",
                    "type": "object",
                    "description": "TXT records"
                }
            }
        },
        "domain_host": {
            "title": "Domain hosts",
            "type": "object",
            "description": "Domain host settings for white-labelling",
            "properties": {
                ".*[\\{]{2}domain[\\}]{2}.*": {
                    "title": "Host",
                    "type": "object",
                    "description": "White-label template for hostname",
                    "required": [
                        "mapping",
                        "name"
                    ],
                    "properties": {
                        "mapping": {
                            "title": "Mapping",
                            "type": "array",
                            "description": "List of hosts or IPs this host should resolve to",
                            "minItems": 1,
                            "items": {
                                "type": "string"
                            }
                        },
                        "name": {
                            "title": "Name",
                            "type": "string",
                            "description": "Human-friendly name of the Host"
                        }
                    }
                }
            }
        },
        "fax": {
            "title": "Fax",
            "type": "object",
            "description": "Faxes API allows you to update and access fax jobs for both sending and receiving",
            "properties": {
                "attempts": {
                    "title": "Attempts",
                    "type": "integer",
                    "description": "The number of attempts made, this will be set by the system and reset automaticly on put/post",
                    "default": 0,
                    "minimum": 0,
                    "maximum": 4
                },
                "callback": {
                    "title": "Callback",
                    "type": "object",
                    "description": "A URL to send results to",
                    "properties": {
                        "method": {
                            "title": "Method",
                            "type": "string",
                            "description": "The HTTP method used for the callback",
                            "enum": [
                                "post",
                                "put"
                            ]
                        },
                        "type": {
                            "title": "Content-Type",
                            "type": "string",
                            "description": "The content-type used for the body of the callback",
                            "enum": [
                                "json",
                                "www-url-form-encoded"
                            ]
                        },
                        "url": {
                            "title": "URL",
                            "type": "string",
                            "description": "The URL to call back with the results"
                        }
                    }
                },
                "document": {
                    "title": "Document",
                    "type": "object",
                    "description": "Parameters related to the storage of a fax document",
                    "default": {},
                    "properties": {
                        "content": {
                            "title": "HTTP Body",
                            "type": "string",
                            "description": "The content provided in the body when fetching for transmission as a post",
                            "maxLength": 256
                        },
                        "content_type": {
                            "title": "HTTP Content-Type",
                            "type": "string",
                            "description": "The content type header to be used when fetching for transmission as a post"
                        },
                        "host": {
                            "title": "HTTP Host",
                            "type": "string",
                            "description": "The host header to be used when fetching for transmission"
                        },
                        "method": {
                            "title": "Method",
                            "type": "string",
                            "description": "The method that should be used to reteive the document",
                            "default": "get",
                            "enum": [
                                "get",
                                "post"
                            ]
                        },
                        "referer": {
                            "title": "HTTP Referer",
                            "type": "string",
                            "description": "The referer header to be used when fetching for transmission"
                        },
                        "url": {
                            "title": "Document URL",
                            "type": "string",
                            "description": "The url of the fax document"
                        }
                    }
                },
                "from_name": {
                    "title": "Sender Name",
                    "type": "string",
                    "description": "The sender name for the fax"
                },
                "from_number": {
                    "title": "Sender Number",
                    "type": "string",
                    "description": "The sender number for the fax"
                },
                "notifications": {
                    "title": "Notifications",
                    "type": "object",
                    "description": "Status notifications",
                    "properties": {
                        "email": {
                            "title": "Email",
                            "type": "object",
                            "description": "Email notifications",
                            "properties": {
                                "send_to": {
                                    "title": "Email Address",
                                    "type": "array",
                                    "description": "A list or string of email recipent(s)",
                                    "items": {
                                        "type": "string",
                                        "format": "email"
                                    },
                                    "format": "email"
                                }
                            }
                        },
                        "sms": {
                            "title": "SMS",
                            "type": "object",
                            "description": "SMS notifications",
                            "properties": {
                                "send_to": {
                                    "title": "SMS Number",
                                    "type": "array",
                                    "description": "A list or string of SMS recipent(s)",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    }
                },
                "retries": {
                    "title": "Retries",
                    "type": "integer",
                    "description": "The number of times to retry",
                    "default": 1,
                    "minimum": 0,
                    "maximum": 4
                },
                "to_name": {
                    "title": "Recipient Name",
                    "type": "string",
                    "description": "The recipient name for the fax"
                },
                "to_number": {
                    "title": "Recipient Number",
                    "type": "string",
                    "description": "The recipient number for the fax"
                },
                "tx_result": {
                    "type": "object",
                    "description": "The result of a transmission attempt",
                    "properties": {
                        "error_message": {
                            "title": "Error Message",
                            "type": "string",
                            "description": "A description of any error that occured",
                            "default": ""
                        },
                        "fax_bad_rows": {
                            "title": "Bad Rows",
                            "type": "integer",
                            "description": "The number of bad rows",
                            "default": 0
                        },
                        "fax_error_correction": {
                            "title": "Error Correction",
                            "type": "boolean",
                            "description": "True if fax error correction was used",
                            "default": false
                        },
                        "fax_receiver_id": {
                            "title": "Reciever ID",
                            "type": "string",
                            "description": "The receiver id reported by the remote fax device",
                            "default": ""
                        },
                        "fax_speed": {
                            "title": "Baud Rate",
                            "type": "integer",
                            "description": "The speed achieved during transmission",
                            "default": 0
                        },
                        "pages_sent": {
                            "title": "Pages Sent",
                            "type": "integer",
                            "description": "The number of pages transmitted",
                            "default": 0
                        },
                        "success": {
                            "title": "Success",
                            "type": "boolean",
                            "description": "True if the fax transmission was successful",
                            "default": false
                        },
                        "time_elapsed": {
                            "title": "Elapsed Time",
                            "type": "integer",
                            "description": "The amount of time from submition to completion",
                            "default": 0
                        }
                    }
                }
            }
        },
        "faxbox": {
            "title": "Fax Box",
            "type": "object",
            "description": "FaxBoxes allow configuration of individual fax virtual machines",
            "required": [
                "name"
            ],
            "properties": {
                "attempts": {
                    "title": "Attempts",
                    "type": "integer",
                    "description": "The number of attempts made, this will be set by the system and reset automaticly on put/post",
                    "default": 0,
                    "minimum": 0,
                    "maximum": 4
                },
                "caller_id": {
                    "title": "Caller ID Number",
                    "type": "string",
                    "description": "The Caller-ID-Number"
                },
                "caller_name": {
                    "title": "Caller ID Name",
                    "type": "string",
                    "description": "The Caller-ID-Name",
                    "default": "Kazoo Fax Printer"
                },
                "custom_smtp_email_address": {
                    "title": "SMTP Address",
                    "type": "string",
                    "description": "Custom smtp address"
                },
                "fax_header": {
                    "title": "Fax Header Name",
                    "type": "string",
                    "description": "The name printed at the top of the fax",
                    "default": "Kazoo Fax Printer"
                },
                "fax_identity": {
                    "title": "Fax Header Number",
                    "type": "string",
                    "description": "The number printed at the top of the fax"
                },
                "fax_timezone": {
                    "title": "Fax Header Timezone",
                    "type": "string",
                    "description": "The timezone announced"
                },
                "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "A friendly name for the faxbox",
                    "minLength": 1,
                    "maxLength": 128
                },
                "notifications": {
                    "title": "Notifications",
                    "type": "object",
                    "description": "Status notifications",
                    "properties": {
                        "inbound": {
                            "type": "object",
                            "description": "Inbound Status notifications",
                            "properties": {
                                "callback": {
                                    "title": "Callback Parameters",
                                    "type": "object",
                                    "description": "A URL to send results to",
                                    "properties": {
                                        "method": {
                                            "title": "Method",
                                            "type": "string",
                                            "description": "The http method to use when sending the results",
                                            "enum": [
                                                "post",
                                                "put"
                                            ]
                                        },
                                        "type": {
                                            "title": "Content-Type",
                                            "type": "string",
                                            "description": "The content-type to use when sending the results",
                                            "enum": [
                                                "json",
                                                "www-url-form-encoded"
                                            ]
                                        },
                                        "url": {
                                            "title": "URL",
                                            "type": "string",
                                            "description": "The URL to call back with the results"
                                        }
                                    }
                                },
                                "email": {
                                    "title": "Inbound Email Notifications",
                                    "type": "object",
                                    "description": "Email notifications",
                                    "properties": {
                                        "send_to": {
                                            "title": "Email Address",
                                            "type": "array",
                                            "description": "A list or string of email recipent(s)",
                                            "items": {
                                                "type": "string",
                                                "format": "email"
                                            },
                                            "format": "email"
                                        }
                                    }
                                },
                                "sms": {
                                    "title": "SMS",
                                    "type": "object",
                                    "description": "SMS notifications",
                                    "properties": {
                                        "send_to": {
                                            "title": "SMS Number",
                                            "type": "array",
                                            "description": "A list or string of SMS recipent(s)",
                                            "items": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "outbound": {
                            "type": "object",
                            "description": "Outbound Status notifications",
                            "properties": {
                                "callback": {
                                    "title": "Callback Parameters",
                                    "type": "object",
                                    "description": "A URL to send results to",
                                    "properties": {
                                        "method": {
                                            "title": "Method",
                                            "type": "string",
                                            "description": "The http method to use when sending the results",
                                            "enum": [
                                                "post",
                                                "put"
                                            ]
                                        },
                                        "type": {
                                            "title": "Content-Type",
                                            "type": "string",
                                            "description": "The content-type to use when sending the results",
                                            "enum": [
                                                "json",
                                                "www-url-form-encoded"
                                            ]
                                        },
                                        "url": {
                                            "title": "URL",
                                            "type": "string",
                                            "description": "The URL to call back with the results"
                                        }
                                    }
                                },
                                "email": {
                                    "title": "Outbound Email Notifications",
                                    "type": "object",
                                    "description": "Email notifications",
                                    "properties": {
                                        "send_to": {
                                            "title": "Email Address",
                                            "type": "array",
                                            "description": "A list or string of email recipent(s)",
                                            "items": {
                                                "type": "string",
                                                "format": "email"
                                            },
                                            "format": "email"
                                        }
                                    }
                                },
                                "sms": {
                                    "title": "SMS",
                                    "type": "object",
                                    "description": "SMS notifications",
                                    "properties": {
                                        "send_to": {
                                            "title": "SMS Number",
                                            "type": "array",
                                            "description": "A list or string of SMS recipent(s)",
                                            "items": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "retries": {
                    "title": "Retries",
                    "type": "integer",
                    "description": "The number of times to retry",
                    "default": 1,
                    "minimum": 0,
                    "maximum": 4
                },
                "smtp_permission_list": {
                    "title": "SMTP Permissions",
                    "type": "array",
                    "description": "smtp permission list. accepts regular expressions",
                    "default": [],
                    "items": {
                        "type": "string"
                    }
                }
            }
        },
        "list": {
            "title": "Lists",
            "type": "object",
            "description": "Schema for a match list",
            "required": [
                "name"
            ],
            "properties": {
                "entries": {
                    "title": "Patterns",
                    "type": "object",
                    "description": "Patterns used by match list",
                    "default": {}
                },
                "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "A friendly match list name",
                    "minLength": 1,
                    "maxLength": 128
                }
            }
        },
        "media": {
            "title": "Media",
            "type": "object",
            "description": "Schema for media",
            "required": [
                "name"
            ],
            "properties": {
                "content_length": {
                    "title": "Content Length",
                    "type": "integer",
                    "description": "Length, in bytes, of the file",
                    "minimum": 1,
                    "maximum": 5242880
                },
                "content_type": {
                    "title": "Content Type",
                    "type": "string",
                    "description": "Used to override the automatic upload type",
                    "enum": [
                        "audio/mp3",
                        "audio/mpeg",
                        "audio/mpeg3",
                        "audio/x-wav",
                        "audio/wav",
                        "audio/ogg"
                    ]
                },
                "description": {
                    "title": "Description",
                    "type": "string",
                    "description": "A breif description of the media update, usally the original file name",
                    "minLength": 1,
                    "maxLength": 128
                },
                "language": {
                    "title": "Language",
                    "type": "string",
                    "description": "The language of the media file or text",
                    "default": "en-us"
                },
                "media_source": {
                    "title": "Media Source",
                    "type": "string",
                    "description": "Defines the source of the media",
                    "default": "upload",
                    "enum": [
                        "recording",
                        "upload",
                        "tts"
                    ]
                },
                "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "A friendly name for the media",
                    "minLength": 1,
                    "maxLength": 128
                },
                "promt_id": {
                    "title": "Promt ID",
                    "type": "string",
                    "description": "The prompt this media file represents"
                },
                "source_id": {
                    "title": "Source ID",
                    "type": "string",
                    "description": "If the media was generated from a callflow module, this is ID of the properties",
                    "minLength": 32,
                    "maxLength": 32
                },
                "source_type": {
                    "title": "Source Type",
                    "type": "string",
                    "description": "If the media was generated from a callflow module, this is the module name"
                },
                "streamable": {
                    "title": "Streamable",
                    "type": "boolean",
                    "description": "Determines if the media can be streamed",
                    "default": true
                },
                "tts": {
                    "title": "TTS Parameters",
                    "type": "object",
                    "description": "Text-to-speech options used to create audio files from text",
                    "default": {},
                    "properties": {
                        "text": {
                            "title": "Text TTS",
                            "type": "string",
                            "description": "The text to be converted into audio",
                            "minLength": 1
                        },
                        "voice": {
                            "title": "Voice TTS",
                            "type": "string",
                            "description": "The voice to be used during the conversion",
                            "default": "female/en-US",
                            "enum": [
                                "female/en-US",
                                "male/en-US",
                                "female/en-CA",
                                "female/en-AU",
                                "female/en-GB",
                                "male/en-GB",
                                "female/es-US",
                                "male/es-US",
                                "female/us-US",
                                "female/zh-CN",
                                "male/zh-CN",
                                "female/zh-HK",
                                "female/zh-TW",
                                "female/ja-JP",
                                "male/ja-JP",
                                "female/ko-KR",
                                "male/ko-KR",
                                "female/da-DK",
                                "female/de-DE",
                                "male/de-DE",
                                "female/ca-ES",
                                "female/es-ES",
                                "male/es-ES",
                                "female/fi-FI",
                                "female/fr-CA",
                                "male/fr-CA",
                                "female/fr-FR",
                                "male/fr-FR",
                                "female/it-IT",
                                "male/it-IT",
                                "female/nb-NO",
                                "female/nl-NL",
                                "female/pl-PL",
                                "female/pt-BR",
                                "female/pt-PT",
                                "male/pt-PT",
                                "female/ru-RU",
                                "male/ru-RU",
                                "female/sv-SE",
                                "female/hu-HU",
                                "female/cs-CZ",
                                "female/tr-TR",
                                "male/tr-TR",
                                "male/ru-RU/Vladimir",
                                "female/ru-RU/Julia",
                                "female/ru-RU/Anna",
                                "female/ru-RU/Viktoria",
                                "male/ru-RU/Alexander",
                                "female/ru-RU/Maria",
                                "female/ru-RU/Lidia"
                            ]
                        }
                    }
                }
            }
        },
        "menu": {
            "title": "Menu",
            "type": "object",
            "description": "Schema for a menus",
            "required": [
                "name"
            ],
            "properties": {
                "allow_record_from_offnet": {
                    "title": "Allow Record From Offnet",
                    "type": "boolean",
                    "description": "Determines if the record pin can be used by external calls",
                    "default": false
                },
                "hunt": {
                    "title": "Hunt",
                    "type": "boolean",
                    "description": "Determines if the callers can dial internal extensions directly",
                    "default": true
                },
                "hunt_allow": {
                    "title": "Hunt Allow",
                    "type": "string",
                    "description": "A regular expression that an extension the caller dialed must match to be allowed to continue",
                    "minLength": 1,
                    "maxLength": 256
                },
                "hunt_deny": {
                    "title": "Hunt Deny",
                    "type": "string",
                    "description": "A regular expression that if matched does not allow the caller to dial directly",
                    "minLength": 1,
                    "maxLength": 256
                },
                "interdigit_timeout": {
                    "title": "Interdigit Timeout (millliseconds)",
                    "type": "integer",
                    "description": "The amount of time (in milliseconds) to wait for the caller to press the next digit after pressing a digit",
                    "minimum": 1,
                    "maximum": 10000
                },
                "max_extension_length": {
                    "title": "Max Extension Length",
                    "type": "integer",
                    "description": "The maximum number of digits that can be collected",
                    "default": 4,
                    "minimum": 1,
                    "maximum": 6
                },
                "media": {
                    "title": "Media Parameters",
                    "type": "object",
                    "description": "The media (prompt) parameters",
                    "default": {},
                    "properties": {
                        "exit_media": {
                            "title": "Exit Media",
                            "type": "string",
                            "description": "When a call is transferred from the menu after all retries exhausted this media can be played (prior to transfer if enabled)",
                            "minLength": 3,
                            "maxLength": 64
                        },
                        "greeting": {
                            "title": "Greeting",
                            "type": "string",
                            "description": "The ID of a media object that should be used as the menu greeting",
                            "minLength": 3,
                            "maxLength": 64
                        },
                        "invalid_media": {
                            "title": "Invalid Media",
                            "type": "string",
                            "description": "When the collected digits dont result in a match or hunt this media can be played",
                            "minLength": 3,
                            "maxLength": 64
                        },
                        "transfer_media": {
                            "title": "Transfer Media",
                            "type": "string",
                            "description": "When a call is transferred from the menu, either after all retries exhausted or a successful hunt, this media can be played",
                            "minLength": 3,
                            "maxLength": 64
                        }
                    }
                },
                "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "A friendly name for the menu",
                    "minLength": 1,
                    "maxLength": 128
                },
                "record_pin": {
                    "title": "Record Pin",
                    "type": "string",
                    "description": "The pin number used to record the menu prompt",
                    "minLength": 3,
                    "maxLength": 6
                },
                "retries": {
                    "title": "Retries",
                    "type": "integer",
                    "description": "The number of times a menu should be played until a valid entry is collected",
                    "default": 3,
                    "minimum": 1,
                    "maximum": 10
                },
                "timeout": {
                    "title": "Timeout (milliseconds)",
                    "type": "integer",
                    "description": "The amount of time (in milliseconds) to wait for the caller to beging entering digits",
                    "minimum": 1,
                    "maximum": 60000
                }
            }
        },
        "metaflow": {
            "title": "Metaflow",
            "type": "object",
            "description": "Actions applied to a call outside of the normal callflow, initiated by the caller(s)",
            "properties": {
                "binding_digit": {
                    "title": "Binding Digit",
                    "type": "string",
                    "description": "What DTMF will trigger the collection and analysis of the subsequent DTMF sequence",
                    "minLength": 1,
                    "maxLength": 1,
                    "enum": [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "0",
                        "*",
                        "#"
                    ],
                    "default": "*"
                },
                "digit_timeout": {
                    "title": "Timeout (milliseconds)",
                    "type": "integer",
                    "description": "How long to wait between DTMF presses before processing the collected sequence",
                    "minimum": 0
                },
                "listen_on": {
                    "title": "Listen On",
                    "type": "string",
                    "description": "Which leg(s) of the call to listen for DTMF",
                    "enum": [
                        "both",
                        "self",
                        "peer"
                    ]
                },
                "numbers": {
                    "title": "Numbers",
                    "type": "object",
                    "description": "A list of static numbers that the metaflow should match for",
                    "properties": {
                        "[0-9\\*\\#]+": {
                            "properties": {
                                "children": {
                                    "title": "Children",
                                    "type": "object",
                                    "default": {}
                                },
                                "data": {
                                    "title": "Module Data",
                                    "type": "object",
                                    "default": {}
                                },
                                "module": {
                                    "title": "Module",
                                    "type": "string",
                                    "maxLength": 15
                                }
                            }
                        }
                    }
                },
                "patterns": {
                    "title": "Patterns",
                    "type": "object",
                    "description": "The metaflow patterns",
                    "items": {
                        "type": "string"
                    }
                }
            }
        },
        "notification": {
            "title": "Notifications",
            "type": "object",
            "description": "Notifications templates",
            "required": [
                "from",
                "subject",
                "to"
            ],
            "properties": {
                "bcc": {
                    "title": "Bcc",
                    "type": "object",
                    "description": "Bcc email field",
                    "properties": {
                        "email_address": {
                            "title": "BCC Email Addresses",
                            "type": "array",
                            "description": "",
                            "items": {
                                "type": "string",
                                "format": "email"
                            }
                        },
                        "type": {
                            "title": "Type",
                            "type": "string",
                            "description": "",
                            "minLength": 2,
                            "maxLength": 253,
                            "enum": [
                                "original",
                                "specified",
                                "admins"
                            ]
                        }
                    }
                },
                "category": {
                    "type": "string",
                    "description": "Category of the template, for grouping purposes",
                    "minLength": 1
                },
                "cc": {
                    "title": "Cc",
                    "type": "object",
                    "description": "Cc email field",
                    "properties": {
                        "email_address": {
                            "title": "CC Email Addresses",
                            "type": "array",
                            "description": "",
                            "items": {
                                "type": "string",
                                "format": "email"
                            }
                        },
                        "type": {
                            "title": "Type",
                            "type": "string",
                            "description": "",
                            "minLength": 2,
                            "maxLength": 253,
                            "enum": [
                                "original",
                                "specified",
                                "admins"
                            ]
                        }
                    }
                },
                "enabled": {
                    "title": "Enabled",
                    "type": "boolean",
                    "description": "Enable notification",
                    "default": true
                },
                "friendly_name": {
                    "type": "string",
                    "description": "Friendly name of the template",
                    "minLength": 1
                },
                "from": {
                    "title": "From",
                    "type": "string",
                    "description": "From: email address",
                    "format": "email"
                },
                "macros": {
                    "title": "Macros",
                    "type": "object",
                    "description": ""
                },
                "repay_to": {
                    "title": "Repay-To",
                    "type": "string",
                    "description": "Reply-To: email address",
                    "format": "email"
                },
                "subject": {
                    "title": "Subject",
                    "type": "string",
                    "description": "Email subject",
                    "minLength": 1,
                    "maxLength": 200
                },
                "template_charset": {
                    "title": "Template charset",
                    "type": "string",
                    "description": "",
                    "default": "utf-8",
                    "minLength": 1
                },
                "to": {
                    "title": "To",
                    "type": "object",
                    "description": "To email field",
                    "properties": {
                        "email_address": {
                            "title": "Email Addresses",
                            "type": "array",
                            "description": "",
                            "items": {
                                "type": "string",
                                "format": "email"
                            }
                        },
                        "type": {
                            "title": "Type",
                            "type": "string",
                            "description": "",
                            "minLength": 2,
                            "maxLength": 253,
                            "enum": [
                                "original",
                                "specified",
                                "admins"
                            ]
                        }
                    }
                }
            }
        },
        "phone_number": {
            "title": "Phone Number",
            "type": "object",
            "description": "Schema for a phone_number",
            "properties": {
                "cnam": {
                    "type": "object",
                    "properties": {
                        "display_name": {
                            "title": "Display Name",
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 15
                        },
                        "inbound_lookup": {
                            "title": "Inbound Lookup",
                            "type": "boolean"
                        }
                    }
                },
                "dash_e911": {
                    "type": "object",
                    "description": "E911 information for the phone number",
                    "properties": {
                        "activated_time": {
                            "title": "Activated Time (e911)",
                            "type": "string",
                            "description": "The time stamp e911 was provisioned"
                        },
                        "caller_name": {
                            "title": "Caller Name (e911)",
                            "type": "string",
                            "description": "The name that will show to emergency services"
                        },
                        "extended_address": {
                            "title": "Extended Address(e911)",
                            "type": "string",
                            "description": "The suit/floor/apt. address where the number is in service"
                        },
                        "latitude": {
                            "title": "Latitude (e911)",
                            "type": "string",
                            "description": "The e911 provisioning system calculated service address latitude"
                        },
                        "legacy_data": {
                            "type": "object",
                            "description": "Legacy E911 information",
                            "properties": {
                                "house_number": {
                                    "title": "House Number",
                                    "type": "string",
                                    "description": "The name that will show to emergency services"
                                },
                                "predirectional": {
                                    "title": "Predirectional",
                                    "type": "string",
                                    "description": "The name that will show to emergency services"
                                },
                                "streetname": {
                                    "title": "Street Name",
                                    "type": "string",
                                    "description": "The name that will show to emergency services"
                                },
                                "suite": {
                                    "title": "Suite",
                                    "type": "string",
                                    "description": "The name that will show to emergency services"
                                }
                            }
                        },
                        "locality": {
                            "title": "Locality (e911)",
                            "type": "string",
                            "description": "The locality (city) where the number is in service"
                        },
                        "location_id": {
                            "title": "Location ID(e911)",
                            "type": "string",
                            "description": "The e911 provisioning system internal id for this service address"
                        },
                        "longitude": {
                            "title": "Longitude (e911)",
                            "type": "string",
                            "description": "The e911 provisioning system calculated service address longitude"
                        },
                        "plus_four": {
                            "title": "Plus Four (e911)",
                            "type": "string",
                            "description": "The extended zip/postal code where the number is in service"
                        },
                        "postal_code": {
                            "title": "Postal Code (e911)",
                            "type": "string",
                            "description": "The zip/postal code where the number is in service"
                        },
                        "region": {
                            "title": "Region (e911)",
                            "type": "string",
                            "description": "The region (state) where the number is in service"
                        },
                        "status": {
                            "title": "Status (e911)",
                            "type": "string",
                            "description": "The e911 provisioning system status for this service address",
                            "enum": [
                                "INVALID",
                                "GEOCODED",
                                "PROVISIONED",
                                "REMOVED",
                                "ERROR"
                            ]
                        },
                        "street_address": {
                            "title": "Street Address(e911)",
                            "type": "string",
                            "description": "The street address where the number is in service"
                        }
                    }
                },
                "porting": {
                    "type": "object",
                    "description": "Porting (in) information for the phone number",
                    "properties": {
                        "billing_atoount_id": {
                            "title": "Billing Account ID",
                            "type": "string",
                            "description": "The account id the losing carrier has on file"
                        },
                        "billing_extended_address": {
                            "title": "Billing Extended Address",
                            "type": "string",
                            "description": "The suit/floor/apt. address the losing carrier has on file"
                        },
                        "billing_locality": {
                            "title": "Billing Locality",
                            "type": "string",
                            "description": "The locality (city) the losing carrier has on file"
                        },
                        "billing_name": {
                            "title": "Billing Name",
                            "type": "string",
                            "description": "The name or company name the losing carrier has on file"
                        },
                        "billing_postal_code": {
                            "title": "Billing Postal Code",
                            "type": "string",
                            "description": "The zip/postal code the losing carrier has on file"
                        },
                        "billing_region": {
                            "title": "Billing Region",
                            "type": "string",
                            "description": "The region (state) the losing carrier has on file"
                        },
                        "billing_street_address": {
                            "title": "Billing Street Address",
                            "type": "string",
                            "description": "The street address the losing carrier has on file"
                        },
                        "billing_telephone_number": {
                            "title": "Billing Telephone Number",
                            "type": "string",
                            "description": "The BTN of the account the number belongs to"
                        },
                        "comments": {
                            "title": "Comments",
                            "type": "array",
                            "description": "An array of comments",
                            "items": {
                                "type": "string"
                            }
                        },
                        "customer_contact": {
                            "title": "Customer Contact",
                            "type": "string",
                            "description": "The phone number that can be used to contact the owner of the number"
                        },
                        "port_id": {
                            "title": "Port ID",
                            "type": "string",
                            "description": "The id of the port request"
                        },
                        "request_port_date": {
                            "title": "Request Port Date",
                            "type": "string",
                            "description": "The requested port date"
                        },
                        "service_provider": {
                            "title": "Service Provider",
                            "type": "string",
                            "description": "The name of the losing carrier"
                        }
                    }
                }
            }
        },
        "profile": {
            "title": "User extended properties",
            "type": "object",
            "description": "Defines user extended properties",
            "properties": {
                "addresses": {
                    "title": "Addresses",
                    "type": "array",
                    "description": "To specify the components of the addresses",
                    "items": {
                        "type": "object",
                        "properties": {
                            "address": {
                                "title": "Address",
                                "type": "string",
                                "description": "To specify the address"
                            },
                            "types": {
                                "title": "Address type",
                                "type": "array",
                                "description": "To specify types of the address",
                                "items": {
                                    "type": "string",
                                    "enum": [
                                        "dom",
                                        "postal",
                                        "intl",
                                        "parcel",
                                        "work",
                                        "pref"
                                    ]
                                }
                            }
                        }
                    }
                },
                "assistant": {
                    "title": "Assistant",
                    "type": "string",
                    "description": "To specify the user's assistant"
                },
                "birthday": {
                    "title": "Birthday",
                    "type": "string",
                    "description": "To specify the birth date of the user"
                },
                "nicknames": {
                    "title": "Nicknames",
                    "type": "array",
                    "description": "To specify the text corresponding to the nickname of the user",
                    "items": {
                        "type": "string"
                    }
                },
                "note": {
                    "title": "Note",
                    "type": "string",
                    "description": "To specify supplemental information or a comment that is associated with the user"
                },
                "role": {
                    "title": "Role",
                    "type": "string",
                    "description": "To specify the function or part played in a particular situation by the user"
                },
                "sort-string": {
                    "title": "Sort string",
                    "type": "string",
                    "description": "To specify the family name or given name text to be used for nationa -language-specific sorting of the FN and N types"
                },
                "title": {
                    "title": "Title",
                    "type": "string",
                    "description": "To specify the position or job of the user"
                }
            }
        },
        "queue": {
            "title": "Call Queue",
            "type": "object",
            "description": "Call Queues - FIFO call queues for serializing callers connecting to agents",
            "required": [
                "name"
            ],
            "properties": {
                "agent_ring_timeout": {
                    "title": "Agent Ring Timeout",
                    "type": "integer",
                    "description": "In seconds, how long to ring an agent before progressing to the next agent available",
                    "default": 15,
                    "minimum": 1
                },
                "agent_wrapup_time": {
                    "title": "Agent Wrapup Time",
                    "type": "integer",
                    "description": "Pre-defined wait period applied after an agent handles a customer call",
                    "default": 0,
                    "minimum": 0
                },
                "announce": {
                    "title": "Announce",
                    "type": "string",
                    "description": "Media ID (or appropriate media URI) of media to play when caller is about to be connected."
                },
                "caller_exit_key": {
                    "title": "Caller Exit Key",
                    "type": "string",
                    "description": "Key caller can press while on hold to exit the queue and continue in the callflow",
                    "enum": [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "*",
                        "0",
                        "#"
                    ]
                },
                "cdr_url": {
                    "title": "CDR Url",
                    "type": "string",
                    "description": "An optional HTTP URL to POST the CDR",
                    "format": "uri"
                },
                "connection_timeout": {
                    "title": "Connection Timeout",
                    "type": "integer",
                    "description": "In seconds, how long to try to connect the caller before progressing past the queue callflow action",
                    "default": 3600,
                    "minimum": 0
                },
                "enter_when_empty": {
                    "title": "Enter When Empty",
                    "type": "boolean",
                    "description": "Allows a caller to enter a queue and wait when no agents are available",
                    "default": true
                },
                "max_priority": {
                    "title": "Maximum possible priority level",
                    "type": "integer",
                    "description": "Maximum possible priority level queue will support. Can not be redefined for existing queue.",
                    "minimum": 0,
                    "maximum": 255
                },
                "max_queue_size": {
                    "title": "Maximum Queue Size",
                    "type": "integer",
                    "description": "How many callers are allowed to wait on hold in the queue (0 for no limit)",
                    "default": 0
                },
                "moh": {
                    "title": "Moh",
                    "type": "string",
                    "description": "Media ID (or appropriate media URI) of media to play while caller is on hold."
                },
                "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "A friendly name for the queue",
                    "minLength": 1,
                    "maxLength": 128
                },
                "record_caller": {
                    "title": "Record Caller",
                    "type": "boolean",
                    "description": "When enabled, a caller's audio will be recorded",
                    "default": false
                },
                "recording_url": {
                    "title": "Recording URL",
                    "type": "string",
                    "description": "An optional HTTP URL to PUT the call recording after the call ends (and should respond to GET for retrieving the audio data)",
                    "format": "uri"
                },
                "ring_simultaneously": {
                    "title": "Ring Simultaneously",
                    "type": "integer",
                    "description": "The number of agents to try in parallel when connecting a caller",
                    "default": 1,
                    "minimum": 1
                },
                "strategy": {
                    "title": "Strategy",
                    "type": "string",
                    "description": "The queue strategy for connecting agents to callers",
                    "default": "round_robin",
                    "enum": [
                        "round_robin",
                        "most_idle"
                    ]
                }
            }
        },
        "rate": {
            "title": "Rate",
            "type": "object",
            "description": "Defines a rate for a given prefix",
            "required": [
                "prefix",
                "rate_cost"
            ],
            "properties": {
                "carrier": {
                    "title": "Carrier Name",
                    "type": "string",
                    "description": "Friendly name for the carrier providing this rate"
                },
                "description": {
                    "title": "Description",
                    "type": "string",
                    "description": "Friendly description of the rate"
                },
                "internal_rate_cost": {
                    "title": "Internal Cost",
                    "type": "integer",
                    "description": "The per-min rate charged by the upstream provider",
                    "minimum": 0
                },
                "iso_country_code": {
                    "title": "Country Code",
                    "type": "string",
                    "description": "Country code this rate applies to"
                },
                "options": {
                    "title": "Options",
                    "type": "array",
                    "description": "List of options this rate is good for, to be matched against a customer's options",
                    "items": {
                        "type": "string"
                    }
                },
                "prefix": {
                    "title": "Prefix",
                    "type": "integer",
                    "description": "E.164 prefix (ignoring the +)"
                },
                "rate_cost": {
                    "title": "Cost",
                    "type": "integer",
                    "description": "The per-min rate charged to the downstream customer",
                    "minimum": 0
                },
                "rate_increment": {
                    "title": "Increment (seconds)",
                    "type": "integer",
                    "description": "The time slice, in seconds, to bill in.",
                    "default": 60,
                    "minimum": 10
                },
                "rate_minimum": {
                    "title": "Minimum Increment (seconds)",
                    "type": "integer",
                    "description": "The minimum time slice, in seconds to bill a call",
                    "default": 60,
                    "minimum": 10
                },
                "rate_name": {
                    "title": "Name",
                    "type": "string",
                    "description": "Friendly name of the rate"
                },
                "rate_nocharge_time": {
                    "title": "No Charge Time (seconds)",
                    "type": "integer",
                    "description": "If the call duration is shorter than this threshold, the call is not billed",
                    "default": 0,
                    "minimum": 0
                },
                "rate_surcharge": {
                    "title": "Surcharge",
                    "type": "integer",
                    "description": "The upfront cost of connecting the call",
                    "default": 0,
                    "minimum": 0
                },
                "routes": {
                    "title": "Routes",
                    "type": "array",
                    "description": "List of regexs that match valid DIDs for this rate",
                    "items": {
                        "type": "string"
                    }
                },
                "weight": {
                    "title": "Weight",
                    "type": "integer",
                    "description": "Ordering against other rates, 1 being most preferred, 100 being least preferred",
                    "minimum": 1,
                    "maximum": 100
                }
            }
        },
        "resource": {
            "title": "Resource",
            "type": "object",
            "description": "Schema for resources",
            "required": [
                "gateways",
                "name"
            ],
            "properties": {
                "emergency": {
                    "title": "Is Emergency?",
                    "type": "boolean",
                    "description": "Determines if the resource represents emergency services",
                    "default": false
                },
                "enabled": {
                    "title": "Is Enabled?",
                    "type": "boolean",
                    "description": "Determines if the resource is currently enabled",
                    "default": true
                },
                "flags": {
                    "title": "Flags",
                    "type": "array",
                    "description": "A list of flags that can be provided on the request and must match for the resource to be eligible",
                    "default": [],
                    "items": {
                        "type": "string"
                    }
                },
                "format_from_uri": {
                    "title": "Format SIP From?",
                    "type": "boolean",
                    "description": "When set to true requests to this resource will have a re-formated SIP From Header"
                },
                "form_uri_realm": {
                    "title": "SIP From Realm",
                    "type": "string",
                    "description": "When formating SIP From on outbound requests this can be used to override the realm"
                },
                "gateways": {
                    "type": "array",
                    "description": "A list of gateways avaliable for this resource",
                    "items": {
                        "default": {},
                        "properties": {
                            "bypass_media": {
                                "title": "Is Media Direct?",
                                "type": "boolean",
                                "description": "The resource gateway bypass media mode"
                            },
                            "caller_id_type": {
                                "title": "Caller ID Type",
                                "type": "string",
                                "description": "The type of caller id to use",
                                "enum": [
                                    "internal",
                                    "external",
                                    "emergency"
                                ]
                            },
                            "channel_selection": {
                                "title": "Channel Selection (gateways)",
                                "type": "string",
                                "description": "Automatic selection of the channel within the span: ascending starts at 1 and moves up; descending is the opposite",
                                "default": "ascending",
                                "enum": [
                                    "ascending",
                                    "descending"
                                ]
                            },
                            "codecs": {
                                "title": "Codecs",
                                "type": "array",
                                "description": "A list of single list codecs supported by this gateway (to support backward compatibilty)",
                                "uniqueItems": true,
                                "items": {
                                    "type": "string",
                                    "enum": [
                                        "G729",
                                        "PCMU",
                                        "PCMA",
                                        "G722_16",
                                        "G722_32",
                                        "CELT_48",
                                        "CELT_64",
                                        "Speex",
                                        "GSM",
                                        "OPUS",
                                        "H261",
                                        "H263",
                                        "H264",
                                        "VP8"
                                    ]
                                }
                            },
                            "custom_sip_headers": {
                                "title": "Custom SIP Header",
                                "type": "object",
                                "default": {}
                            },
                            "custom_sip_interface": {
                                "title": "SIP Inteface",
                                "type": "string",
                                "description": "The name of a custom SIP interface"
                            },
                            "emergency": {
                                "title": "Is Emergency?",
                                "type": "boolean",
                                "description": "Determines if the resource gateway represents emergency services",
                                "default": false
                            },
                            "enabled": {
                                "title": "Enabled",
                                "type": "boolean",
                                "description": "Determines if the resource gateway is currently enabled",
                                "default": true
                            },
                            "endpoint_type": {
                                "title": "Endpoint Type",
                                "type": "string",
                                "description": "What type of endpoint is this gateway",
                                "default": "sip",
                                "enum": [
                                    "sip",
                                    "freetdm",
                                    "skype",
                                    "amqp"
                                ]
                            },
                            "force_port": {
                                "title": "Force port",
                                "type": "boolean",
                                "description": "Allow request only from this port",
                                "default": false
                            },
                            "format_from_uri": {
                                "title": "Format SIP From?",
                                "type": "boolean",
                                "description": "When set to true requests to this resource gateway will have a re-formated SIP From Header"
                            },
                            "form_uri_realm": {
                                "title": "SIP From Realm",
                                "type": "string",
                                "description": "When formating SIP From on outbound requests this can be used to override the realm"
                            },
                            "invite_format": {
                                "title": "Invite Format",
                                "type": "string",
                                "description": "The format of the DID needed by the underlying hardware/gateway",
                                "default": "route",
                                "enum": [
                                    "route",
                                    "username",
                                    "e164",
                                    "npan",
                                    "1npan"
                                ]
                            },
                            "media": {
                                "title": "Media Options",
                                "type": "object",
                                "description": "The media parameters for the resource gateway",
                                "properties": {
                                    "fax_option": {
                                        "title": "Is T.38 Supported?",
                                        "type": "boolean",
                                        "description": "Support T.38"
                                    }
                                }
                            },
                            "password": {
                                "title": "Password",
                                "type": "string",
                                "description": "SIP authentication password",
                                "maxLength": 32
                            },
                            "port": {
                                "title": "Port",
                                "type": "integer",
                                "description": "This resource gateway port",
                                "default": 5060
                            },
                            "prefix": {
                                "title": "Prefix",
                                "type": "string",
                                "description": "A string to prepend to the dialed number or capture group of the matching rule",
                                "maxLength": 64
                            },
                            "progress_timeout": {
                                "title": "Progress Timeout",
                                "type": "integer",
                                "description": "The progress timeout to apply to the resource gateway"
                            },
                            "realm": {
                                "title": "Realm",
                                "type": "string",
                                "description": "This resource gateway authentication realm",
                                "maxLength": 64
                            },
                            "route": {
                                "title": "Route",
                                "type": "string",
                                "description": "A staticly configured SIP URI to route all call to"
                            },
                            "server": {
                                "title": "Server",
                                "type": "string",
                                "description": "This resource gateway server",
                                "minLength": 1,
                                "maxLength": 64
                            },
                            "skype_interface": {
                                "title": "Skype Interface",
                                "type": "string",
                                "description": "The name of the Skype interface to route the call over"
                            },
                            "skype_rr": {
                                "title": "Skype Round-Robin",
                                "type": "boolean",
                                "description": "Determines whether to round-robin calls amongst all interfaces (overrides 'skype_interface' setting)",
                                "default": true
                            },
                            "span": {
                                "title": "Span",
                                "type": "string",
                                "description": "The identity of the hardware on the media server"
                            },
                            "suffix": {
                                "title": "Suffix",
                                "type": "string",
                                "description": "A string to append to the dialed number or capture group of the matching rule",
                                "maxLength": 64
                            },
                            "username": {
                                "title": "Username",
                                "type": "string",
                                "description": "SIP authentication username",
                                "maxLength": 32
                            }
                        }
                    }
                },
                "grace_period": {
                    "title": "Grace Period",
                    "type": "integer",
                    "description": "The amount of time, in seconds, to wait before starting another resource",
                    "default": 5,
                    "minimum": 1,
                    "maximum": 20
                },
                "media": {
                    "title": "Default Resource Media Parameters",
                    "type": "object",
                    "description": "The default resouce media parameters applied if not present to all specified gateways",
                    "default": {},
                    "properties": {
                        "audio": {
                            "title": "Audio Options",
                            "type": "object",
                            "description": "The default audio media parameters",
                            "default": {},
                            "properties": {
                                "codecs": {
                                    "title": "Codecs",
                                    "type": "array",
                                    "description": "A list of default codecs to use",
                                    "default": [
                                        "PCMU"
                                    ],
                                    "items": {
                                        "type": "string",
                                        "enum": [
                                            "OPUS",
                                            "CELT@32000h",
                                            "G7221@32000h",
                                            "G7221@16000h",
                                            "G722",
                                            "speex@32000h",
                                            "speex@16000h",
                                            "PCMU",
                                            "PCMA",
                                            "G729",
                                            "GSM",
                                            "CELT@48000h",
                                            "CELT@64000h",
                                            "G722_16",
                                            "G722_32",
                                            "CELT_48",
                                            "CELT_64",
                                            "Speex",
                                            "speex"
                                        ]
                                    }
                                }
                            }
                        },
                        "bypass_media": {
                            "title": "Is Media Direct?",
                            "type": "boolean",
                            "description": "Default bypass media mode"
                        },
                        "fax_option": {
                            "title": "Is T.38 Supported?",
                            "type": "boolean",
                            "description": "Support T.38"
                        },
                        "ignore_early_media": {
                            "title": "Ignore Early Media?",
                            "type": "boolean",
                            "description": "The option to determine if early media from the device should always be ignored"
                        },
                        "progress_timeout": {
                            "title": "Progress Timeout (seconds)",
                            "type": "integer",
                            "description": "The progress timeout to apply to the device"
                        },
                        "video": {
                            "title": "Video Options",
                            "type": "object",
                            "description": "The default video media parameters",
                            "default": {},
                            "properties": {
                                "codecs": {
                                    "type": "array",
                                    "description": "A list of default codecs to use",
                                    "default": [],
                                    "items": {
                                        "type": "string",
                                        "enum": [
                                            "VP8",
                                            "H264",
                                            "H263",
                                            "H261"
                                        ]
                                    }
                                }
                            }
                        }
                    }
                },
                "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "A friendly name for the resource",
                    "minLength": 1,
                    "maxLength": 128
                },
                "require_flags": {
                    "title": "Require Flags?",
                    "type": "boolean",
                    "description": "When set to true this resource is ignored if the request does not specify outbound flags"
                },
                "rules": {
                    "title": "Rules",
                    "type": "array",
                    "description": "A list of regular expressions of which one must match for the rule to be eligible, they can optionally contain capture groups",
                    "items": {
                        "type": "string"
                    }
                },
                "weight_cost": {
                    "title": "Weight Cost",
                    "type": "integer",
                    "description": "A value between 0 and 100 that determines the order of resources when multiple can be used",
                    "default": 50,
                    "minimum": 0,
                    "maximum": 100
                }
            }
        },
        "service_plan": {
            "title": "Service Plan",
            "type": "object",
            "description": "Describes services offered to sub-accounts",
            "required": [
                "name",
                "plan"
            ],
            "properties": {
                "bookkeepers": {
                    "type": "object",
                    "$ref": "#/definitions/bookkeeper"
                },
                "description": {
                    "type": "string",
                    "description": "Describes the service plan offering"
                },
                "name": {
                    "title": "Service Plan Name",
                    "type": "string",
                    "description": "A friendly name for the service plan",
                    "minLength": 1,
                    "maxLength": 128
                },
                "plan": {
                    "type": "object",
                    "description": "Outlines the service plan for various services"
                }
            }
        },
        "temporal_rule": {
            "title": "Temporal Rule",
            "type": "object",
            "description": "Schema for a temporal rules",
            "required": [
                "name"
            ],
            "properties": {
                "cycle": {
                    "title": "Cycle",
                    "type": "string",
                    "description": "The recurrence cycle for this rule",
                    "enum": [
                        "date",
                        "daily",
                        "weekly",
                        "monthly",
                        "yearly"
                    ]
                },
                "days": {
                    "title": "Days",
                    "type": "array",
                    "description": "The recurrence days for this rule",
                    "items": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 31
                    }
                },
                "interval": {
                    "title": "Interval",
                    "type": "integer",
                    "description": "The recurrence interval for this rule",
                    "default": 1,
                    "minimum": 1
                },
                "month": {
                    "title": "Month",
                    "type": "integer",
                    "description": "The recurrence month for this rule",
                    "minimum": 1,
                    "maximum": 12
                },
                "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "A friendly name for the temporal rule",
                    "minLength": 1,
                    "maxLength": 128
                },
                "ordinal": {
                    "title": "Ordinal",
                    "type": "string",
                    "description": "The recurrence ordinal for this rule",
                    "enum": [
                        "every",
                        "first",
                        "second",
                        "third",
                        "fourth",
                        "fifth",
                        "last"
                    ]
                },
                "start_date": {
                    "title": "Start Date",
                    "type": "integer",
                    "description": "The date that any recurrence should be calculated as starting on",
                    "default": 62586115200
                },
                "time_window_start": {
                    "title": "Time Window Start",
                    "type": "integer",
                    "description": "Seconds from the start of a day to stop considering this rule valid",
                    "minimum": 0,
                    "maximum": 86400
                },
                "wdays": {
                    "title": "Week Days",
                    "type": "array",
                    "description": "The recurrence weekdays for this rule",
                    "items": {
                        "type": "string",
                        "enum": [
                            "monday",
                            "tuesday",
                            "wednesday",
                            "wensday",
                            "thursday",
                            "friday",
                            "saturday",
                            "sunday"
                        ]
                    }
                }
            }
        },
        "temporal_rules_set": {
            "title": "Temporal Rule Set",
            "type": "object",
            "description": "Schema for a temporal rules sets",
            "required": [
                "name"
            ],
            "properties": {
                "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "A friendly name for the temporal rule set",
                    "minLength": 1,
                    "maxLength": 128
                },
                "temporal_rules": {
                    "title": "Temporal Rules",
                    "type": "array",
                    "description": "Rules",
                    "minItems": 1,
                    "items": {
                        "type": "string"
                    }
                }
            }
        },
        "token_restriction": {
            "title": "Token restrictions",
            "type": "object",
            "description": "Schema for token restrictions",
            "properties": {
                "restrictions": {
                    "type": "object",
                    "required": [
                        "^\\w+$"
                    ],
                    "properties": {
                        "^\\w+$": {
                            "title": "Auth method",
                            "type": "object",
                            "description": "Name of athentication metod used when creating token. '_' for match any auth method",
                            "required": [
                                "^\\w+$"
                            ],
                            "properties": {
                                "^\\w+$": {
                                    "title": "User priv level",
                                    "type": "object",
                                    "description": "User privelege level. '_' for match any priv level",
                                    "required": [
                                        "^\\w+$"
                                    ],
                                    "properties": {
                                        "^\\w+$": {
                                            "type": "array",
                                            "items": {
                                                "title": "Endpoint",
                                                "type": "object",
                                                "description": "Endpoint (first path token) to wich apply restrictions. '_' for match any endpoint",
                                                "properties": {
                                                    "allowed_account": {
                                                        "title": "Allowed accounts",
                                                        "type": "array",
                                                        "description": "Account allowed to match this item",
                                                        "items": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "rules": {
                                                        "title": "Rules",
                                                        "type": "object",
                                                        "description": "Rules applied to endpoint parameters",
                                                        "properties": {
                                                            "^[\\w/#*]+$": {
                                                                "title": "Verbs",
                                                                "type": "array",
                                                                "items": {
                                                                    "type": "string",
                                                                    "enum": [
                                                                        "GET",
                                                                        "PUT",
                                                                        "POST",
                                                                        "PATCH",
                                                                        "DELETE",
                                                                        "_"
                                                                    ]
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "user": {
            "title": "User",
            "type": "object",
            "description": "Schema for a user",
            "required": [
                "first_name",
                "last_name"
            ],
            "properties": {
                "call_forward": {
                    "title": "Call Forwarding Parameters",
                    "type": "object",
                    "description": "The device call forward parameters",
                    "properties": {
                        "direct_calls_only": {
                            "title": "Direct Calls Only?",
                            "type": "boolean",
                            "description": "Determines if the calls that are not directly sent to the device should be forwarded",
                            "default": false
                        },
                        "enabled": {
                            "title": "Is Enabled?",
                            "type": "boolean",
                            "description": "Determines if the call forwarding should be used",
                            "default": false
                        },
                        "failover": {
                            "title": "Use if Device Offline?",
                            "type": "boolean",
                            "description": "Enable the call-forwarding parameters if the device is offline",
                            "default": false
                        },
                        "ignore_early_media": {
                            "title": "Ignore Early Media?",
                            "type": "boolean",
                            "description": "The option to determine if early media from the call forwarded number should ignored",
                            "default": true
                        },
                        "keep_caller_id": {
                            "title": "Keep Original Caller ID?",
                            "type": "boolean",
                            "description": "Determines if the caller id is kept when the call is forwarded, if not the devices caller id is used",
                            "default": true
                        },
                        "number": {
                            "title": "Number",
                            "type": "string",
                            "description": "The number to forward calls to",
                            "maxLength": 35
                        },
                        "require_keypress": {
                            "title": "Require Keypress?",
                            "type": "boolean",
                            "description": "Determines if the callee is prompted to press 1 to accept the call",
                            "default": true
                        },
                        "substitute": {
                            "title": "Substitute Device?",
                            "type": "boolean",
                            "description": "Determines if the call forwarding replaces the device",
                            "default": true
                        }
                    }
                },
                "call_restriction": {
                    "title": "Call Restrictions",
                    "type": "object",
                    "description": "Device level call restrictions for each available number classification",
                    "default": {},
                    "additionalProperties": {
                        "properties": {
                            "action": {
                                "title": "Action",
                                "type": "object",
                                "description": "If set to deny all calls of this type will be rejected. If set to inherit the user/device rules apply",
                                "enum": [
                                    "inherit",
                                    "deny"
                                ]
                            }
                        }
                    }
                },
                "call_waiting": {
                    "$ref": "#/definitions/call_waiting"
                },
                "caller_id": {
                    "type": "object",
                    "description": "The device caller ID parameters",
                    "default": {},
                    "$ref": "#/definitions/caller_id"
                },
                "contact_list": {
                    "title": "Contect List Parameters",
                    "type": "object",
                    "properties": {
                        "exclude": {
                            "title": "Is Excluded?",
                            "type": "boolean",
                            "description": "If set to true the device is excluded from the contact list"
                        }
                    }
                },
                "dial_plan": {
                    "title": "Dialplan",
                    "type": "object",
                    "description": "A list of rules used to modify dialed numbers",
                    "default": {},
                    "additionalProperties": {
                        "properties": {
                            "description": {
                                "title": "Name",
                                "type": "string",
                                "description": "Friendly name for this regex dialplan"
                            },
                            "prefix": {
                                "title": "Prefix",
                                "type": "string",
                                "description": "Prefix the prepend to the capture group after applying the regex"
                            },
                            "suffix": {
                                "title": "Suffix",
                                "type": "string",
                                "description": "Suffix the append to the capture group after applying the regex"
                            }
                        }
                    }
                },
                "directories": {
                    "title": "Directories",
                    "type": "object",
                    "description": "Provides the mappings for what directory the user is a part of (the key), and what callflow (the value) to invoke if the user is selected by the caller.",
                    "default": {},
                    "$ref": "#/definitions/directory"
                },
                "do_not_distrip": {
                    "title": "DND Parameters",
                    "type": "object",
                    "properties": {
                        "enabled": {
                            "title": "Enabled?",
                            "type": "boolean",
                            "description": "Is do-not-disturb enabled for this user?"
                        }
                    }
                },
                "email": {
                    "title": "Email",
                    "type": "string",
                    "description": "The email of the user",
                    "minLength": 1,
                    "maxLength": 254,
                    "format": "email"
                },
                "enabled": {
                    "title": "Enabled",
                    "type": "boolean",
                    "description": "Determines if the user is currently enabled",
                    "default": true
                },
                "first_name": {
                    "title": "First Name",
                    "type": "string",
                    "description": "The first name of the user",
                    "minLength": 1,
                    "maxLength": 128
                },
                "hotdesc": {
                    "title": "Hotdesk Parameters",
                    "type": "object",
                    "description": "The user hotdesk parameters",
                    "default": {},
                    "properties": {
                        "enabled": {
                            "title": "Enabled?",
                            "type": "boolean",
                            "description": "Determines if the user has hotdesking enabled",
                            "default": false
                        },
                        "id": {
                            "title": "ID",
                            "type": "string",
                            "description": "The users hotdesk id",
                            "maxLength": 15
                        },
                        "keep_logged_in_elsewhere": {
                            "title": "Keep Logged (hotdesk)",
                            "type": "boolean",
                            "description": "Determines if user should be able to login to mutliple phones simultaneously",
                            "default": false
                        },
                        "pin": {
                            "title": "Pin",
                            "type": "string",
                            "description": "The users hotdesk pin number",
                            "minLength": 4,
                            "maxLength": 15
                        },
                        "require_pin": {
                            "title": "Require Pin?",
                            "type": "boolean",
                            "description": "Determines if user requires a pin to change the hotdesk state",
                            "default": false
                        }
                    }
                },
                "language": {
                    "title": "Language",
                    "type": "string",
                    "description": "The language for this user",
                    "default": "en-us"
                },
                "last_name": {
                    "title": "Last Name",
                    "type": "string",
                    "description": "The last name of the user",
                    "minLength": 1,
                    "maxLength": 128
                },
                "media": {
                    "title": "Media Parameters",
                    "type": "object",
                    "description": "The device media parameters",
                    "default": {},
                    "properties": {
                        "audio": {
                            "title": "Audio Options",
                            "type": "object",
                            "description": "The audio media parameters",
                            "default": {},
                            "properties": {
                                "codecs": {
                                    "title": "Codecs",
                                    "type": "array",
                                    "description": "A list of audio codecs the device supports",
                                    "default": [
                                        "PCMU"
                                    ],
                                    "items": {
                                        "type": "string",
                                        "enum": [
                                            "OPUS",
                                            "CELT@32000h",
                                            "G7221@32000h",
                                            "G7221@16000h",
                                            "G722",
                                            "speex@32000h",
                                            "speex@16000h",
                                            "PCMU",
                                            "PCMA",
                                            "G729",
                                            "GSM",
                                            "CELT@48000h",
                                            "CELT@64000h",
                                            "G722_16",
                                            "G722_32",
                                            "CELT_48",
                                            "CELT_64",
                                            "Speex",
                                            "speex"
                                        ]
                                    }
                                }
                            }
                        },
                        "bypass_media": {
                            "title": "Is Media Direct?",
                            "type": "array",
                            "description": "Default bypass media mode",
                            "enum": [
                                true,
                                false,
                                "auto"
                            ],
                            "items": {
                                "type": "string"
                            }
                        },
                        "encription": {
                            "title": "Encryption Parameters",
                            "type": "object",
                            "default": {},
                            "properties": {
                                "enforce_sequrity": {
                                    "title": "Is Encryption Enabled?",
                                    "type": "boolean",
                                    "default": false
                                },
                                "methods": {
                                    "title": "Supported Encryption Types",
                                    "type": "array",
                                    "default": [],
                                    "items": {
                                        "type": "string",
                                        "enum": [
                                            "zrtp",
                                            "srtp"
                                        ]
                                    }
                                }
                            }
                        },
                        "fax_option": {
                            "title": "Is T.38 Supported?",
                            "type": "boolean",
                            "description": "Support T.38"
                        },
                        "ignore_early_media": {
                            "title": "Ignore Early Media?",
                            "type": "boolean",
                            "description": "The option to determine if early media from the device should always be ignored"
                        },
                        "progress_timeout": {
                            "title": "Progress Timeout (seconds)",
                            "type": "integer",
                            "description": "The progress timeout to apply to the device"
                        },
                        "video": {
                            "title": "Video Options",
                            "type": "object",
                            "description": "The video media parameters",
                            "default": {},
                            "properties": {
                                "codecs": {
                                    "type": "array",
                                    "description": "A list of video codecs the device supports",
                                    "default": [],
                                    "items": {
                                        "type": "string",
                                        "enum": [
                                            "VP8",
                                            "H264",
                                            "H263",
                                            "H261"
                                        ]
                                    }
                                }
                            }
                        }
                    }
                },
                "metaflows": {
                    "title": "Metaflow Parameters",
                    "description": "The device metaflow parameters",
                    "$ref": "#/definitions/metaflow"
                },
                "music_on_hold": {
                    "title": "Music on Hold",
                    "type": "object",
                    "description": "The music on hold parameters used if not a property of the device owner",
                    "default": {},
                    "properties": {
                        "media_id": {
                            "title": "Media ID",
                            "type": "string",
                            "description": "The ID of a media object that should be used as the music on hold",
                            "maxLength": 128
                        }
                    }
                },
                "presence_id": {
                    "title": "Presence ID",
                    "type": "string",
                    "description": "User's presence ID"
                },
                "priv_level": {
                    "title": "Priv Level",
                    "type": "string",
                    "description": "The privilege level of the user",
                    "default": "user",
                    "enum": [
                        "user",
                        "admin"
                    ]
                },
                "profile": {
                    "type": "object",
                    "description": "User's profile data",
                    "default": {},
                    "$ref": "#/definitions/profile"
                },
                "pronounced_name": {
                    "title": "Pronounced name",
                    "type": "object",
                    "description": "Name pronounced by user to introduce himself to conference members",
                    "properties": {
                        "media_id": {
                            "title": "Media ID",
                            "type": "string",
                            "description": "The ID of a media object that should be used as the music on hold",
                            "maxLength": 128
                        }
                    }
                },
                "require_password_update": {
                    "title": "Require Password Update",
                    "type": "boolean",
                    "description": "UI flag that the user should update their password",
                    "default": false
                },
                "ringtones": {
                    "title": "Ringtone Parameters",
                    "type": "object",
                    "default": {},
                    "properties": {
                        "external": {
                            "title": "External",
                            "type": "string",
                            "description": "The alert info SIP header added when the call is from internal sources",
                            "maxLength": 256
                        },
                        "internal": {
                            "title": "Internal",
                            "type": "string",
                            "description": "The alert info SIP header added when the call is from external sources",
                            "maxLength": 256
                        }
                    }
                },
                "timezone": {
                    "title": "Timezone",
                    "type": "string",
                    "description": "User's timezone"
                },
                "username": {
                    "title": "Username",
                    "type": "string",
                    "description": "The GUI login username - alpha-numeric, dashes, at symbol, periods, plusses, and underscores allowed",
                    "minLength": 1,
                    "maxLength": 256,
                    "pattern": "^([+@.\\w_-]+)$"
                },
                "verified": {
                    "title": "Verified",
                    "type": "boolean",
                    "description": "Determines if the user has been verified",
                    "default": false
                },
                "vm_to_email_enabled": {
                    "title": "VM To Emain Enabled",
                    "type": "boolean",
                    "description": "Determines if the user would like voicemails emailed to them",
                    "default": true
                }
            }
        },
        "vmboxe": {
            "title": "Voicemail Box",
            "type": "object",
            "description": "Schema for a voicemail box",
            "required": [
                "mailbox",
                "name"
            ],
            "properties": {
                "check_if_owner": {
                    "title": "Check if Owner?",
                    "type": "boolean",
                    "description": "Determines if when the user calls their own voicemail they should be prompted to sign in",
                    "default": true
                },
                "delete_after_notify": {
                    "title": "Delete after Notify?",
                    "type": "boolean",
                    "description": "Delete the voicemail after the notifiction has been sent",
                    "default": false
                },
                "is_setup": {
                    "title": "Is Setup?",
                    "type": "boolean",
                    "description": "Determines if the user has completed the initial configuration",
                    "default": false
                },
                "mailbox": {
                    "title": "Mailbox",
                    "type": "string",
                    "description": "The voicemail box number",
                    "minLength": 1,
                    "maxLength": 30
                },
                "media": {
                    "title": "Media Parameters",
                    "type": "object",
                    "description": "The media (prompt) parameters",
                    "default": {},
                    "properties": {
                        "unavailable": {
                            "title": "Media ID",
                            "type": "string",
                            "description": "The ID of a media object that should be used as the unavailable greeting",
                            "minLength": 32,
                            "maxLength": 32
                        }
                    }
                },
                "messages": {
                    "title": "Messages",
                    "type": "array",
                    "description": "The messages that have been left in the voicemail box",
                    "default": [],
                    "items": {
                        "type": "object",
                        "properties": {
                            "call_id": {
                                "title": "Call ID",
                                "type": "string",
                                "description": "The SIP call-id"
                            },
                            "caller_id_name": {
                                "title": "Caller ID Name",
                                "type": "string",
                                "description": "The reported caller id name",
                                "maxLength": 35
                            },
                            "caller_id_number": {
                                "title": "Caller ID Number",
                                "type": "string",
                                "description": "The reported caller id number",
                                "maxLength": 35
                            },
                            "folder": {
                                "title": "Folder",
                                "type": "string",
                                "description": "The folder the message belongs to",
                                "enum": [
                                    "deleted",
                                    "saved",
                                    "new"
                                ]
                            },
                            "from": {
                                "title": "From",
                                "type": "string",
                                "description": "The SIP from header"
                            },
                            "length": {
                                "title": "Length",
                                "type": "integer"
                            },
                            "media_id": {
                                "title": "Media ID",
                                "type": "string",
                                "description": "The ID of the message media object",
                                "minLength": 32,
                                "maxLength": 32
                            },
                            "timestamp": {
                                "title": "Timestamp",
                                "type": "integer",
                                "description": "The UTC timestamp, in gregorian seconds, that the voicemail was left on"
                            },
                            "to": {
                                "title": "To",
                                "type": "string",
                                "description": "The SIP to header"
                            }
                        }
                    }
                },
                "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "A friendly name for the voicemail box",
                    "minLength": 1,
                    "maxLength": 128
                },
                "not_configurable": {
                    "title": "Is configurable?",
                    "type": "boolean",
                    "description": "Determines if the user can configure this voicemail.",
                    "default": false
                },
                "notify_email_address": {
                    "title": "Email Addresses",
                    "type": "array",
                    "description": "List of email addresses to send notifications to (in addition to owner's email, if any)",
                    "default": [],
                    "items": {
                        "type": "string",
                        "format": "email"
                    }
                },
                "owner_id": {
                    "title": "Owner ID",
                    "type": "string",
                    "description": "The ID of the user object that 'owns' the voicemail box",
                    "minLength": 32,
                    "maxLength": 32
                },
                "pin": {
                    "title": "Pin",
                    "type": "string",
                    "description": "The pin number for the voicemail box",
                    "minLength": 4,
                    "maxLength": 15
                },
                "require_pin": {
                    "title": "Require Pin?",
                    "type": "boolean",
                    "description": "Determines if a pin is required to check the voicemail from the users devices",
                    "default": false
                },
                "skip_greeting": {
                    "title": "Skip Greeting?",
                    "type": "boolean",
                    "description": "Determines if the greeting should be skipped",
                    "default": false
                },
                "skip_instructions": {
                    "title": "Skip Instructions?",
                    "type": "boolean",
                    "description": "Determines if the instructions after the greeting and prior to composing a message should be played",
                    "default": false
                },
                "timezone": {
                    "title": "Timezone",
                    "type": "string",
                    "description": "The default timezone",
                    "minLength": 5,
                    "maxLength": 32
                }
            }
        },
        "whitelabel": {
            "title": "Whitelabel",
            "type": "object",
            "description": "Whitelabel settings",
            "properties": {
                "company_name": {
                    "title": "Company Name",
                    "type": "string",
                    "description": "The company name to display to users"
                },
                "domain": {
                    "title": "Domain",
                    "type": "string",
                    "description": "This is the whitelabeled domain that users will be entering to reach the UI",
                    "format": "uri"
                },
                "fake_api_url": {
                    "title": "API URL",
                    "type": "string",
                    "description": "This is a whitelabeled API URL, primarily used by the developer application",
                    "format": "uri"
                },
                "hide_credits": {
                    "title": "Hide Credits?",
                    "type": "boolean",
                    "description": "When checkef this hides the credits",
                    "default": false
                },
                "hide_powered": {
                    "title": "Hide Powered?",
                    "type": "boolean",
                    "description": "When checked this hides the powered by 2600hz on the bottom right",
                    "default": false
                },
                "hide_registration": {
                    "title": "Hide Registration?",
                    "type": "boolean",
                    "description": "When checked this hides the ability to register for a new account",
                    "default": false
                },
                "inbound_trunks_price": {
                    "title": "Inbound Trunk Price",
                    "type": "string",
                    "description": "The price to show for inbound trunks, this is currently only for display purposes"
                },
                "nav": {
                    "title": "Navigation Parameters",
                    "type": "object",
                    "description": "Properties related to navigation in the UI",
                    "properties": {
                        "help": {
                            "title": "Help URL",
                            "type": "string",
                            "description": "The URL to use when the help link is clicked",
                            "format": "uri"
                        },
                        "learn_more": {
                            "title": "Learn More URL",
                            "type": "string",
                            "description": "The URL to use when the 'Learn More!' link is clicked",
                            "format": "uri"
                        }
                    }
                },
                "outbound_trunks_price": {
                    "title": "Outbound Trunk Price",
                    "type": "string",
                    "description": "The price to show for outbound trunks, this is currently only for display purposes"
                },
                "port": {
                    "title": "Port Paramaters",
                    "type": "object",
                    "description": "Parameters releated to whitelabeling port requests",
                    "properties": {
                        "features": {
                            "title": "Features URL",
                            "type": "string",
                            "description": "The URL to use when the features link is clicked",
                            "format": "uri"
                        },
                        "loa": {
                            "title": "LOA URL",
                            "type": "string",
                            "description": "The URL to use when the LOA link is clicked",
                            "format": "uri"
                        },
                        "resporg": {
                            "title": "Resporg URL",
                            "type": "string",
                            "description": "The URL to use when the resporg link is clicked",
                            "format": "uri"
                        },
                        "support_email": {
                            "title": "Support Email",
                            "type": "string",
                            "description": "The support email address to display to the user",
                            "format": "email"
                        },
                        "terms": {
                            "title": "Terms URL",
                            "type": "string",
                            "description": "The URL to use when the terms and conditions link is clicked",
                            "format": "uri"
                        }
                    }
                },
                "twoway_trunks_price": {
                    "title": "Twoway Trunk Price",
                    "type": "string",
                    "description": "The price to show for twoway trunks, this is currently only for display purposes"
                }
            }
        }
    }
};