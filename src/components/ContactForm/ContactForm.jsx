import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label>
          Name
          <Field type="text" name="name" />
        </label>
        <label>
          Number
          <Field type="text" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
