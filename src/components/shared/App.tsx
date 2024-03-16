import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useCoreState } from '../../hooks/useCoreState';

type AppProps = {
	appType: 'mobile' | 'overlay' | 'component';
};

const queryClient = new QueryClient();

export function App({ appType }: AppProps) {
	const { isAppReady } = useCoreState();

	if (!isAppReady) {
		return null; // TODO: Add loading screen
	}

	return (
		<QueryClientProvider client={queryClient}>
			<p>App</p>
		</QueryClientProvider>
	);
}
