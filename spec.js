'use strict';

describe('TODOMVC', () => {
    it('add item on list', () => {
        const text = 'uhuuu meu primeiro item no todo';
        const todoInput = element(by.id('new-todo'));
        const todoList = element(by.id('todo-list'));

        // Arrange
        browser.get('');

        // Act
        todoInput.sendKeys(text);
        todoInput.sendKeys(protractor.Key.ENTER);

        // Assert
        expect(todoList.isDisplayed()).toBe(true);
        expect(todoList.getText()).toEqual(text);
    });
});
