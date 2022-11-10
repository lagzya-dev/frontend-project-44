brain-games:
	./bin/brain-games.js
install:
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint