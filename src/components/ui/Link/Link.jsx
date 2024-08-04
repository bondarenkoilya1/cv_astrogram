import PropTypes from "prop-types";

import { LinkStyled } from "./styled";

export const Link = ({ children, to, onClick, ...attrs }) => {
  return (
    <LinkStyled to={to ? to : "/"} onClick={onClick} {...attrs}>
      {children}
    </LinkStyled>
  );
};

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};
