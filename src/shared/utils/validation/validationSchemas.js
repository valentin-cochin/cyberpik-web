import * as yup from 'yup'

const max = new Date();
max.setDate(max.getDate() + 1);

export const validationSchemaNewAlert =
    yup.object().shape({
        title: yup.string().required("Requis").min(10, "Between 10 and 30 chars").max(30, "Between 10 and 30 chars"),
        description: yup.string().required("Requis").min(20, "Minimum 20 Characters"),
        date: yup.date().required("Requis").max(max, "Select a Date before tomorow"),
        number: yup.string().required("Requis"),
        street: yup.string().required("Requis"),
        city: yup.string().required("Requis"),
        model: yup.string().required("Requis").min(1),
        brand: yup.string().required("Requis").min(1)
    })

export const validationSchemaUpdateAlert =
    yup.object().shape({
        title: yup.string().min(10, "Between 10 and 30 chars").max(30, "Between 10 and 30 chars"),
        description: yup.string().min(20, "Minimum 20 Characters"),
        date: yup.date().max(max, "Select a Date before tomorow"),
        number: yup.string(),
        street: yup.string(),
        city: yup.string(),
        model: yup.string().min(1),
        brand: yup.string().min(1)
    })

export const validationSchemaAccountUpdate =
    yup.object().shape({
        firstname: yup
            .string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastname: yup
            .string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        city: yup
            .string()
            .required(),
        telephone: yup
            .string()
            .required()
    })

export const validationSchemaLogin =
    yup.object().shape({
        password: yup.string("Password required")
            .min(5, 'password too short! 5 char min')
            .required('password is Required'),
        username: yup.string("Username is required")
            .required("Username is required")
    });

export const validationSchemaRegister = yup.object().shape({
    firstname: yup.string("first name required")
        .min(3, 'First name too Short!')
        .max(50, 'Last name too Long!')
        .required('First name Required'),
    lastname: yup.string("last name required")
        .min(3, 'Last name too short!')
        .max(50, 'last name too long!')
        .required('last name is Required'),
    username: yup.string("Username required")
        .required('Username is Required'),
    password: yup.string("Password required")
        .min(8, 'password too short!')
        .required('password is Required'),
    confirmPassword: yup.string("Please confirm your password")
        .min(8, 'password too short!')
        .required('Confirm password is Required'),
    email: yup.string("required").email().required("email is required"),
});