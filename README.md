# py-playwright-demo

## _Demo >> [Visual Regression Tracker Dashboard](http://139.59.33.178/#)_

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
```
- Compare expected with Prod
```bash
npm run test:compare
```
#
`VRT .env Config`

#
```
VRT_APIURL=http://139.59.33.178:4200
VRT_PROJECT=1a762055-0032-4075-bdac-8ae82515a3c2
VRT_APIKEY=DEFAULTUSERAPIKEYTOBECHANGED
VRT_BRANCHNAME=master
```
