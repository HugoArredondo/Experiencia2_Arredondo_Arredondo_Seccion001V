//=========================================================================================================
//=================================================REGISTRO================================================
//=========================================================================================================

$(function() 
      {
        $("#form-reg").validate({
            rules: {
                    name: "required",
                    ap: "required",
                    fecha: "required",
                    phone: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    user: "required",
                    password: "required",
                    password2: {
                        required: true,
                        equalTo: "#password"
                    }   
                    
            }, //rules
            messages: {
                name: {
                    required: 'Ingresa tu nombre',
                },
                ap: {
                    required: 'Ingresa tu apellido',
                },
                fecha:{
                    required: 'Seleccione una fecha válida',
                    min: 'Fecha no corresponde'
                },
                phone:{
                    required: 'Ingrese un número de celular',
                    minlength: 'Cantidad de digitos insuficiente'
                },
                email: {
                    required: 'Ingresa tu correo electrónico',
                    email: 'Formato de correo no válido'
                },
                user: {
                    required: 'Ingresa un nombre de usuario',
                },
                password: {
                    required: 'Ingresa una contraseña',
                    minlength: 'Caracteres insuficientes'
                },
                password2: {
                    required: 'Repite la contraseña',
                    equalTo: 'Las contraseñas ingresadas no coinciden',
                    minlength: 'Caracteres insuficientes'

                }
            }//messages
        }); //$('formulario').validate
    }); //function

//=========================================================================================================
//==================================================INICIO=================================================
//=========================================================================================================

$(function() 
      {
        $("#form-log").validate({
            rules: {
                    user: "required",
                    password: "required"
            }, //rules
            messages: {
                user: {
                    required: 'Ingresa un nombre de usuario',
                },
                password: {
                    required: 'Ingresa una contraseña',
                    minlength: 'Caracteres insuficientes'
                }
            }//messages
        }); //$('formulario').validate
    }); //function

//=========================================================================================================
//=================================================COTIZAR=================================================
//=========================================================================================================

$(function() 
      {
        $("#form-quote").validate({
            rules: {
                name: "required",
                ap: "required",
                evento: "required",
                event: "required",
                servicio: "required",
                menu: "required",
                cant: "required",
                lugar: "required",
                email: {
                    required: true,
                    email: true
                }
            }, //rules
            messages: {
                name: {
                    required: 'Ingresa tu nombre'
                },
                ap: {
                    required: 'Ingresa tu apellido'
                },
                evento: {
                    required: 'Seleccione un tipo de evento'
                },
                event: {
                    required: 'Ingrese una fecha'
                },
                servicio: {
                    required: 'Seleccione un tipo de servicio'
                },
                menu: {
                    required: 'Seleccione un tipo de menú'
                },
                cant: {
                    required: 'Ingresa cantidad de personas'
                },
                lugar: {
                    required: 'Ingresa un lugar'
                },
                email: {
                    required: 'Ingresa tu correo electrónico',
                    email: 'Formato de correo no válido'
                }
            }//messages
        }); //$('formulario').validate
    }); //function