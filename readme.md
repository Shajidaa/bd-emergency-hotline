1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:

## getElementById() :

Selects a single element by it id .Returns the actual DOM elements if found,otherwise returns null.

## getElementsByClassName() :

Selects all elements a given a specific class name. Returns a live HTMLCollection.

It doesn't support forEach() directly ;this is required Array.from().and automatically updates if the DOM changes.

## querySelector():

Returns the first element that matches any CSS selector. It returns a single DOM element.

## querySelectorAll():

Selects all elements that match a CSS selector , And returns a nodeList
It works directly forEach() method and doesn't automatically updates if the DOM changes.

---

2.How do you create and insert a new element into the DOM?
Answer:

Use document.createElement('tagName') to create the element in memory.Set its content or attributes using properties like innerText,innerHTML ,id or className. It becomes part of the DOM only when inserted with methods like appendChild() or append()

---

3.What is Event Bubbling and how does it work?
Answer:

Event bubbling is a type of event propagation in the DOM.when an event occurs on a child element ,it first triggers on that element and then propagates upward to its parent elements , all the way up to the document .It can be stopped using event.stopPropagation().

---

4.What is Event Delegation in JavaScript? Why is it useful?

Answer:

Event Delegation is a technique where we attach a single event listener to a parent element to handle events on its child elements . It is useful cause

i) It improves performance by reducing the number of event listeners,so less memory usage.
ii)Keeps code cleaner and easier to maintain;
iii) dynamically added elements

---

5.What is the difference between preventDefault() and stopPropagation() methods?
Answer:

## preventDefault() :

Prevents the default browser behavior of an element .

example: Stopping a form from submitting .

## stopPropagation() :

Stops the event from bubbling up (or propagating ) to parent elements.

example: a button click inside a div won't trigger the div's click handler.
