import { useState, useEffect } from "react";

function useFollowPointer() {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      setPoint({ x, y });
    };

    window.addEventListener("mousemove", handlePointerMove);

    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, []);

  return point;
}

export default useFollowPointer;
