"use client";

import { TanstackQueryProvider } from "@/providers/QueryClientProvider";
import { useState, useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [children]);
  return <TanstackQueryProvider>{mounted && children}</TanstackQueryProvider>;
}
