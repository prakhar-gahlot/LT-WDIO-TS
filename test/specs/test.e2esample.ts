import { expect, browser, $ } from '@wdio/globals'

describe('Sample Test Suite', () => {
  it('should open a website and perform some steps', () => {
      browser.url('https://example.com'); // Open the website

      // Example steps:
      const pageTitle = browser.getTitle();
      console.log('Page Title:', pageTitle);

      const header = $('h1').getText();
      console.log('Header Text:', header);

      // Assertion example
      expect(pageTitle).toBe('Example Domain');
  });
});

