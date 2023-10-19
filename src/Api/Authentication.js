export const SignUpService = {
    method: 'POST',
    url: 'Account/register',
    headers: {
        'Content-Type': 'multipart/form-data',
 
        'Accept': 'application/json',
    }
}
export const SigninService = {
    method: 'POST',
    url: 'Account/login',
    headers: {
        'Content-Type': 'application/json'
    }
}
export const customerRegistrationService={
    method: 'POST',
    url: 'Customer/RegisterCustomer',
    headers: {
        'Content-Type': 'application/json'
    }
}