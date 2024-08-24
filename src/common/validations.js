export const verifyEmail = function(email){
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}

export const verifyMobile = function(mobile){
    let mobileRegex = /\d{10}/;
    return mobileRegex.test(mobile);
}