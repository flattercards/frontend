# scripts/deploy

ember build --environment=production

cp dist/index.html dist/200.html

surge ./dist flatter.cards
