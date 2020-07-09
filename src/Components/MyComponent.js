import React, { Fragment } from "react";
import "./MyComponent.scss";

class MyComponent extends React.Component {
  render() {
    return (
      <div className="x">
        {[1, 2, 3].map((item) => (
          <div>{item}</div>
        ))}
      </div>
    );
  }
}

export default MyComponent;
