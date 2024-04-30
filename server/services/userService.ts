export const userService={
    authenticate,
}

function authenticate(username:string, password:string){
    if(username !== 'admin' || password !== 'sherman'){
        // for the simplicity of the code, we just hard coded the username nad password
        return null
        // if the user does not authenticate, we return null WE will also allow the ui to show the error and to make the user check the detauls without giving them a hint
    }

    const user = {
        id:'062606',
        name: 'Sherman Cruz',
        email: 'sherman@example.com',
        // Pretend the user is authenticated, we create the user object and fill it with the details
    }
    return user;
}