# Upwear (clothing website)

Hello everyone, this is a Readme for my construct week project that has been completed successfully within the duration of 5 days. It was a solo project. I've made the website with reference from myntra.com . I've created Home page , Signup page , Login page, profile and upwear products page.

### Live Links

- [Frontend](https://extraordinary-pavlova-536bcb.netlify.app/)

- [Backend](https://gold-lively-peacock.cyclic.app/products)

- [Blog](https://medium.com/@chetandabli/upwear-solo-project-5f7955b216b2)

<img src="https://extraordinary-pavlova-536bcb.netlify.app/img/logo.png">

## Features

- **Authentication:** The project includes JWT-based authentication to secure user data.
- **Authorization:** The project includes role-based authorization to restrict access to certain routes or functionality.
- **Cross-platform compatibility:** The project is designed to be compatible across multiple platforms and devices.
- **Hashing:** User passwords are securely hashed to protect against unauthorized access.
- **dotenv:** The project uses `dotenv` to manage environment variables and sensitive configuration data.
- **Relationship:** The project includes database schema relationships between collections to support complex data structures.
- **Aggregation:** The project uses MongoDB's aggregation framework to perform advanced queries and data manipulations.

    
## Tech Stack

- HTML/CSS/JavaScript
- Node.js
- Express.js
- MongoDB

## API Endpoints

| HTTP Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/user/register` | Register a new user |
| POST | `/user/login` | Login as an user |
| POST | `/admin/register` | Register a new admin |
| POST | `/admin/login` | Login as an admin |
| GET | `/products` | Retrieve all products |
| GET | `/products/:id` | Retrieve a specific product by its ID |
| POST | `/products` | Add a new product |
| PUT | `/products/:id` | Update a specific product by its ID |
| DELETE | `/products/:id` | Delete a specific product by its ID |
| GET | `/cart` | Retrieve all products in the cart for a specific user |
| GET | `/cart/verify` | Verify if the cart route is working |
| POST | `/cart` | Add a product to the cart |
| DELETE | `/cart/:id` | Remove a product from the cart by its ID |
| DELETE | `/cart` | Remove all products from the cart after placing an order |
| GET | `/order` | Retrieve the order history for a specific user |
| POST | `/order` | Place an order |
| DELETE | `/order/:id` | Delete a specific order by its ID |
| PATCH | `/order/:id` | Update the rating for a specific order by its ID |


## Database Schema

### User

| Field Name | Data Type | Required |
| ---------- | ---------| -------- |
| _id        | ObjectId | Yes      |
| name       | String   | Yes      |
| email      | String   | Yes      |
| password   | String   | Yes      |

### Cart

| Field Name | Data Type | Required |
| ---------- | ---------| -------- |
| _id        | ObjectId | Yes      |
| userID     | ObjectId | Yes      |
| productid  | ObjectId | Yes      |

### Order History

| Field Name | Data Type | Required |
| ---------- | ---------| -------- |
| _id        | ObjectId | Yes      |
| userID     | ObjectId | Yes      |
| productid  | ObjectId | Yes      |
| createdAt  | Date     | Yes      |
| rate       | Number   | No       |
| is_delivered| Boolean  | No       |

### Product

| Field Name        | Data Type | Required |
| ----------------- | ---------| -------- |
| _id               | ObjectId | Yes      |
| category          | String   | Yes      |
| title             | String   | Yes      |
| subtitle          | String   | No       |
| discounted_price  | Number   | Yes      |
| strike_price      | Number   | Yes      |
| discount          | String   | No       |
| images            | String   | Yes      |
| size              | Array    | Yes      |
| rating            | Number   | No       |
| rating_count      | String   | No       |

    
# Glimpse and Screenshots of this project website:

## A. Homepage

this is the home page of this website. navbar and footer are available across the website.

<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*TMe7ZkiwftIDjoZ1wlNHzw.png">

## B. Navbar

This is the Navbar of this website. the Navbar will show the respective Page.

<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*CBRpK9aMIuHmI3ge46jA5Q.png">

## C. Footer

Here we have a footer of our website where users can go on different pages and social media.

<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*XILGbMi5duEOOFH1vcd3yw.png">

## D. Login and Signup

If the user is registered with the website, only then he/she can log in with their respective email id & password. After successful login, the user can add the product to the cart and see the profile page where user details and order history are present.

<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*-lvqayzAxIVPcLxheUE_bg.png">

<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Us9IPtgozDRjUEDneY8WhA.png">

## E. Product Page

This is the Product page of our website, Users must be logged in on our website so he/she can able to add the product to the cart.

<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*LHyR_Q9fsigW-Gw_vHDzHg.png">

## F. Cart

You can see the order summary and the product that is added to the cart and you can place an order from here.

<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KjAchvbBCYzkBKG60cS05A.png">

## G. Profile

- user can see their account details and order history on this page and also user can log out from here.
- user can cancel pending orders or rate the product if order is delivered.

<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*LQeIkq5GXeroLdFyqBHi5w.png">

So thanks for reading this. this is all about this project.

