import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function Timer(p: { max: number; onFinished: () => void }) {
  const [progress, setProgress] = useState<number>(p.max);

  useEffect(() => {
    const timerId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(timerId);
          p.onFinished();
          return 0;
        } else {
          return prevProgress - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [p]);

  return (
    <CircularProgress max={p.max} value={progress}>
      <CircularProgressLabel>{progress}'</CircularProgressLabel>
    </CircularProgress>
  );
}
