import { ReactNode } from "react";

export default function ContentLayout({ children }: { children: ReactNode }) {
  return <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">{children}</div>;
}
