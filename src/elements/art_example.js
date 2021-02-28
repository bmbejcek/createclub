import * as React from "react";

import { useDencrypt } from "use-dencrypt-effect";

const values = ["sculpture of", "drawing about", "dance move for", "commercial for", "poem about"];

const Example = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 5000);

    return () => clearInterval(action);
  }, []);

  return <span style={{fontFamily:`Poppins`}}>{result}</span>;
};

export default Example;