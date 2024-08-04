import PropTypes from "prop-types";

import { OrderCardRecipientHeaderTextStyled, TextWithIconStyled } from "./styled.js";

export const TextWithIcon = ({ icon, children, fontWeight }) => {
  return (
    <TextWithIconStyled>
      {icon}
      <OrderCardRecipientHeaderTextStyled fontWeight={fontWeight}>
        {children}
      </OrderCardRecipientHeaderTextStyled>
    </TextWithIconStyled>
  );
};

TextWithIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  fontWeight: PropTypes.number
};
