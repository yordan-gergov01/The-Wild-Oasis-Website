import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

import "./_styles/globals.css";

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
        <footer>Copywright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
