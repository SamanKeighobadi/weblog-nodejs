const yup = require('yup');

const loginShema = yup.object().shape({
    email:yup.string().email().required(),
    password:yup.string().required().min(4).max(120).trim(),
})


module.exports = loginShema;