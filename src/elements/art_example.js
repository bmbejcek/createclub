import * as React from "react";

import { useDencrypt } from "use-dencrypt-effect";

const values = ["sculpture of", "drawing about", "dance move for", "commercial for", "poem about"];

const Example = () => {
  const [result, setResult] = useDencrypt('drawing about');

  React.useEffect(() => {
    let i = 0;
    let run = true;

    const loop = async () => {
      while (run) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        await setResult(values[i]);

        i = i === values.length - 1 ? 0 : i + 1;
      }
    };

    if (setResult) {
      loop();
    }

    return () => {
      run = false;
    };
  }, [setResult]);

    return <span style={{fontFamily:`Poppins`}}>{result}</span>;
  
};

export default Example;