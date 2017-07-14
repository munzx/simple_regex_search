# simple_regex_search
A very light-weight and simple NodeJS module to build regex search query .

# Usage
Download the module or install using npm
- npm install --save simple_regex_search

the module takes two parameters , search phrase and combined. the search phrase must be a single string or an array of the search phrases , the combined is a boolean that specify if the regex search must meet all the words or any.

If combined flag is true , all search phrases should exist for the regex search to return true. The default value of the combined flag is false.


# Example
let search = require('simple_regex_search');

search('test', true);

search.test('something'); // false


search(['alpha', 'beta'], false);

search.test('alpha beta') //true






