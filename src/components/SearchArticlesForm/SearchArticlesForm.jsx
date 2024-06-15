import { Field, Formik, Form } from "formik";

const SearchArticlesForm = ({ submit }) => {
  const handleSubmit = (values, actions) => {
    submit(values.query);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field name={"query"} />
        <button type="submit">find</button>
      </Form>
    </Formik>
  );
};
export default SearchArticlesForm;
