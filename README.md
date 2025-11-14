# py-playwright-demo

## _Demo >> [Allure Reports using Playwright](https://vrt.yssofindia.org/e2e/py-playwright-demo/allure-reports/#)_

## _Demo >> [Playwright - Default Reporter](https://vrt.yssofindia.org/e2e/py-playwright-demo/playwright-report/#)_

###  Description 
Demo of Visual Testing with Playwright

#### Steps to run project:

- Run the following script
```bash
./run-baseline-AND-compare.sh
```
#
- Create baseline from Prod
```bash
npm run test:baseline
npx chromatic --playwright --project-token=<your-project-token-goes-here>
```
- Compare expected with Prod
```bash
npm run test:compare
npx chromatic --playwright --project-token=<your-project-token-goes-here>
```
#
`Cross-verify all results in GUI using Allure Reports`