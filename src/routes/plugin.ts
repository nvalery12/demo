import type { RequestHandler } from '@builder.io/qwik-city';
import { validateLocale } from 'qwik-speak';

import { config } from '../speak-config';

/**
 * This middleware function must only contain the logic to set the locale,
 * because it is invoked on every request to the server.
 * Avoid redirecting or throwing errors here, and prefer layouts or pages
 */
export const onRequest: RequestHandler = ({ params, locale }) => {
  let lang: string | undefined = undefined;

  if (params.lang && validateLocale(params.lang)) {
    // Check supported locales
    lang = config.supportedLocales.find(value => value.lang === params.lang)?.lang;
  } else {
    lang = config.defaultLocale.lang;
  }
  console.log(lang)
  

  // Set Qwik locale
  locale(lang);
};