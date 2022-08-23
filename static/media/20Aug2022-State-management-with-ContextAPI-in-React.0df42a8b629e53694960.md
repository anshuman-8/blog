
<Space  p={3}/>

## What is Context API ?
<Space  p={2}/>
    
The React `Context API` is a way for a React app to effectively produce global variables that are available throughout the React application. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.


<Space  p={3}/>


## How to use Context API ?
<Space  p={2}/> 
To check its implementation lets use an example of providing user data throughout the application using Context API.
<Space  p={2}/> 
1. For this let's make a Context folder inside our `src` folder and then make a file name `UserContext.js` and make a user context inside that file by importing `createContext`.

    <Code language="jsx" code=' // src/Context/UserContext.js
    import { createContext } from "react";

    const userContext=createContext();

    export default userContext;
    '/> 
<Space  p={1}/> 
    Don't forget to export `userContext`

<Space  p={3}/>

2. Now, after this as the context in ready we can make the user state by creating `UserState.js` inside Context folder.
    We will use useState hook for this example.

    <Code language="jsx" code=' // src/Context/UserState.js
    import { useState } from "react";
    import UserContext from "./UserContext";

    userData={
        "name":"Anshuman",
        "age":19,
        "color":"blue"
    }

    const UserState=(props)={
    
        const [user,setUser]=setState(userData);

        function happyBirthDay(){
            setUser(user.age = user.age+1)
        }

        return (
            <UserContext.Provider value = {{user,setUser,happyBirthDay}}>
                {props.children}
            </UserContext.Provider>
            )
        }

    export default UserState;
    '/>

<Space  p={3}/>

3. As, most of the heavy lifting is done we can now import out UserState from top most parent component like `index.js` or `App.js`. I will be using `App.js` as I am calling all my children component from there.

    <Code language="jsx" code='
    import UserState from "./Context/UserState";

    function App() {
    return (
        <UserState>
            // All your children component
        </UserState>
        );
    }

    export default App;
    '>
<Space  p={1}/> 
    There you go now the userState is avalable throughout your application.

<Space  p={3}/>

4. Now, to use the userState we will take an eample of `Profile` component which is deep in there children tree.

    <Code language="jsx" code='
    import React,{useContext} from "react";
    import userContext from "../Context/UserContext";

    const Profile = () = {

        const {user,setUser} = useContext(userContext);
        
        return (
            <div >
               {user.name}
            </div>
            )
    };
    export default Profile
    '/>
<Space  p={1}/> 
    We have done it by using `useContext` hook available with react.
    Finally, it's done and that's it for the basic implementation of Context API in React.

<Space  p={4}/>

<Note>
The code and file structure that I have kept, i.e. having `UserState` and `UserContext` in different files inside a Context folder, is a standard convention to make code easier to understand. You need not follow it.
</Note>
<Space  p={3}/>

<ImageHandler src="20Aug2022-State-management-with-ContextAPI-in-React-1.jpg" alt="Smash Prop drills" h={} w={} />
<center>You just killed all Prop drillings 🥳</center>