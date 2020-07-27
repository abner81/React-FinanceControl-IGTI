import styled from "styled-components";
import { Form } from "react-bootstrap";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 40px;
`;

export const ButtonCalendar = styled.button`
         width: 35px;
         height: 35px;
         font-size: 1rem;
         font-weight: 400;
         border: none;
         background: #2a9d8f;
         color: white;
         border-radius: 5px;

         :focus {
           outline: none;
         }

         :hover {
           background: #24897d;
         }
       `;

export const FormControl = styled(Form.Control)`
  border: none;
  font-weight: 600;
  font-size: 1.25rem;
  padding: 8px 18px;
  margin: 0 8px;
`;

export const FormWrapper = styled(Form.Group)`
         display: flex;
         flex-direction: row;
         align-items: center;
       `;

export const InputFilter = styled.input`
         width: 55%;
         border: none;
         border-bottom: 1px solid lightgray;
         background: none;

         ::before {
           outline: none;
         }
       `;
