
                     REACT JS

ECMAScript  was created to standadize the java script
Component 
--ui is built from units like button,img,text react combines them into reusable components every thing on the screen is broken into components
a react component is a java script function that you can sprinkle with markup,they are the foundation which you build ui
every piece of ui you see on the web
--how to build a component
1.export default is a standard java script syntax
2.define a java script function(names must start with a capital letter)
3.component returns <img/> but is actually java script under the hood - this syntax called JSX(lets you embed markup inside java script)
What Browser see
<sectoin> is lower case so react knows we refer to an html tag
<Profile/> starts with capital so react knows, that we want to use our component profile



3/4/24-------------------------
truthy values=-1,-2," ",[]
map,filter 
for returning the forEach we get -- undefined
map returns the value what you are giving in return statement ex--[-100,-100]
for adding new keypair values into an array of objects we use spread operator
----------------------------------------------------------- 
const result=array.map(obj => {
const newobj={...obj,designation:"react dev"}
return newobj
})
--------------------------------
reduce---->
const singleValue=array.reduce((accumulator,b)=>accumulator+b.salary)
log(singleValue)
--------------------------
if we want to pass an argument we need to pass function ex-- in button onClick.
setState() has 2 arguments 
1.object
2.function
constructor--is a method which is used to initialize the state and bind the events in class based components.
super()-- this keyword represents the current execution class 
2nd way of creation of state-------------

 
for addition ---
used spred operator
for deletion---
used filter()
for updation ----
used map()
4/4/24-----------------------
prettier site to rid of spaces in code .
postman -- we will test the end point hitting in postman
 
Axios install
npm install axios 
<strictmode/> in index.js --- by keeping this we will get errors if any was there .. in log section we get two times object,object.

---------------------------------->5/4/24
1. mounting phase 
methods 
1.consructor-- to initialize the state in class based components(optional)
2.render--to insert all the dom elements
3.componentDidMount-- to perform the side effects in class based component during the mounting phase(executes only once in a life cycle)
sideeffect
                 ex-- 1.data fetching
			2.DOM manipulations
			3.event listeners
ex--
componentDidMount(){
document.title="Hello world"--- dom manipulations 
}
4.getDerivedStateFromProps---> to init the state based on the props we use this.(optional to use)
when ever we use the map method we should use the key{id} prop method to conclude uniqness.
key prop-- react js keys are a way of providing a unique identity to each item while creating the react js  lists so that react can identify the elements to be proceeded. we will give first jsx parent element
key is the optimization technique in react.(clean code and efficient)
In react code flows based on the priorities of methods

 
getDerivedStateFromProps --- here we set the color on above img it takes the props color.
------------------> 2. UPDATING PHASE
whenever component/elements updated in the dom
methods
1.render (mostly use)
2.getDerivedStateFromProps
3.shouldComponentUpdate --> this method denotes the component needs to update or not (returns the boolean value by default it is true
on based on previous one
ex--shouldComponentUpdate(){
return false/true
}
4.componentDidUpdate (mostly use) --> To perform side effects in updating phase we use this.whenever component state/props changed this method invokes
ex--componentDidUpdate(){
document.title=`react app${this.state.count}`
here we dont use did mount bcz it only updates one time.
5.getSnapShotBeforeUpdate --> getting previous values 
ex--getSnapShotBeforeUpdate(props,state){
log(state)
return null
}
 

----------------> 3.UNMOUNTING PHASE....
whenever component/elements removed from the dom
methods
1. componentWillUnmount ---> this method cleans up the data, initialize the state and props.
for preventing memory leaks in the app we use this method
ex--componentWillUnmount(){
//cleaning Up
alert("componentWillUnmount")
}
 
 
order of execution...
1.constructor
2.render
6/4/24----------------------------------------->>>>>
Pure Component--> ex-- child && parent
prevents rerenders 
if we use pure component it will render only when each prop / state changes.
in pure component we use the method -- shouldComponentUpdate
DIFF B/W CLASSS & FUNCTIONAL COMPONENTS...


8/4/24 (MONDAY)------------------------->>>
 Class based comonent 
limitatons:-
1.code complexity(this,constructor)
2.for a particular task we have split into different methods
 ex- title manipulation
3.it involves more code
4.inheritance limitations
5.performance concerns


					HOOKS -->
  hooks let you use of state and other react features(life cycle methods) without writing class
also called as reusable predefined functions
Rules--
⦁	hooks always used in functional component
⦁	hooks cant be used in conditional,loops
⦁	hooks always imported from react and must call at the top of the component.
Limitations of Hooks
1.order sensitivity
2.
3.

React Hooks :
1.useState* -- it is a hooks which lets you use of state and mutate the state.
syntax--
step-1:useState accepts the initial state as a argument
useState(0)
step-2:useState will return the array
const array=useState(0)
const[currentState,updaterFunction]=useState(0)
const[count,setCount]=useState(0)
count - rep the current state
setCount-rep the updated function to update the current state
we can increment the setCount in two ways 
1.setCount(preCount=>preCount+1)
2.setCount(count+1)

 


2.useEffect*
3.useCallback
4.useContext
5.useReducer
6.useMemo
7.useRef
8.Custom hooks : user hooks, based on the requirements we can design the custom hooks using predefined hooks.
                        10/4/24----------------------->
Forms-- from client, to collect the information 
in react to use form we prefer 2 ways 
1.using uncontrolled components -->if react dosent control the input state, dom will control the input state.
// field validations are not possible
//state control will be done by dom

using usRef -- we build communication with dom
-- it can be used to store the mutable value of object that does not cause re-render when updated
-- it can be used to access the dom directly
-- useRef hook is an object which having current properties which we can manage the entire input.
steps--
1.take a form
2.collect the input -- use the useRef to create a ref with dom
3.to collect the use input we will use    reference.current.value
2.using controlled components -->entire input st­­ate mng will be done by react itself
// field validations are  possible
//state control will be done by react
their state is tied to react to mng and update the state
steps-
1.take a form jsx
2.states for input control using useState
3.bind the state value using attribute of the input
4.to control the input we use onChange handler to the input
5.collect the user input using .target.value within the onChange handler 

closures will come while function taken to submit button i.e form onClick={}
­­­­
two types  of validations 
1.form validation --it will validate all the input elements at one time­
2.field validations(most efficient)-- individual fields are validated when user is typing­

12/4/24----------------------------------->>>
controlled  components 
filed validations in forms
13/4/24------------------------------------>>>>>>
-- dummyjson
--tokens in fetch url 
--postman
--authentication & authorization
--status codes--
1.200 -ok 
2.400 -client side errors
3.500-599- server errors

react libbraries--
1.react hook form
2.formik


15/4/24------------------->>


16/4/24--------------->
dynmic routing 
<route path=":city/:resturent/info"
in previous versions we used switch
useParams
projected routing

18/4/24--------------------------->
both key and value are same we can say this is object literal
we are changing one component name from another component we can pass a object/function globally
atomic structure
19/4/24---------------------------------->
useEffect memory leaks--
whenever any component unmounted/removed from dom certain memory leaks can happen(mouse move)
in oredr to prevent the memory leaks, useEffect can have the capability to prevent with in the return function
 
to prevent leaks return a function  window.removeEventListtner("mousemove",mouseMoveCapture)
exp -- timer,addEventListener
--------------------------------
useState- state mng
useEffect-side effects
useContext-context api
useRef- dom accessing,element reference
useReducer-is a hook in functional base component which is used to mng the complex  state 
useReducer will accept 2 args 
1.useReducer(reducefunction,intial value) 
2.return pair of values in a array

const[currentValue,dispatchFunction]=useReducer(reducefunction,intial value) 
reducerFunction--to parametrs receives(state,action) 
it is used to manipulate the state based on the action
action -- is a object which tells what to happen
exp- increment age
state-currentage+10
// action we will give the type property

intialValue-> complex state (objects,array of objects)
useState+context api ->for simpler global state mng
useReducer+context api -> for complex global state mng
 dispatach function --to trigger  an action  -- then it go to reducer function.
const action={
type:"INCREMENT_AGE",
payload:20,--- we can as user input value 
payload:1000
}

20/4/24-------------------------------------->

 add to cart functionality

22/4/24------------------------------------->
firebase--
 firebase,  google authentication,payment integration
memorization-- 
useMemo--> is a hook in react functional based component,which memorizes the value without recaluculations(it will catch the values) it will recalculate only when value dependent things were changed
useMemo will accept 2 args 
1.callback function
2.dependency array

useMemo(()=>{},[])
---->to increase the performance in the application we must use use memorization techniques
useCallback--> which memorizes the function without recalculations(which catches the functions),to prevent unwanted rerenders, function recalculations should be done when dependent things were changed
syntax: useCallback accepts 2 args
1.callback function
2.dependency array(variables)
useCallback(()=>{},[])
React memo is HOC(higher order component) in react which renders only when prop/state changes
pure Component(like same)
stateLifting--it allows multiple components to share and update the same state..





























# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
