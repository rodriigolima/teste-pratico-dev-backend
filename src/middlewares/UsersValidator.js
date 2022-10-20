import * as yup from "yup";

export default async function UsersValidator(request, response, next) {
  const schema = yup.object().shape({
    email: yup
      .string()      
      .required("Mail is required")
      .email()
  });

  try{
    await schema.validate(request.body);
  }
  
  catch(err) {
    return response.status(400).json({
      error: err,
    });
  };

  next();
}
