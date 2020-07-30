import styled from "styled-components";
import media from "styled-media-query";

import { Numbers } from "@styled-icons/remix-fill/Numbers";
import { AttachMoney as Money } from "@styled-icons/material-rounded/AttachMoney";
import { DownArrowCircle as DownCircle } from "@styled-icons/boxicons-regular/DownArrowCircle";
import { UpArrowCircle as UpCircle } from "@styled-icons/boxicons-regular/UpArrowCircle";

export const DashboardWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: -75px;

  ${media.lessThan("505px")`
      justify-content: space-around;
      margin-top: -90px;
      
      flex-wrap: wrap;

      .saldo{
        width: 75%;
        padding: 0 0 0 2px;
      }
  `}

  ${media.lessThan("350px")`
      margin-top: -93px;

         .saldo{
         margin: 8px 2px 10px 2px;
        width: 80%;
        padding: 2px 2px 2px 5px;
      }
       
  `}
`;

export const DashboardCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  width: 25%;
  min-height: 120px;
  background: ${(props) => (props.background ? props.background : "#f47859")};
  padding: 10px 10px 10px 20px;
  box-shadow: 6px 4px 10px rgba(166, 170, 200, 0.25);
  border-radius: 5px;

  ${media.lessThan("505px")`
      margin: 8px 2px 10px 2px;
        width: 45%;
        padding: 2px 2px 2px 5px;
  `}

  ${media.lessThan("350px")`
        margin: 8px 2px 10px 2px;
        width: 60%;
        padding: 2px 2px 2px 5px;
  `}
`;

export const DashboardCardTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => (props.background === "white" ? "#595959" : "white")};

  ${media.lessThan("505px")`
      font-size: 1.4rem;
  `}
`;

export const DashboardDivTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconNumber = styled(Numbers)`
  width: 20px;
  color: #f47859;
  margin-left: 15px;
`;

export const IconMoney = styled(Money)`
  width: 30px;
  color: white;
  margin-left: 15px;
`;

export const IconDownCircle = styled(DownCircle)`
  width: 25px;
  color: #c65454;
  margin-left: 15px;
`;

export const IconUpCircle = styled(UpCircle)`
  width: 25px;
  color: #2a9d8f;
  margin-left: 15px;
`;

export const DashboardCardNumber = styled.h3`
  color: black;
  font-size: 1.6rem;
  font-weight: 700;
  margin-top: 15px;
  color: ${(props) => props.fontColor || "black"};

  ${media.lessThan("505px")`
      font-size: 1.7rem;
  `}
`;
