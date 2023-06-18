import { Field, Formik, Form, ErrorMessage } from "formik";

import styled from "styled-components";
import * as Yup from "yup";
import products from "../../data/products.json"

const initialValues = {
  width: "",
  height: "",
  typeFilm: "",
  cutInSize: false,
  // laminat: "false",
  typeFilmlaminat: "",
};

const filmSchema = Yup.object().shape({
  width: Yup.number().min(10).max(9999999).required(),
  height: Yup.number().min(10).max(9999999).required(),
  cutInSize: Yup.boolean().default(false),
  // laminat: Yup.boolean().default(false),
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

export const FilmCalculator = (values) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // resetForm()
    console.log(products);
let product = products.map((el)=>{
  let productNew = [];
  for (let i = 0; i > product.langht; i++) {
    productNew=products.push(i)
  console.log(productNew);
  }
  
  
 
  return el

});
   console.log(product);










  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={filmSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <Field type="radio" name="typeFilm" value="wtiteGlossMat" />
            белая глянец, мат
          </label>
          <br />
          <label>
            <Field type="radio" name="typeFilm" value="clearGlossMat" />
            прозрачная глянец, мат
          </label>
          <br />
          <label>
            <Field type="radio" name="typeFilm" value="oneWayWision" />
            Перфорированная
          </label>
          <br />
          <label>
            <Field type="radio" name="typeFilm" value="BlackOut" />
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
            <Field type="checkbox" name="cutInSize" />
            вырезать в размер
          </label>
          <br />
          <p>ламинация</p>
          <br />

          <Field as="select" name="typeFilmlaminat">
            <option value="null">без ламинации</option>
            <option value="clearGloss">прозрачной глянцевой</option>
            <option value="clearMat">прозрачной матовой</option>
            <option value="whiteGloss">белой, для поклейки изнутри</option>
          </Field>
          <br />
          <br />
          <button type="submit">расчет</button>
        </Form>
      </Formik>
    </>
  );
};
