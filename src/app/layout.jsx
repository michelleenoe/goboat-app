import "../styles/globals.css";
import Header from "../app/components/basics/Header";
import Footer from "../app/components/basics/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className="flex flex-col min-h-screen">
        <div className="block lg:hidden">
          <Header />
        </div>

        <main className="flex-grow pb-10">
          <div className="block lg:hidden">
            {children}
          </div>

          <div className="hidden lg:flex min-h-screen items-center justify-center">
            <h1 className="text-2xl font-bold">
              Denne side er kun tilgængelig på mobile enheder
            </h1>
          </div>
        </main>

        <div className="block lg:hidden">
          <Footer />
        </div>
      </body>
    </html>
  );
}
