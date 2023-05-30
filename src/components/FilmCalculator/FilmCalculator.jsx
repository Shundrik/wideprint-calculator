import { Field, Formik, Form,  } from "formik";

import * as Yup from "yup";
const initialValues = {
    // typeMaterial:"",
  width: "",
  height: "",
  onPrint:"",
  cutInSize:"",
  laminat:""


  };

  const filmSchema = Yup.object().shape({
     // typeMaterial:Yup.string(),
  width:Yup.number().required(),
  height: Yup.number().min(2).max(8).required(),
  onPrint:Yup.string(),
  cutInSize:Yup.string(),
  laminat:Yup.string()
     });

export const FilmCalculator = () => {
  const handleSubmit = (values,{resetForm}) => {
    console.log(values);
    // resetForm()
  };
  return (
    <>
      <h1>Порахувати плівку</h1>
      <Formik initialValues={initialValues} 
      validationSchema={filmSchema}
      onSubmit={handleSubmit}>
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
            ширина <Field  name="width"></Field> mm
          </label>
          <br />

          <label>
            висота <Field name="height"></Field> mm
          </label>


          <br />
          <p>выбери доп обработку</p>
          <label>
            <Field type="checkbox" name="cutInSize" value="cut" />
            вырезать в  размер
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
          <button type="submit" >расчет</button>
        </Form>
      </Formik>
    </>
  );
};
