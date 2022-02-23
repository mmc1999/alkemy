
export const validationForm = (form) => {
    let errors = {};
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexEmailPosta = /challenge@alkemy.org/;
    let regexcomentario = /react/;

    if (!form.email.trim()) {
        errors.email = "El email es requerido"
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "El email es invalido"
    } else if(!regexEmailPosta.test(form.email.trim())) {
        errors.email = "El email es incorrecto"
    }

    if (!form.password.trim()) {
        errors.password = "La contraseña es requerida"
    } else if (!regexcomentario.test(form.password.trim())) {
        errors.password = "La contraseña es incorrecta"
    }
    console.log(form.password)
    return errors
}

