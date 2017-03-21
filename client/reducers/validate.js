export default function validate(values) {
  const errors = {};

  if(!values.fname) {
    errors.fname = "Enter a first name";
  }

  return errors;
}
