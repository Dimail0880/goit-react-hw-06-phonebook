import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(20, "Nice try, nobody has a first name that long")
    .required("Required"),
  number: Yup.number()
    .min(8, "Must be longer than 8 characters")
    .required("Required"),
});

export default BasicFormSchema;
