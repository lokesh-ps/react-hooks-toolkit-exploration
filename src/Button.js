import React, { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Button From Child</button>
      {toggle && <span> Toggle</span>}
    </div>
  );
});

export default Button;
