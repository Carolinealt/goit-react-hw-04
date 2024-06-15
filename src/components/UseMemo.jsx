import { useMemo, useState } from "react";

const UseMemo = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const result = useMemo(() => {
    return 'че нада ну не считает да а тебе то че нужно';
  }, [a, b]);

  return (
    <div>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        update a: {a}
      </button>

      <button
        onClick={() => {
          setB(b + 1);
        }}
      >
        update b: {b}
      </button>

      <button
        onClick={() => {
          setC(c + 1);
        }}
      >
        update c: {c}
      </button>
      <p>{result}</p>
    </div>
  );
};

export default UseMemo;
