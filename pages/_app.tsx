import { AppProps } from 'next/app';
import { AuctionsFilterProvider } from '../Hooks/useAuctionsFilter';
import { AuthProvider } from '../Hooks/useAuth';
import '../public/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
    const AnyComponent = Component;
    return (
        <>
            <AuthProvider>
                <AuctionsFilterProvider>
                    <AnyComponent {...pageProps} />
                </AuctionsFilterProvider>
            </AuthProvider>
        </>
    );
}

export default MyApp;
