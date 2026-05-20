import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('French home states the B2B manufacturing offer immediately', () => {
  const html = read('fr/index.html');

  assert.match(html, /Fabricant textile à Madagascar pour les marques de mode exigeantes/);
  assert.match(html, /Depuis 2002/);
  assert.match(html, /Parler d’un projet/);
  assert.match(html, /atelier_confection\.jpg/);
  assert.doesNotMatch(html, /usine_actual_textiles-min\.jpg/);
});

test('English home keeps the same value proposition for international buyers', () => {
  const html = read('index.html');

  assert.match(html, /Textile manufacturer in Madagascar for demanding fashion brands/);
  assert.match(html, /Since 2002/);
  assert.match(html, /Talk about a project/);
});

test('core routes expose one h1 and no placeholder content', () => {
  const routes = [
    'index.html',
    'fr/index.html',
    'production/index.html',
    'fr/savoir-faire/index.html',
    'quality-certifications/index.html',
    'fr/qualite-certifications/index.html',
    'sustainability/index.html',
    'fr/durabilite/index.html',
    'about-us/index.html',
    'fr/a-propos/index.html',
    'talents/index.html',
    'fr/talents/index.html',
    'contact/index.html',
    'fr/contact/index.html',
    'news/index.html',
    'fr/actualites/index.html'
  ];

  for (const route of routes) {
    const html = read(route);
    const h1Count = (html.match(/<h1\b/g) || []).length;

    assert.equal(h1Count, 1, `${route} should contain exactly one h1`);
    assert.doesNotMatch(html, /lorem|ipsum|Suspendisse|Duis tempus|Nam id posuere|pas de projets pour le moment/i);
    assert.doesNotMatch(html, /card-mark|>0[1-9]</, `${route} should not show repetitive numeric annotations`);
  }
});

test('redesigned pages include richer visual sections', () => {
  const home = read('fr/index.html');
  const about = read('fr/a-propos/index.html');
  const production = read('fr/savoir-faire/index.html');

  assert.match(home, /class="[^"]*visual-intro/);
  assert.match(home, /class="[^"]*card-media/);
  assert.match(home, /class="[^"]*commitments-section/);
  assert.doesNotMatch(home, /section dark commitments-section/);
  assert.match(home, /class="[^"]*commitment-card/);
  assert.match(home, /class="[^"]*commitment-card-media/);
  assert.match(home, /Usine alimentée à l’énergie solaire/);
  assert.match(production, /class="[^"]*process-rail/);
  assert.match(about, /class="[^"]*mosaic-panel/);
});
