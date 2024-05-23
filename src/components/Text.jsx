import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '58px',
    fontFamily: 'Roboto',
    fontWeight: 700,
    lineHeight: '75px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Discover exclusive flight offers',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;