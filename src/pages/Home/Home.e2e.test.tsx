// eslint-disable-next-line import/no-extraneous-dependencies
import puppeteer, { Browser, ElementHandle, Page } from 'puppeteer';

describe('Good user', () => {
  let browser: Browser;
  let page: Page;
  const searchExample = 'Harry Potter';
  const impossibleSearchExample =
    'veryhardtofindbookbytitleaboutharrypotter123123123';
  const inputSelector = 'input[name=search-input-field]';
  const categorySelectId = '#Category-select';
  const sortingSelectId = '#Sorting-select';
  const apiUrlPart = 'http://books.google.com';
  const apiUrlResponsePart = 'https://www.googleapis';

  beforeAll(async () => {
    jest.setTimeout(600000);
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  const getInputValue = async (
    input: ElementHandle<HTMLInputElement> | null,
  ): Promise<string> => {
    if (!input) return '';
    return page.evaluate((x) => x.value, input);
  };

  const muiSelectOption = async (
    buttonSelector: string,
    optionValue: string,
  ): Promise<void> => {
    await page.waitForSelector(buttonSelector);
    await page.$eval(buttonSelector, (el) => {
      const event = new MouseEvent('mousedown');
      event.initEvent('mousedown', true, true);
      return el.dispatchEvent(event);
    });
    const liSelector = `li[data-value="${optionValue}"]`;
    await page.waitForSelector(liSelector);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await page.$eval(liSelector, (e) => e.click());
  };

  it('Full correct behavior', async () => {
    await page.goto('http://localhost:8080');
    const input = await page.waitForSelector(inputSelector);
    await input?.type(searchExample);
    const inputValue = await getInputValue(input);
    expect(inputValue).toBe(searchExample);

    await muiSelectOption(categorySelectId, 'all');
    await muiSelectOption(sortingSelectId, 'newest');
    await page.focus(inputSelector);
    await page.keyboard.press('Enter');
    await page.waitForRequest((request) =>
      request.url().startsWith(apiUrlPart),
    );
    const linkToBook = await page.waitForSelector(
      'a[href="/books/z0eP0AEACAAJ"]',
    );
    expect(linkToBook).toBeTruthy();
    const linkInnerText =
      (await linkToBook?.evaluate((el) => el?.innerText)) ?? '';
    const isCorerctBook = linkInnerText.includes(
      "Harry Potter's Journey to Hogwarts",
    );
    expect(isCorerctBook).toBeTruthy();

    await linkToBook?.click();
    expect(page.url()).toBe('http://localhost:8080/books/z0eP0AEACAAJ');
  }, 600000);

  it('Empty input behaviour', async () => {
    await page.goto('http://localhost:8080');
    const input = await page.waitForSelector(inputSelector);
    await input?.type('');
    const inputValue = await getInputValue(input);
    expect(inputValue).toBe('');
    await page.focus(inputSelector);
    await page.keyboard.press('Enter');
    const helperText = await page.waitForSelector('p');
    expect(helperText).toBeTruthy();
    expect(await helperText?.evaluate((el) => el.innerText)).toBe(
      'Can not be empty.',
    );

    await input?.type(searchExample);
    const isHelperStillExists = await page.$('p');
    expect(isHelperStillExists).toBeFalsy();
  }, 600000);

  it('Empty result behaviour', async () => {
    await page.goto('http://localhost:8080');
    const input = await page.waitForSelector(inputSelector);
    await input?.type(impossibleSearchExample);
    const inputValue = await getInputValue(input);
    expect(inputValue).toBe(impossibleSearchExample);

    await muiSelectOption(categorySelectId, 'all');
    await muiSelectOption(sortingSelectId, 'newest');
    await page.focus(inputSelector);
    await page.keyboard.press('Enter');
    // await page.screenshot({
    //   path: 'screenshot.jpg',
    //   quality: 100,
    //   fullPage: true,
    // });
    await page.waitForResponse((response) =>
      response.url().startsWith(apiUrlResponsePart),
    );
    const h3 = await page.waitForSelector('h3');
    expect(h3).toBeTruthy();
    expect(await h3?.evaluate((el) => el.innerText)).toBe(
      'It seems, nothing was found :(',
    );
  }, 600000);

  afterAll(async () => {
    await browser.close();
  });
});
