# simple_regex_search
A very light-weight and simple NodeJS module to build regex search query .

# Usage
Download the module or install using npm
`npm install --save simple_regex_search`

The module exposes a function that takes two parameters , search phrase and combined. the search phrase must be a single string or an array of the search phrases , the combined is a boolean that specify if the regex search must meet all the words or any.

If the combined flag is true , all returned regex would require all search phrases to exist for the regex search to return true.

The default value of the combined flag is false.


# Example

`let search = require('simple_regex_search');`

**Single phrase | String**

> would return the regex syntax /^(?=.*\btest\b).*$/


`let example = search('test', true);`


> would return true


`example('test');`


> would return false


`example('something else');`


**Many Phrases | Array**


> would return the regex syntax /^(?=.*\bvalueA\b)(?=.*\bvalueB\b).*$/


`let example2 = search(['valueA', 'valueB'], true)`;


> would return false


`example2('test');`


> would return true


`example2('The order of ValueB and ValueA is not important');`
