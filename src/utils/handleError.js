export const handleError = (err) => {

    if (err.message == "Network Error") {
      return "Error de conexion, intente nuevamente";
    }

    const { email, contraseña } = err.response.data.err;

    if (email) {
      return email.msg;
    } else if (contraseña) {
      return contraseña.msg;
    }
  };