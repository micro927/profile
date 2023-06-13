"use client";

import { useEffect, useState } from "react";

function Example() {
  const [c, setC] = useState(1);
  useEffect(() => {
    setC(8);
  }, []);

  return (
    <>
      <div>
        <p>Render {c} rows in client side</p>
        {Array.from(Array(c).keys()).map((i) => {
          i++;
          return <p key={i}>{i} - ROW</p>;
        })}
      </div>
    </>
  );
}

export default Example;
