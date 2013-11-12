node_modules: package.json
	npm install

.PHONY: test
test:
	./node_modules/.bin/mocha \
		$(shell find . -path ./node_modules -prune -o -name '*_test.js' -type f)
