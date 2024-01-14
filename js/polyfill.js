/*
 * Polyfill service v3.25.1
 * For detailed credits and licence information see https://polyfill.io.
 * 
 * Features requested: Array.prototype.includes,Element.prototype.classList,Element.prototype.dataset,es6
 * 
 * - Array.prototype.values, License: MIT
*/

(function(self, undefined) {

// Array.prototype.values
/* global Symbol */
Object.defineProperty(Array.prototype, 'values', {
	value: Array.prototype[Symbol.iterator],
	enumerable: false,
	writable: false
});
})
('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
