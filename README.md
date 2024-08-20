
# Account Manager Service

Created for take home assignment. make sure to add your own api key and base url on the docker-compose.yml

  

## Endpoint List

### 1. Register

**Endpoint:** `POST /user/register`

**Description:** Register to supabase auth (3rd party auth system)

**Request:**

-   **URL Body:**
    - username : string
    - email : string
    - password : string

### 2. Signin

**Endpoint:** `POST /user/signin`

**Description:** Signin to supabase auth (3rd party auth system)

**Request:**

-   **URL Body:**
    - email : string
    - password : string

### 3. Create Payment Account

**Endpoint** : `POST /payment-account/create`

**Description:** Create Payment Account

**Request**
	- **URL Header**
		- Authorization : Bearer {string}
	- **URL Body**
		- user_id : string
		- account_type : string

### 4. Get Payment Account

**Endpoint** : `POST /payment-account/list`

**Description:** Get All Payment Account from the correspondence user id

**Request**
	- **URL Header**
		- Authorization : Bearer {string}
	- **URL Body**
		- user_id : string

### 5. List Payment Account History

**Endpoint** : `POST /payment-account-history/`

**Description:** Get All Payment Account History from the correspondence user id

**Request**
	- **URL Header**
		- Authorization : Bearer {string}
	- **URL Body**
		- user_id : string



  

## How to run the service

  

1. docker compose build

2. docker compose up

3. the api should be accessible to the external network