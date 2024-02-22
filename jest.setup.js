/*
// jest.setup.js
const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!doctype html><html><body></body></html>');
const jsdomConfig = {
  url: 'http://localhost',
};
const jsdom = new JSDOM(undefined, jsdomConfig);
const { window } = jsdom;

global.window = dom.window;
global.document = dom.window.document;
global.navigator = {
  ...window.navigator,
  userAgent: 'node.js',
};

// This is to prevent the "document is not defined" error in tests that rely on material-ui
global.window.HTMLCanvasElement.prototype.getContext = () => {};

// Optionally, you may want to add any additional global variables or polyfills needed for your tests

// Clean up after tests
afterAll(() => {
  jest.resetAllMocks();
});
 */

const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = dom;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

// Clean up after tests
afterAll(() => {
  jest.resetAllMocks();
});
