import styled from "styled-components";

import { Button } from 'react-bootstrap'
import { Pencil } from "@styled-icons/boxicons-solid/Pencil";
import { Delete } from "@styled-icons/material/Delete";

export const ListWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-radius: 8px;
  padding: 8px 15px;
  margin-bottom: 10px;
`;

export const ListDay = styled.h3`
  font-size: 1.7rem;
  font-weight: 600;
  color: black;
`;

export const ListInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;

export const ListLeftDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ListRigthDiv = styled(ListLeftDiv)``;

export const ListCategory = styled.h4`
  font-size: 1.28rem;
  font-weight: 600;
  padding: 0 0 8px 0;
`;

export const ListDescription = styled.span`
  font-size: 1.08rem;
  font-weight: 300;
`;

export const ListPrice = styled.h2`
  font-weight: 700;
  font-size: 1.76rem;
  color: ${(props) => (props.type === "+" ? "#2A9D8F" : "#c65454")};
  margin-right: 56px;
`;

export const ListIconPencil = styled(Pencil)`
  width: 25px;
  font-size: 1.2rem;
  color: black;
  margin-right: 8px;
`;

export const ListButtonModal = styled(Button)`
         background: none;
         border: none;
         text-decoration: none;

         :hover {
           background: none;
           border: none;
           text-decoration: none;
           outline: none;
         }

         :focus {
           background: none;
           border: none;
           text-decoration: none;
           outline: none;
         }
       `;

export const ListIconDelete = styled(Delete)`
  width: 25px;
  font-size: 1.2rem;
  color: black;
`;

// Styles do componente MODAL

export const ModalWrapper = styled.div`

`;

export const ModalButtonClose = styled.button`
  color: red;
  font-weight: 600;
  font-size: 1.8rem;
  text-decoration: none;
  border: none;

  :focus{
    outline: none;
  }
`;

export const ModalBodyWrapper = styled.div`
`;


export const ModalDivInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;


export const ModalLabel = styled.label`
  padding: 0 0 10px 0;
`;

export const ModalInput = styled.input`
  width: 30%;
  border: none;
  border-bottom: 1px solid lightgray;
`;

export const P = styled.p`
  color: #bf1650;
  margin-top: 6px;

  ::before {
    display: inline;
    content: "⚠ ";
  }
`;
