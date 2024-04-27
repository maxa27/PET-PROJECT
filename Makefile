setup:
	npm install
install:
	npm ci
lint:
	npx eslint .
lint-fix:
	npm run lint-fix