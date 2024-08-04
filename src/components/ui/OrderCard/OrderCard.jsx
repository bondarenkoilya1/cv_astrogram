import PropTypes from "prop-types";

import {
  OrderCardContentStyled,
  OrderCardHeaderStyled,
  OrderCardStyled,
  OrderCardTitleStyled
} from "./styled";

export const OrderCard = ({ title, headerContent, children }) => {
  return (
    <>
      <OrderCardTitleStyled>{title}</OrderCardTitleStyled>
      <OrderCardStyled>
        <OrderCardHeaderStyled>{headerContent}</OrderCardHeaderStyled>
        <OrderCardContentStyled>{children}</OrderCardContentStyled>
      </OrderCardStyled>
    </>
  );
};

OrderCard.propTypes = {
  title: PropTypes.string.isRequired,
  headerContent: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};
