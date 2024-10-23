"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/styles";
import Theme from "@/styles/theme";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={Theme}>
          <AppRouterCacheProvider options={{ key: "css" }}>
            {children}+{" "}
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
