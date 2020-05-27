import React from "react";

const withTracker = (WrappedComponent, options = {}) => {
  
  const HOC = (props) => {
    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withTracker;
