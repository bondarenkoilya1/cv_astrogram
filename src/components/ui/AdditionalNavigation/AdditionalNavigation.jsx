import PropTypes from "prop-types";

import {
  AdditionalNavigationItemStyled,
  AdditionalNavigationLinkStyled,
  AdditionalNavigationSeparatorStyled,
  AdditionalNavigationStyled
} from "./styled";

export const AdditionalNavigation = ({ array, ...attrs }) => {
  return (
    <AdditionalNavigationStyled {...attrs}>
      {array.map((item, index) => {
        const { text, url } = item;

        return (
          <AdditionalNavigationItemStyled key={crypto.randomUUID()}>
            <AdditionalNavigationLinkStyled to={url}>{text}</AdditionalNavigationLinkStyled>
            {index < array.length - 1 && <AdditionalNavigationSeparatorStyled />}
          </AdditionalNavigationItemStyled>
        );
      })}
    </AdditionalNavigationStyled>
  );
};

AdditionalNavigation.propTypes = {
  array: PropTypes.array.isRequired
};
