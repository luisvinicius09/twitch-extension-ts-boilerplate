import { useScript } from '@uidotdev/usehooks';
import { createContext, useEffect, useState } from 'react';

type CoreContextShape = {
	isAppReady: boolean;
	isTwitchScriptReady: 'unknown' | 'loading' | 'ready' | 'error';
};

const CoreContext = createContext<CoreContextShape | undefined>(undefined);

function CoreProvider({ children }: { children: React.ReactNode }) {
	const [isAppReady, setIsAppReady] = useState(false);

	const status = useScript('https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js', {
		removeOnUnmount: false,
	});

	useEffect(() => {
		setIsAppReady(true);
	}, [status]);

	const value = { isAppReady, isTwitchScriptReady: status } satisfies CoreContextShape;

	return <CoreContext.Provider value={value}>{children}</CoreContext.Provider>;
}

export { CoreProvider, CoreContext };
