import { createApp } from 'vue';
import * as Sentry from '@sentry/vue';

import './style.css';
import App from './App.vue';

const app = createApp(App);

Sentry.init({
  app,
  dsn: 'https://6f02d883eee44050b7a88a0e1ca26cb7@o4504570864271360.ingest.sentry.io/4504570918469632',

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 1.0,

  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  integrations: [
    new Sentry.Replay({
      // Additional SDK configuration goes in here, for example:
      //   maskAllText: true,
      // blockAllMedia: true,
    }),
  ],
});

app.mount('#app');
