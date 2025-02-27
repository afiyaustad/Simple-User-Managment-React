Day 2 coding task step s Step 1: Setting up the backend project 
Create a node.Js project (npm init -y)
Install dependencies (express, cors, body-parser)
Creating an Express Server(server.js)
REST API with following capabilities:
GET/users  -> Returns a list of users.
POST/users -> Ass a new user 
Step 2: Setting up the frontend with react
Create a React App with vite (
npm create vite@latest user-management-client –template react
Npm install axios
Step 3: Creating React Component
Userlist Component : Display User List 
Fetches user data from backend
Displays the list of users 
Userform component : for adding the user
Handles input Changes using state
Sends a POST request to add a new user
Update the parent component dynamically
Combine component in App.js
Step 4: Understanding Component Types and props
 Convert userlist to a class component 
	Class UserList extends Component{}
constructor(props){ }
compoenntDidMount()
