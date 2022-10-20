import * as yup from "yup";

export default async function UsersValidator(request, response, next) {
  const schema = yup.object().shape({
    email: yup
    .string()
    .required("O e-mail do usuário deve ser válido")
    .email()
  });

  await schema.validate(request.body).catch((err) => {
    return response.status(400).json({
      error: err.errors,
    });
  });

  next();
}
