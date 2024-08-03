import PropTypes from "prop-types";

export const Image = ({ src, alt, width, height, ...attrs }) => {
  return <img src={src} alt={alt} width={width} height={height} {...attrs} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

Image.defaultProps = {
  width: 100,
  height: 100
};
