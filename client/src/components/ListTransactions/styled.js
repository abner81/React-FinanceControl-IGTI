import styled from "styled-components";
import media from "styled-media-query";

import { Button } from "react-bootstrap";
import { Pencil } from "@styled-icons/boxicons-solid/Pencil";
import { Delete } from "@styled-icons/material/Delete";
import { Modal } from "react-bootstrap";

export const ListWrapper = styled.section`
         width: 100%;
         display: flex;
         flex-direction: row;
         align-items: center;
         justify-content: space-between;
         background: white;
         border-radius: 8px;
         padding: 8px 15px;
         margin: 0 auto 10px auto;
         word-wrap: break-word;

         ${media.lessThan("576px")`
           max-width: 92%;
           word-wrap: break-word;
           padding: 5px 6px;
  `}

         ${media.lessThan("310px")`
  `}
       `;

export const ListDay = styled.h3`
  font-size: 1.7rem;
  font-weight: 500;
  color: #4e4d4d;

  ${media.lessThan("576px")`
           font-size: 1.55rem;
  `}
`;

export const ListInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  word-wrap: break-word;

  ${media.lessThan("576px")`
           margin-left: 15px;
           max-width: 68%;
           word-wrap: break-word;
  `}
`;

export const ListLeftDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${media.lessThan("576px")`
           width: 45%;
           margin-left: 0;
  `}
`;

export const ListRigthDiv = styled(ListLeftDiv)`
         word-wrap: break-word;

         ${media.lessThan("576px")`
           max-width: 45%;
           word-wrap: break-word;
           margin-right: 0;
  `}
       `;

export const ListCategory = styled.h4`
  font-size: 1.28rem;
  font-weight: 600;
  padding: 0 0 8px 0;
  color: black;
`;

export const ListDescription = styled.span`
  font-size: 1.15rem;
  font-weight: 400;
  color: #595959;
`;

export const ListPrice = styled.h2`
  font-weight: 700;
  font-size: 1.76rem;
  color: ${(props) => (props.type === "+" ? "#2A9D8F" : "#c65454")};
  margin-right: 56px;

  ${media.lessThan("576px")`
         margin-right: 10px;
         margin-left: -25px;
         font-size: 1.65rem;
         max-width: 70%;
         word-wrap: break-word;
  `}
`;

export const ListIconPencil = styled(Pencil)`
  width: 25px;
  font-size: 1.2rem;
  color: black;
  margin-right: 8px;

  ${media.lessThan("576px")`
           margin-right: 0;
           width: 22px;
           margin-left: 1px;
  `}
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

  ${media.lessThan("576px")`
           width: 22px;
           margin-left: -10px;
  `}
`;

// Styles do componente MODAL

export const ModalWrapper = styled(Modal)`
         ${media.lessThan("576px")`
           width: 100%;
           padding: 0 5% 0 5%;
           margin: 0 auto;
           background: rgba(70, 82, 197, 0.9);
           border-radius: 6px;

           input.input {
             width: 100%;
             height: 40px;
             font-size: 1.3rem;
             color: #595959;
             margin-bottom: 20px;
           }

           .footerText {
             font-size: 1.4rem;
           }
  `}
       `;

export const ModalButtonClose = styled.button`
         color: red;
         font-weight: 600;
         font-size: 1.8rem;
         text-decoration: none;
         border: none;

         :focus {
           outline: none;
         }

       `;

export const ModalBodyWrapper = styled.div``;

export const ModalDivInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const ModalLabel = styled.label`
  padding: 0 0 10px 0;
`;

export const ModalInput = styled.input`
  font-size: 1.4rem;
`;

export const P = styled.p`
  color: #bf1650;
  margin-top: 6px;

  ::before {
    display: inline;
    content: "⚠ ";
  }
`;
