import PropTypes from "prop-types";

import { LinkStyled } from "./styled";

export const Link = ({ children, to, ...attrs }) => {
  return (
    <LinkStyled to={to ? to : "/"} {...attrs}>
      {children}
    </LinkStyled>
  );
};

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired
};
