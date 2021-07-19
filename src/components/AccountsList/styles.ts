import styled from "styled-components";
import { List, Col } from "antd";

export const StyledList = styled(List)`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const StyledListItem = styled(List.Item)<{
  isInArrears: boolean;
}>`
  padding: 20px;
  background: ${(p) => (p.isInArrears ? "#d62828" : "#f9f9f9")};
`;

export const StyledCol = styled(Col)`
  text-transform: Capitalize;
`;
