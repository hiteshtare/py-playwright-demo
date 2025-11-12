function grant_exec_permissions() {
  cd ..
  chmod -R a+x py-playwright-demo/
  cd py-playwright-demo/
}

# ----------------------------- baseline ----------------------------- #
# Common step
  grant_exec_permissions

echo ">>> Running baseline"
npm run test:baseline
echo "baseline >> Completed successfully!"
# ----------------------------- baseline ----------------------------- #

# ----------------------------- compare ----------------------------- #
# Common step
  grant_exec_permissions

echo ">>> Running compare"
npm run test:compare
echo "compare >> Completed successfully!"
# ----------------------------- compare ----------------------------- #