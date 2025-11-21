function grant_exec_permissions() {
  cd ..
  chmod -R a+x py-playwright-demo
  cd py-playwright-demo/
}

# ----------------------------- baseline ----------------------------- #
# Common step
  grant_exec_permissions

echo "*** *** *** *** *** *** BASELINE *** *** *** *** *** ***"
echo ">>> Running baseline"
npm run test:baseline
echo "baseline >> Completed successfully!"
echo "+++ Triggering chromatic build now +++"
npx chromatic --playwright --project-token=chpt_5a544be663527db --force-rebuild 
echo "*** *** *** *** *** *** BASELINE *** *** *** *** *** ***"
# ----------------------------- baseline ----------------------------- #

# ----------------------------- compare ----------------------------- #
# Common step
  grant_exec_permissions

echo "####################### COMPARE #######################"
echo ">>> Running compare"
npm run test:compare
echo "compare >> Completed successfully!"
echo "+++ Triggering chromatic build now +++"
npx chromatic --playwright --project-token=chpt_5a544be663527db --force-rebuild 
echo "####################### COMPARE #######################"
# ----------------------------- compare ----------------------------- #

npx playwright show-report

echo "e2e for Bookstore: https://vrt.yssofindia.org/e2e/py-playwright-demo/playwright-report/#"