import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from '../src/App';

const routes = [
  ['/terms', 'Nerho Terms &amp; Conditions'],
  ['/privacy-policy', 'Nerho Privacy Policy'],
  ['/delete-account', 'Delete Your Nerho Account'],
  ['/support', 'Nerho App Support'],
  ['/contact', 'Get In Touch With Us'],
] as const;
for (const [path, title] of routes) {
  Object.assign(globalThis, { window: { location: { pathname: path } } });
  const html = renderToStaticMarkup(React.createElement(App));
  assert.ok(html.includes(title), `${path} must render its own page`);
  assert.ok(!html.includes('Get Your <span>Essential'), `${path} must not render the landing hero`);
  for (const url of ['/terms', '/privacy-policy', '/delete-account', '/support']) {
    assert.ok(html.includes(`href="${url}"`), `${path} must expose ${url} in navigation`);
  }
  if (path === '/delete-account') {
    assert.ok(html.includes('type="email"') && html.includes('required=""'), 'Deletion request must identify the account');
    assert.ok(html.includes('type="checkbox"'), 'Deletion request must require an explicit selection');
    assert.ok(!html.includes('type="password"'), 'Deletion request must not collect passwords');
    assert.ok(html.includes('mailto:nerho@gmail.com'), 'Deletion request must provide a direct email alternative');
    assert.ok(html.includes('You must send the email'), 'Email preparation must not imply submission');
  }
  if (path === '/terms') {
    assert.ok(html.includes('Pay With Zero is interest-free'), 'Terms must reflect the confirmed payment plan');
  }
  console.log(`PASS ${path}`);
}
Object.assign(globalThis, { window: { location: { pathname: '/' } } });
assert.ok(renderToStaticMarkup(React.createElement(App)).includes('Get Your <span>Essential'), 'Landing page must remain available');
console.log('PASS /');
