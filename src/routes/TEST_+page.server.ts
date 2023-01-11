/** @type {import('./$types').PageLoad} */

import { contentfulClient } from '../lib/contentful';

const data = contentfulClient.getEntries();
// const data = contentfulClient.getEntries({ content_type: 'page' });

export function load() {
	return data;
}
