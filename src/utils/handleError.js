// Objetivo: manejar los errores de la API
export const handleError = (err) => {

    if (err.message == "Network Error") {
      return "Error de conexion, intente nuevamente";
    }

    if (err.response.data.err){
      const { email, contraseña, code } = err.response.data.err;
  
      if (email) {
        return email.msg;
      } else if (contraseña) {
        return contraseña.msg;
      } else if (code) {
        return code.msg;
      }
    }

    if (err.response.data.msg){
      return err.response.data.msg;
    }

  };