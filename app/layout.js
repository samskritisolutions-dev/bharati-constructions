import './globals.css';

export const metadata = {
  title: 'Bharathi Horizon · 3 BHK Premium Apartments, Kompally',
  description: '3 BHK premium apartments at Petbasheerabad, near Suchitra Circle, Kompally. 1,945–2,400 sq ft with a rooftop infinity pool and a garden on every floor.',
};
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Poppins:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
