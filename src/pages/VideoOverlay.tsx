import React from 'react';
import ReactDOM from 'react-dom/client';

import './index';

import { CoreProvider } from '../contexts/CoreContext';
import { App } from '../components/shared/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CoreProvider>
			<App appType='overlay' />
		</CoreProvider>
	</React.StrictMode>
);
