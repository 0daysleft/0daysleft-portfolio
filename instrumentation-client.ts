// This file configures the initialization of Sentry on the client.

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://c21861e7e981ce30e765638ec82ad20d@o4510435655090176.ingest.de.sentry.io/4510435657384016",

  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
    }),
  ],

  tracesSampleRate: 1,
  enableLogs: true,

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  sendDefaultPii: true,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
