const BACKEND_URL_DEV = 'https://localhost:8080/api/v1'
const BACKEND_URL_PROD = 'https://178.62.76.39:8080/api/v1'
let BACKEND_URL_CHOICE = ''

if (process.env.NODE_ENV === 'development') {
    BACKEND_URL_CHOICE = BACKEND_URL_DEV
    console.log("CONNECTED TO THE BACK IN DEVELOPMENT")
} else if (process.env.NODE_ENV === 'production') {
    BACKEND_URL_CHOICE = BACKEND_URL_PROD
    console.log("CONNECTED TO THE BACK IN PRODUCTION")
} else {
    console.log("NOT CONNECTED TO THE BACK")
}

export const BACKEND_URL = BACKEND_URL_CHOICE;

export const HOME_URL = '/'
export const ACCOUNT_URL = '/account'
export const LOGIN_URL = '/login'
export const REGISTER_URL = '/register'
export const NEW_ALERT_URL = '/newAlert'
export const READ_ALERT_URL = '/readAlert/:id'
export const UPDATE_ALERT_URL = '/updateAlert/:id'
export const LOGGED_URL = '/logged'
export const IMAGE_UPLOAD = '/images/upload'

export const COORDINATES_URL = "https://api-adresse.data.gouv.fr/search/?q="