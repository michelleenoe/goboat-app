import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import "../styles/globals.css";
export const metadata = {
  title: "GoBoat App",
  description: "GoBoat App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <main className="pb-10">
          <div>{children}
          <SpeedInsights />
          <Analytics />
          </div>
        </main>
      </body>
    </html>
  );
}
