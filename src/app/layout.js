import StyledComponentsRegistry from '../lib/registry'


export const metadata = {
  icons: [{ rel: 'icon', type: 'image/ico', url: '/favicon.ico' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body >
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}

