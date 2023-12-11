# Sign In Sign Up Escribo


## It includes the following:

* Backend API with Express & MongoDB</br>
* Routes for auth, logout, register, profile, update profile</br>
* JWT authentication stored in HTTP-only cookie</br>
* Protected routes and endpoints</br>
* Custom middleware to check JSON web token and store in cookie</br>
* Custom error middleware</br>
* React frontend to register, login, logout, view profile, and update profile</br>
* React Bootstrap UI library</br>
* React Toastify notifications</br>

Home Page
![image](https://github.com/luanabaratta/signIn-signUp-escribo/assets/68722599/a6d872df-d31f-44e8-b220-10ed955c12cc)

Register
![image](https://github.com/luanabaratta/signIn-signUp-escribo/assets/68722599/b4d0dbfd-af37-4174-b2b0-d2bcf13d2648)

Login
![image](https://github.com/luanabaratta/signIn-signUp-escribo/assets/68722599/0f75be51-ce9d-4859-882c-286202ef351a)

Profile
![image](https://github.com/luanabaratta/signIn-signUp-escribo/assets/68722599/405bb438-5a72-4e28-adf3-05876bf2bad9)

## Test
![image](https://github.com/luanabaratta/signIn-signUp-escribo/assets/68722599/034699aa-23d4-480d-b01d-597da52f1c3b)

## Usage

### Env Variables

Add _.env_ file

```
  NODE_ENV = development
  PORT = 4000
  MONGO_URI = your mongodb uri
  JWT_SECRET = 'your secret'
```

### Install Dependencies

```
  npm install
  cd frontend
  npm install
```

### Run

```
  # Run frontend (:3000) & backend (:4000)
  npm run dev
  
  # Run backend only
  npm run server
```

## Build & Deploy

```
  # Create frontend prod build
  cd frontend
  npm run build
```









