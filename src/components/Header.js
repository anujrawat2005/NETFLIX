import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constants";


const Header = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() =>{
        
         const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
     
        
         const {uid,email,displayName} = user.uid;
         dispatch(addUser({uid:uid,email:email,displayName:displayName}));
         navigate("/browse")
        } else {
     
         dispatch(removeUser());
         navigate("/");
        
         
        }
       });
        
        return () => unsubscribe();
        },[]);
     
    return(
        <div className="p-2 size-100">
            <img src={LOGO}
            alt="logo"/>
           
        </div>
    );
};

export default Header;