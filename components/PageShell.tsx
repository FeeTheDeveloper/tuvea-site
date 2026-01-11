import { ReactNode } from "react";

export default function PageShell({ children }: { children: ReactNode }) {
  return <div className="bg-uvea-black text-uvea-white">{children}</div>;
}
