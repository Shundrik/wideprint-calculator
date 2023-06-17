import React, { useState } from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

const initialValues = {
  width: "",
  height: "",
  onPrint: "",
  dop: false,
};
const ErrorText = styled.p`
  color: red;
`;

const filmSchema = Yup.object().shape({
  width: Yup.number().min(10).max(9999999).required(),
  height: Yup.number().min(10).max(9999999).required(),
  cutInSize: Yup.boolean().default(false),
});

export const BanerCalculator = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [results, setResults] = useState(null);

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={(message) => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Проверка введенных значений
    if (isNaN(parseFloat(width)) || isNaN(parseFloat(height))) {
      alert("Пожалуйста, введите числовые значения для ширины и высоты.");
      return;
    }

    // Выполнение расчетов
    const area = parseFloat(width) * parseFloat(height);
    const materialAmount = calculateMaterialAmount(area);
    const cost = calculateCost(area, materialAmount);

    // Установка результатов
    setResults({
      area,
      materialAmount,
      cost,
    });
  };

  // Функция для расчета количества материала
  const calculateMaterialAmount = (area) => {
    // Ваш код для расчета количества материала
  };

  // Функция для расчета стоимости печати
  const calculateCost = (area, materialAmount) => {
    // Ваш код для расчета стоимости
  };

  return (
    <div>
      <h1>Порахувати банер</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={filmSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <Field type="radio" name="onPrint" value="frontlit510" />
            Литой 510 гр/м2
          </label>
          <br />
          <label>
            <Field type="radio" name="onPrint" value="ftontlitLam" />
            Ламинированний
          </label>
          <br />
          <label>
            <Field type="radio" name="onPrint" value="mash" />
            Сетка
          </label>
          <br />
          <label>
            <Field type="radio" name="onPrint" value="BlackOut" />
            Блекаут
          </label>
          <br />
          <label>
            <Field type="radio" name="onPrint" value="backlit" />
            флекс
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
            <Field type="checkbox" name="dop"  />
            вырезать в размер
          </label>
          <p>подвороты</p>

          <label>
            <Field type="checkbox" name="dopAll" />
            подвороты по перриметру 
          </label>
          <br />

          <label>
            <Field type="checkbox" name="dopTop" />
            подвороты верх
          </label>
          <br />
          <label>
            <Field type="checkbox" name="dopBottom" />
            подвороты низ
          </label>
          <br />
          <label>
            <Field type="checkbox" name="dopRigth" />
            подвороты право
          </label>
          <br />
          <label>
            <Field type="checkbox" name="dopLeft" />
            подвороты лево
          </label>
          <br />

          <br />
          <p>Установка люверсов</p>
          <br />
          <label>
            <Field type="radio" name="eyelets" value="cut" />
            люверсы по перриметру
          </label>
          <br />
          <label>
            Шаг люверса{" "}
            <Field name="feds" placeholder="шак люверса в мм"></Field> mm
          </label>
          <br />
          <label>
            Кол-во люверсов{" "}
            <Field name="namber" placeholder="введіть кол-во шт"></Field>{" "}
          </label>
          <br />

          <button type="submit">расчет</button>
        </Form>
      </Formik>
      <form onSubmit={handleSubmit}>
        <label htmlFor="widthInput">Ширина:</label>
        <input
          type="number"
          id="widthInput"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          required
        />
        <br />
        <label htmlFor="heightInput">Высота:</label>
        <input
          type="number"
          id="heightInput"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <br />
        <button type="submit">Рассчитать</button>
      </form>
      {results && (
        <div>
          <h2>Результаты расчета:</h2>
          <p>Площадь печати: {results.area} кв. м.</p>
          <p>Количество материала: {results.materialAmount} м.</p>
          <p>Стоимость: {results.cost} грн.</p>
        </div>
      )}
    </div>
  );
};

// export default BanerCalculator;
