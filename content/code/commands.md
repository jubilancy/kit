# Commands

Short, single-purpose snippets meant to be run directly (mostly as one-off browser console commands).

## Copy All Image URLs on a Page
Selects every `<img>` on the page and copies their `src` URLs to the clipboard as a newline-separated list.
```js
copy($$('img').map(img => img.src).join('\n'));
```

## Extract Text from All Links on a Page
Pulls the visible text of every link on the page into an array.
```js
Array.from(document.querySelectorAll('a')).map(link => link.textContent);
```

## Change Text of an Element by ID
Replaces the text content of a specific element, referenced by its ID.
```js
document.getElementById('myElementId').textContent = 'New Text';
```

## Hide All Elements With a Given Class
Sets `display: none` on every element matching a class name.
```js
document.querySelectorAll('.myClassName').forEach(el => el.style.display = 'none');
```

## Log the Currently Selected DevTools Element
Prints the element currently selected in the Elements panel (and its attributes) to the console.
```js
console.log($0);
console.log($0.attributes);
```

## Get the Value of a Single Input Field
Reads the current value from an input element by ID.
```js
document.getElementById('myInput').value;
```

## Get All Form Field Values
Collects the name/value pairs of every field in the first form on the page.
```js
Array.from(document.forms[0].elements).map(el => ({ name: el.name, value: el.value }));
```

## Time a Function's Execution
Starts and stops a named timer in the console to measure how long code takes to run.
```js
console.time('myFunction');
// ... call myFunction() ...
console.timeEnd('myFunction');
```

## Clear the Console
Clears all output from the current DevTools console.
```js
console.clear();
```
