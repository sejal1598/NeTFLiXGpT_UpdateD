export const checkValidation = (email, password) => {
    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)



    const ispassward = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(password);


    if (!isEmail) return "email is not valid"
    if (!ispassward) return "Password  is not valid"


    return null

}