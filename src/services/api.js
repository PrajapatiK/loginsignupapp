import { setItem } from "../lib/common";

export const signup = (signupData) => {
  try{
    let signupUserData = setItem(signupData)
    console.log(signupUserData)
  }
  catch(err){
    console.log(err);
  }
}