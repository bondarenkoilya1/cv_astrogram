import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

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
          <AdditionalNavigationItemStyled key={uuidv4()}>
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
