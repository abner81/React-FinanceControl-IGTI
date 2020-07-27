import React from "react";
import PERIOD from "../../helpers/period";

import * as S from "./styled";

const CalendarFilter = ({ changeState, changeButton, valueState }) => {
  const handleChange = (event) => {
    let valueEvent = event.target.value;
    changeState(valueEvent);
  };

  const handleButtonClick = (event) => {
    let valueEvent = event.target.value;
    // console.log(valueEvent);
    changeButton(valueEvent);
  };

  return (
    <S.SectionWrapper className="container">
      <S.FormWrapper controlId="exampleForm.ControlSelect1">
        <S.ButtonCalendar value="previous" onClick={handleButtonClick}>
          {"<"}
        </S.ButtonCalendar>
        <S.FormControl as="select" onChange={handleChange} value={valueState}>
          {PERIOD.map((period, index) => {
            return <option key={index}>{period}</option>;
          })}
        </S.FormControl>
        <S.ButtonCalendar value="next" onClick={handleButtonClick}>
          {">"}
        </S.ButtonCalendar>
      </S.FormWrapper>
      <S.InputFilter
        className="form-control mr-sm-2"
        type="search"
        placeholder="Filtrar..."
        aria-label="Filtrar"
      ></S.InputFilter>
    </S.SectionWrapper>
  );
};

export default CalendarFilter;
