 var _ = require('lodash');

//return a regular expression string to be used for performing search for the keywords on any text
function search(words, combined){
	var combined = combined || false;
	var exp = '';
	var query = '';

	//stringify object to make it search able
	if(isObject(words) && !isArray(words)){
		words = JSON.stringify(words);
	}

	if(_.isArray(words)){
		if(combined){
			_.forEach(words, function(word){
				exp += '(?=.*\\b' + word + '\\b)';
			});
		} else {
			_.forEach(words, function(word, index){
				if(index == 0){
					exp += '(\\b' + word + '\\b)';
				} else {
					exp += '|(\\b' + word + '\\b)';
				}
			});
		}
	} else {
		if(combined){
			exp += '(?=.*\\b' + words + '\\b)';
		} else {
			exp += '(\\b' + words + '\\b)';
		}
	}

	if(combined){
		query = new RegExp('^' + exp + '.*$');
	} else {
		query = new RegExp(exp);
	}

	return query;
}

module.exports = search;
