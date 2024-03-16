import { useContext } from 'react';
import { CoreContext } from '../contexts/CoreContext';

export function useTwitch() {
	const context = useContext(CoreContext);

	if (context === undefined) {
		throw new Error('useTwitch must be used within a CoreProvider');
	}

	const twitch = Twitch;

	const status = context.isTwitchScriptReady;

	return { twitch, status };
}