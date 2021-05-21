// URL to access to the API User
export const BACK_END_URL = 'http://localhost:8080/cyberpik'


// URL of the front
const FRONT_END_URL_DEV = 'http://localhost:3000'
const FRONT_END_URL_PROD = 'http://localhost:5000'
let FRONT_END_URL_CHOICE = ''

if (process.env.NODE_ENV === 'development') {
    FRONT_END_URL_CHOICE = FRONT_END_URL_DEV
    console.log("CONNECTED IN DEVELOPMENT")
} else if (process.env.NODE_ENV === 'production') {
    FRONT_END_URL_CHOICE = FRONT_END_URL_PROD
    console.log("CONNECTED IN PRODUCTION")
} else {
    console.log("NOT CONNECTED")
}

export const FRONT_END_URL = FRONT_END_URL_CHOICE


// URL to navigate between the different front pages
export const DOWNLOAD = '/download'
export const GENERAL_CONDITIONS = '/general-conditions'
export const FORGET_PASSWORD = '/forget-password'
export const EFFECT = '/effect'
export const GALLERY = '/gallery'
export const HOME_PAGE = '/'
export const IMPORT = '/import'
export const PHOTO_DETAILS = '/photo-details'
export const PREVIEW = '/preview'
export const PROFILE = '/profile'
export const PROFILE_MANAGER = '/profile-manager'
export const PROFILE_PICTURE = '/profile-picture'
export const PROJECT_PRESENTATION = '/project-presentation'
export const RESET_PASSWORD = '/reset-password'
export const SIGN_IN = '/sign-in'
export const SIGN_UP = '/sign-up'
export const THANK_YOU = '/thank-you'
export const UNSUBSCRIBE = '/unsubscribe'


// Other URLs
export const GITHUB_ANTOINE = 'https://github.com/AntoineFran'
export const GITHUB_VALENTIN = 'https://github.com/valentin-cochin'