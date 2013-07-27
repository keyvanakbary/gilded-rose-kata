all: build test

build:
	coffee -o lib -cw src

test:
	coffee -o lib test/lib -cw test/src src

.PHONY: build test