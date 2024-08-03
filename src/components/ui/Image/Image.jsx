import PropTypes from "prop-types";

export const Image = ({ src, alt, width = "100px", height = "100px", ...attrs }) => {
  return <img src={src} alt={alt} width={width} height={height} {...attrs} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};
