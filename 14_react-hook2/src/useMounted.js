import { useEffect, useState } from "react";

export default function useMounted() {
  const [mounted, setMounted] = useSteate(false);
  useEffect(() => {
    setMounted(true);
  },[]);
  return mounted;
}