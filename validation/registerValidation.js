const yup = require('yup');

const registerValidation = yup.object().shape({
    fullname:yup.string().required('').min(4).max(125).trim(),
    email:yup.string().email('').required(''),
    password:yup.string().required('').min(4).max(120),
    confirm_password:yup.string().required().oneOf([yup.ref('password'),null])
})


module.exports = registerValidation