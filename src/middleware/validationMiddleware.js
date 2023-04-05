const validation = (schema) => async (req, res, next) => {
  const { body } = req;
  try {
    await schema.validate(body);
    return next();
  } catch (error) {
    const { message } = error;
    return res.redirect("/?error=" + message);
  }
};

export default validation;
