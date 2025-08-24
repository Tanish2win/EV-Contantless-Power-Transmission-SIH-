import React, { ReactNode } from "react";

export const metadata = {
  title: "Line Following Car",
  description: "Testing website for Line Following Car project",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
