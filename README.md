# ngx-[Jasmine](https://github.com/jasmine/jasmine) async wrapper

A wrapper for async functions in Angular + Jasmine tests

## Usage

```ts
it("should create", asyncTest(() => {
    expect(component).toBeInstanceOf(App);
}));
```

## Why?

Because

1. Jasmine throws an error if there are still async tasks waiting
2. Discarding async tasks must be done explicitly as they have to be discarded in the same async zone as they were created (we can't use `afterEach`)
