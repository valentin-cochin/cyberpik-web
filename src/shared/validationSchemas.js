import * as Yup from 'yup';

const yup = require('yup')
require('yup-password')(Yup)

export const signUpValidationSchema = yup.object().shape({
    username: yup.string().required("username is required").min(3, "username must be at least 3 characters").max(20, "username must have maximum 21 characters"),
    email: yup.string().required("e-mail is required").email("e-mail is not valid"),
    password: yup.string().required("password is required").password(),
    confirm_password: yup.string().required("confirmation password is required").oneOf([yup.ref("password"), null], "passwords must be the same"),
    conditions: yup.bool().test("consent", "you have to accept our terms and conditions", value => value === true).required("you have to accept our terms and conditions")
})

export const signInValidationSchema = yup.object().shape({
    username: yup.string().required("username is required"),
    password: yup.string().required("password is required")
})

export const userAccountModifyValidationSchema = yup.object().shape({
    username: yup.string().min(3, "username must be at least 3 characters").max(20, "username must have maximum 21 characters"),
    email: yup.string().email("e-mail is not valid"),
    password: yup.string().password(),
    confirm_password: yup.string().oneOf([yup.ref("password"), null], "passwords must be the same"),
    location: yup.string().notRequired()
})

export const photoDetailsModifyValidationSchema = yup.object().shape({
    title: yup.string().min(1, "title must be at least 1 character").max(20, "title must have maximum 20 characters")
})

export const subscribeUnsubscribeValidationSchema = yup.object().shape({
    email: yup.string().required("e-mail is required").email("e-mail is not valid")
})

export const forgetPasswordValidationSchema = yup.object().shape({
    email: yup.string().required("e-mail is required").email("e-mail is not valid")
})

export const resetPasswordValidationSchema = yup.object().shape({
    password: yup.string().password(),
    confirm_password: yup.string().oneOf([yup.ref("password"), null], "passwords must be the same")
})