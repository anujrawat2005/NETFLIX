import { useState,useRef } from "react";
import Header from "./Header";
import { checkvalidData } from "../utils/validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth  } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {

const[IsSignup ,setIsSignup] = useState(true);
const [Errormessage,setErrormessage]= useState(null);
const navigate = useNavigate();


const email = useRef(null);
const password = useRef(null);

const handlebutton = () =>{

  console.log(email.current.value);
  console.log(password.current.value);

  const message = checkvalidData(email.current.value,password.current.value);
  setErrormessage(message);
  if(message) return;
  
  if(!IsSignup) {

    createUserWithEmailAndPassword
    (auth,email.current.value,password.current.value)
    .then((userCredential) =>{
      const user = userCredential.user;
      console.log(user);
      navigate("/browse");
    })
    .catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message
      setErrormessage(errorCode+"-"+errorMessage)
    });

  } else{

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormessage(errorCode+"-"+errorMessage);
  });


  }

};

const Signform=()=> {
  setIsSignup(!IsSignup);

}

    return(
        <div>
          <Header/>
          <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg"
            alt="logo" />
          </div>
          <form onSubmit={(e) => e.preventDefault()}
          className=" w-3/12 relative p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-70">
          <h1 className="font-bold text-3xl">{IsSignup? "Sign In":"Sign Up"}</h1>
            {!IsSignup &&(<input type="name" placeholder="name" className="py-2 m-2 w-full bg-gray-500" />)}
            <input ref={email}  
            type="text" placeholder="Email address" className="py-2 m-2 w-full bg-gray-500" />


            <input ref={password}
            type="password" placeholder="Password"
             className="py-2 m-2 w-full bg-gray-500" />


            <p className="text-red-500 font-bold text-lg py-2">{Errormessage}</p>
            <button
             className="p-y4 my-4 bg-red-800 w-full rounded-lg" onClick={handlebutton}>{IsSignup?"Sign In":"Sign Up"}   
             </button> 
            <p className="p-4 cursor-pointer" onClick={Signform}>{IsSignup?"New to Netflix? Sign Up Now":"Already have account! Sign in now"}</p>
          </form>
        </div>
   
    );
};

export default Login;