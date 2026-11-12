import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const html = readFileSync(new URL("../../docs/index.html", import.meta.url), "utf8");

test("site is a standalone HTML document with one parseable inline script", () => {
  assert.match(html, /<!doctype html>/i);
  assert.equal((html.match(/<script(?:\s[^>]*)?>/gi) || []).length, 1);
  assert.doesNotMatch(html, /<script[^>]+src=/i);
  const script = html.match(/<script>([\s\S]*?)<\/script>/i)?.[1];
  assert.ok(script, "inline application script exists");
  new vm.Script(script);
});

test("resource catalogue uses real destinations and searchable metadata", () => {
  assert.match(html, /const items=\[/);
  assert.doesNotMatch(html, /https?:\/\/example\.com/i);
  assert.match(html, /platform\.openai\.com/);
  assert.match(html, /docs\.github\.com/);
  assert.match(html, /developer\.mozilla\.org/);
  assert.match(html, /x\.tags/);
});

test("saved resources, category filters and copy controls are wired", () => {
  assert.match(html, /localStorage\.getItem\("vault-saved"\)/);
  assert.match(html, /localStorage\.setItem\("vault-saved"/);
  assert.match(html, /data-filter/);
  assert.match(html, /navigator\.clipboard\.writeText/);
});


test("project directory covers the public portfolio with real repository links", () => {
  assert.match(html, /const projects = \[/);
  for (const project of ["Campus Plug", "OmniPocket", "Axiom", "OmniRoute", "Life Itself", "WasteLens", "Daily-Log", "UNILAG Watcher", "Vanguard"]) {
    assert.ok(html.includes(project), `project entry exists: ${project}`);
  }
  assert.match(html, /projectFilters/);
  assert.match(html, /renderProjects\(\)/);
  assert.match(html, /escapeHTML/);
  assert.doesNotMatch(html, /campus-connect-market/);
});
