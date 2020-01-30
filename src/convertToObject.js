'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(item => item.split(':'))
    .reduce((result, property) => {
      if (property[1] !== undefined) {
        result[property[0].trim()] = property[1].trim();
      }

      return result;
    }, {});
}

module.exports = convertToObject;
