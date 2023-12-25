import StyledComponentsRegistry from '../lib/registry'
import './global.css'

export const metadata = {
  icons: [{ rel: 'icon', type: 'image/ico', url: '/favicon.ico' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

