import { discardPeriodicTasks, fakeAsync, flush } from "@angular/core/testing";

/**
 * An async function that can be used to wrap async code in replacement of fakeAsync.
 * 
 * @example
 * ```ts
 * it("should create", asyncTest(() => {
 *    expect(component).toBeInstanceOf(App);
 * }));
 * ```
*/
export function asyncTest(fn: () => void): void {
    fakeAsync(() => {
        fn();

        flush();
        discardPeriodicTasks();
    });
}
