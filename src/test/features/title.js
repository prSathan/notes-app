const expect = require('chai').expect;

describe('Notes App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Notes');
  });

  it('Should allow me to create a Note', () => {
   const noteText = 'Find my Past tech test';
   browser.url('http://localhost:3000/');
   browser.element('.note-input').setValue(noteText);
   browser.click('.note-submit');
   const actual = browser.element('.note-text').getText();

   expect(actual).to.equal(noteText);
 });
});
