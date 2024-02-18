export function expectToContainClasses(element: HTMLElement, classes: string[]): void {
  classes.forEach((className) => {
    expect(element.classList.contains(className)).toBe(true);
  });
}
