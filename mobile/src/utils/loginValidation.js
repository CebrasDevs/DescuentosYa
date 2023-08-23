import * as yup from "yup";

export const loginValidation = yup.object().shape({
    email: yup
        .string()
        .email()
        .required("E-mail is required"),
    password: yup
        .string()
        .min(5)
        .max(50)
        .required("Password is required")
});