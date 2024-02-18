import { expectToContainClasses } from './utils';

describe('expectToContainClasses', () => {
  it('should return true if the element contains all the specified classes', () => {
    // Arrange
    const element = document.createElement('div');
    element.classList.add('class1', 'class2', 'class3');

    // Act & Assert
    expect(() => expectToContainClasses(element, ['class1', 'class2', 'class3'])).not.toThrow();
  });

  it('should return false if the element does not contain any of the specified classes', () => {
    // Arrange
    const element = document.createElement('div');
    element.classList.add('class1', 'class2', 'class3');

    // Act & Assert
    expect(() => expectToContainClasses(element, ['class1', 'class2', 'class4'])).toThrow();
  });
});
