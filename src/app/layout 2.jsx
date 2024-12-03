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
          <div>{children}</div>
        </main>

      </body>
    </html>
  );
}
