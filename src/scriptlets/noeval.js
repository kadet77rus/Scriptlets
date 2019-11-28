/* eslint-disable no-eval, no-extra-bind */
import { hit } from '../helpers';

/**
 * @redirect noeval.js
 *
 * @description
 * Redirects request to the source which sets static properties to PopAds and popns objects
 *
 * Prevents page to use eval.
 * Notifies about attempts in the console
 *
 * Related UBO scriptlets:
 * https://github.com/gorhill/uBlock/wiki/Resources-Library#noevaljs-
 * https://github.com/gorhill/uBlock/wiki/Resources-Library#silent-noevaljs-
 *
 * **Example**
 * ```
 * ||example.org/index.js$script,redirect=noeval.js
 * ```
 */
export function noeval(source) {
    window.eval = function evalWrapper(s) {
        hit(source, `AdGuard has prevented eval:\n${s}`);
    }.bind();
}

noeval.names = [
    'noeval',
    'noeval.js',
    'silent-noeval.js',
    'ubo-noeval.js',
    'ubo-silent-noeval.js',
];

noeval.injections = [hit];
