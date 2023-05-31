import { Field, Formik, Form, ErrorMessage } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
const initialValues = {
  // typeMaterial:"",
  width: "",
  height: "",
  onPrint: "",
  cutInSize: false,
  laminat: "",
};

const filmSchema = Yup.object().shape({
  // typeMaterial:Yup.string(),
  width: Yup.number().min(10).max(9999999).required(),
  height: Yup.number().min(10).max(9999999).required(),
  //   onPrint:Yup.string(),
  cutInSize: Yup.boolean().default(false),
  //   laminat:Yup.string()
});

const ErrorText = styled.p`
  color: red;
`;
const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const FilmCalculator = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // resetForm()
  };
  return (
    <>
      <h1>Порахувати плівку</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={filmSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <Field type="radio" name="onPrint" value="wtiteGlossMat" />
            белая глянец, мат
          </label>
          <br />
          <label>
            <Field type="radio" name="onPrint" value="clearGlossMat" />
            прозрачная глянец, мат
          </label>
          <br />
          <label>
            <Field type="radio" name="onPrint" value="oneWayWision" />
            Перфорированная
          </label>
          <br />
          <label>
            <Field type="radio" name="onPrint" value="BlackOut" />
            Блекаут
          </label>
          <br />

          <br />
          <label>
            ширина{" "}
            <Field
              name="width"
              placeholder="введіть будласка ширину в мм"
            ></Field>{" "}
            mm
          </label>
          <FormError name="width" />
          <br />

          <label>
            висота{" "}
            <Field
              name="height"
              placeholder="введіть будласка висоту в мм"
            ></Field>{" "}
            mm
          </label>
          <FormError name="height" />

          <br />
          <p>выбери доп обработку</p>
          <label>
            <Field type="checkbox" name="cutInSize" value="cut" />
            вырезать в размер
          </label>
          <br />
          <p>ламинация</p>
          <br />
          <label>
            <Field type="radio" name="laminat" value="clearGloss" />
            прозрачной глянцевой
          </label>

          <br />
          <label>
            <Field type="radio" name="laminat" value="clearMat" />
            прозрачной матовой
          </label>

          <br />
          <label>
            <Field type="radio" name="laminat" value="whiteGloss" />
            белая глянец
          </label>

          <br />
          <br />
          <button type="submit">расчет</button>
        </Form>
      </Formik>
    </>
  );
};
