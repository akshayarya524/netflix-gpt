export const checkValidation=(Email, Password)=>{

    const isEmailValid= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email);
    const isPasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);
    // const isNameValid= /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
   
    if(!isEmailValid) return "Email is not Valid"
    if(!isPasswordValid) return "Password is not valid";

    return null;

}