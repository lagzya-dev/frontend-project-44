brain-games:
	./bin/brain-games.js
brain-even:
	./bin/brain-even.js
install:
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint