import { AppProps } from 'next/app';
import { AuthProvider } from '../Hooks/useAuth';
import '../public/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <>
        <AuthProvider>
          <AnyComponent {...pageProps} />
        </AuthProvider>
    </>
  );
}

export default MyApp;
