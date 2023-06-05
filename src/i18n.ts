import { addMessages, getLocaleFromNavigator, init } from 'svelte-i18n';

import en from './lib/translations/en.json';
import pt from './lib/translations/pt.json';

addMessages('en-US', en);
addMessages('pt-BR', pt);

init({ fallbackLocale: 'en-US', initialLocale: getLocaleFromNavigator() });
