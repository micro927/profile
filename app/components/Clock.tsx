"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [clock, setClock] = useState<Date>();
  useEffect(() => {
    setInterval(() => setClock(new Date()), 1000);
  }, []);

  return <p> {clock?.toLocaleTimeString() ?? "..."}</p>;
}
