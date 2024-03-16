import { useContext } from 'react';
import { CoreContext } from '../contexts/CoreContext';

export function useCoreState() {
	const context = useContext(CoreContext);

	if (context === undefined) {
		throw new Error('useTwitch must be used within a CoreProvider');
	}

	return context;
}
