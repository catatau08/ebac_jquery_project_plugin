$(document).ready(function () {
    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    })

    $('#cpf').mask('000-000-000-00', {
        placeholder: 'xxx-xxx-xxx-xx'
    })

    $('#cep').mask('00000-000', {
        placeholder: 'xxxxx-xxx'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            }, 
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true,
            },
            cep: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})