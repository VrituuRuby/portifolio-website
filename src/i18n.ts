import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

register('en-US', () => import('./lib/translations/en.json'));
register('pt-BR', () => import('./lib/translations/pt.json'));

init({ fallbackLocale: 'pt-BR', initialLocale: browser ? window.navigator.language : 'pt-BR' });
