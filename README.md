# Basic React Shop demo

This website is small e-shop using:
- React 17.0.1
- React Hooks
- React Context API
- Typescript

<br />

## Librairies
- react-router-dom
- react-bootstrap
- react-slick
- react-select
- react-loader-spinner

<br />

## API
For a purpose of fucussing on the frontend side, this project uses json-server to handle the API requests.

<br />

## Improvements
- API (custom or within the cloud)
- Backoffice
- Payement (datatrans, stripe, etc...)
- Cloud such as AWS or Firebase to handle
    - sms / email for user registration
    - e-mail for purchase confirmation

<br />

## Structure

### Home page
- Contains the best rated offers

### Listing
- Contains all the offers
- Possibility to filter by location

### Detail
- A detailed page about a specific offer
- Handle the cart ( add, increase, decrease, remove )

### Auth
- Login form
- Signup form

### User space (protected)
- Not completed but it it cound contain
    - A table of all the user orders
    - A form to complete / change all user data such as
        - Firstname
        - Lastname
        - Address
        - etc...

<br />

## Start the project

```
yarn json-server
start a server on port 3001
```

```
yarn install
yarn start
start a server on port 3000
```

```
Credentials to access the user personal space:
e-mail: john@doe.com
password: test123
```