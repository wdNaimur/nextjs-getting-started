import "./globals.css";

// metadata is a reserved name
// normally this metadata will cover all pages under this layout by default.
//thats why we don't need to use head tag in html.
//icon.png is used as favicon thats why we don't need to add favicon in html
// we can make other component file in anywhere in the file.`

export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
