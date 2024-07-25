export const checkvalidData = (email,password) => {

    const IsEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const IsPasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!IsEmailvalid) return "Email id is not valid";
    if(!IsPasswordvalid) return "Password is not valid";

    return null;

};