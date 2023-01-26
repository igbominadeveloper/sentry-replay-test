import { createApp } from 'vue';
import * as Sentry from '@sentry/vue';

import './style.css';
import App from './App.vue';

Sentry.init({
  app: App,
  dsn: 'https://6f02d883eee44050b7a88a0e1ca26cb7@o4504570864271360.ingest.sentry.io/4504570918469632',
  integrations: [
    new Sentry.Replay(),
    // new BrowserTracing({
    //   routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    //   tracePropagationTargets: ['localhost', 'my-site-url.com', /^\//],
    // }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

createApp(App).mount('#app');
