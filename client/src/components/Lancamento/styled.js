import styled from "styled-components";

export const FormWrapper = styled.main`
         background: white;
         border-radius: 5px;
         margin-top: -60px;
         display: flex;
         width: 50%;
         flex-direction: column;
         padding: 10px 10px;
         box-shadow: 6px 4px 10px rgba(166, 170, 200, 0.25);
       `;

export const RadioLabel = styled.label`
  color: ${(props) => (props.type === "despesa" ? "#c65454" : "#2a9d8f")};
  cursor: pointer;
  font-weight: 600;
  font-size: 1.5rem;
`;

export const RadiosWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const DivInputs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .despesa {
    color: white;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin: 30px auto;
  padding: 10px 10px;

  p {
    color: #bf1650;
    margin-top: 6px;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }
`;

export const LabelGrid = styled.label`
  padding: 5px 0 8px 0;
`;

export const SubmitDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 15px;
`;

export const HookInput= styled.input`
  margin-bottom: 15px;
`

