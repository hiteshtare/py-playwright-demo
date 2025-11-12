# py-playwright-demo

## _Live Demo >> [Allure Reports using Playwright](https://vrt.yssofindia.org/e2e/py-playwright-demo/allure-reports/#)_

###  Description 
Demo of Visual Testing with Playwright

#### Steps to run project:

- #1 Navigate to parent folder:
```bash
cd ..
```
- #2 Give permission to execute to working folder
```bash
chmod -R a+x py-playwright-demo/
```
- #3 Navigate back to working folder
```bash
cd py-playwright-demo/
```
#
- Create baseline from Prod
```bash
npm run test:baseline
```
- Compare expected with Prod
```bash
npm run test:compare
```
#
`Cross-verify all results in GUI using Allure Reports`