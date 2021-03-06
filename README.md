# AdGuard Scriptlets and Redirect resources
[![Build Status](https://travis-ci.com/AdguardTeam/Scriptlets.svg?branch=master)](https://travis-ci.com/AdguardTeam/Scriptlets)

* [Scriptlets](#scriptlets)
    * [Syntax](#scriptlet-syntax)
    * [Available scriptlets](./wiki/about-scriptlets.md#scriptlets)        
    * [Scriptlets compatibility table](./wiki/compatibility-table.md#scriptlets)
* [Redirect resources](#redirect-resources)
    * [Syntax](#redirect-syntax)
    * [Available redirect resources](./wiki/about-redirects.md#redirect-resources)
    * [Redirect resources compatibility table](./wiki/compatibility-table.md#redirects)
* [How to build](#how-to-build)
* [Browser compatibility](#browser-compatibility)

* * *
## Scriptlets

Scriptlet is a JavaScript function that provides extended capabilities for content blocking. These functions can be used in a declarative manner in AdGuard filtering rules.

AdGuard supports a lot of different scriptlets. Please note, that in order to achieve cross-blocker compatibility, we also support syntax of uBO and ABP. 

### <a id="scriptlet-syntax"></a> Syntax

```
rule = [domains]  "#%#//scriptlet(" scriptletName arguments ")"
```

* `scriptletName` (mandatory) is a name of the scriptlet from AdGuard's scriptlets library
* `arguments` (optional) a list of `String` arguments (no other types of arguments are supported)

> **Remarks**
> * The meanining of the arguments depends on the scriptlet.
> * You can use either single or double quotes for the scriptlet name and arguments.
> * Special characters must be escaped properly:
>     * `'prop["nested"]'` - valid
>     * `"prop['nested']"` - valid
>     * `"prop[\"nested\"]"` - also valid
>     * `"prop["nested"]"` - not valid
>     * `'prop['nested']'` - not valid

**Example**

```
example.org#%#//scriptlet('abort-on-property-read', 'alert')
example.org#%#//scriptlet('remove-class', 'branding', 'div[class^="inner"]')
```

This rule applies the `abort-on-property-read` scriptlet on all pages of `example.org` and its subdomains, and passes one orgument to it (`alert`).

* **[Scriptlets list](./wiki/about-scriptlets.md#scriptlets)**
* **[Scriptlets compatibility table](./wiki/compatibility-table.md#scriptlets)**


## Redirect resources

AdGuard is able to redirect web requests to a local "resource".

### <a id="redirect-syntax"></a> Syntax

AdGuard uses the same filtering rule syntax as [uBlock Origin](https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#redirect). Also, it is compatible with ABP `$rewrite=abp-resource` modifier.

`$redirect` is a modifier for [the basic filtering rules](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#basic-rules-syntax) so rules with this modifier support all other basic modifiers like `$domain`, `$third-party`, `$script`, etc.

The value of the `$redirect` modifier must be the name of the resource, that will be used for redirection. See the list of resources [below](#available-resources).

**Examples**
* `||example.org/script.js$script,redirect=noopjs` -- redirects all requests to `script.js` to the resource named `noopjs`.
* `||example.org/test.mp4$media,redirect=noopmp4-1s` -- requests to `example.org/test.mp4` will be redirected to the resource named `noopmp4-1s`.

> `$redirect` rules priority is higher than the regular basic blocking rules' priority. This means that if there's a basic blocking rule (even with `$important` modifier), `$redirect` rule will prevail over it. If there's a whitelist (`@@`) rule matching the same URL, it will disable redirecting as well (unless the `$redirect` rule is also marked as `$important`).

> uBlock Origin specifies additional resource name `none` that can disable other redirect rules. AdGuard does not support it, use `$badfilter` to disable specific rules.

* **[Redirect resources list](./wiki/about-redirects.md#redirect-resources)**
* **[Redirect resources compatibility table](./wiki/compatibility-table.md#redirects)**

* * *

## <a id="how-to-build"></a> How to build

Install dependencies
```
yarn install
```

Build for CoreLibs
```
yarn corelibs
```

Build for Extension
```
yarn build
```

Build dev (rebuild js files on every change)
```
yarn watch
```

Run node testing
```
yarn test
```

Run tests gui
```
yarn gui-test
```


To run browserstack tests create `.env` file or rename `.env-example`.

Fill in <username> and <key> with data from your Browserstack profile.
Run next command
```
yarn browserstack
```

### Build output

#### Scriptlets library

You are welcome to use scriptlets and redirect resources as a CJS module. They can be imported from `dist/cjs/scriptlets.cjs.js`:

```javascript
const scriptlets = require('scriptlets');
const { redirects } = require('scriptlets');

```

And also there is a module at `dist/scriptlets.js` which has been exported to a global variable `scriptlets` with such methods:

```javascript
/**
* Returns scriptlet code
* @param {Source} source
* @returns {string}
*/
scriptlets.invoke(source);
```

```javascript
/**
* Checks if the scriptlet name is valid
* @param {string} name - scriptlet name
* @returns {boolean}
*/
scriptlets.isValidScriptletName(name);
```

```javascript
/**
* Validates any scriptlet rule
*
* ADG or UBO rule is single-scriptlet, but ABP rule may contain more than one snippet
* so if at least one of them is not valid - whole 'input' rule is not valid too.
* @param {string} input - can be Adguard or Ubo or Abp scriptlet rule
* @returns {boolean}
*/
scriptlets.isValidScriptletRule(input);
```

```javascript
/**
* Checks if the `rule` is AdGuard / Ubo / Abp scriptlet rule
* @param {string} rule - rule text
* @returns {boolean}
*/
scriptlets.isAdgScriptletRule(rule);
scriptlets.isUboScriptletRule(rule);
scriptlets.isAbpSnippetRule(rule);
```

```javascript
/**
* Converts Ubo scriptlet rule to AdGuard
* @param {string} rule - rule text
* @returns {Array} - array with one item - AdGuard scriptlet rule
*/
scriptlets.convertUboToAdg(rule);
```
> Note that parameters in UBO rule should be separated by comma + space. Otherwise, the rule is not valid.

```javascript
/**
* Converts Abp snippet rule to AdGuard
* @param {string} rule - rule text
* @returns {Array} - array with AdGuard scriptlet rule or rules if Abp-rule has few snippets in one line
*/
scriptlets.convertAbpToAdg(rule);
```

```javascript
/**
* Checks if the `rule` is any scriptlet rule and converts it to AdGuard
* @param {string} rule - rule text
* @returns {Array} - array of AdGuard scriptlet rules - one item for Adg and Ubo or few items for Abp
*/
scriptlets.convertScriptletToAdg(rule);
```

```javascript
/**
 * Converts AdGuard scriptlet rule to UBO one
 * @param {string} rule - AdGuard scriptlet rule
 * @returns {string} - UBO scriptlet rule
 */
scriptlets.convertAdgToUbo(rule);
```


##### <a id="redirects_api-methods"></a> Imported `redirects` has such methods:

```javascript
/**
* Returns redirects code
* @param {Source} source
* @returns {string}
*/
redirects.getCode(source);
```

```javascript
/**
 * Checks if the `rule` is AdGuard redirect rule.
 * Discards comments and JS rules and checks if the `rule` has 'redirect' modifier.
 * @param {string} rule - rule text
 */
redirects.isAdgRedirectRule(rule)
```

```javascript
/**
* Checks if the `rule` is **valid** AdGuard redirect rule
* @param {string} rule - redirect rule text
* @returns {boolean}
*/
redirects.isValidAdgRedirectRule(rule);
```

```javascript
/**
* Checks if the AdGuard redirect `rule` has Ubo analog. Needed for Adg->Ubo conversion
* @param {string} rule - AdGuard rule text
* @returns {boolean} - true if the rule can be converted to Ubo
*/
redirects.isAdgRedirectCompatibleWithUbo(rule);
```

```javascript
/**
* Checks if the Ubo redirect `rule` has AdGuard analog. Needed for Ubo->Adg conversion
* @param {string} rule - Ubo rule text
* @returns {boolean} - true if the rule can be converted to AdGuard
*/
redirects.isUboRedirectCompatibleWithAdg(rule);
```

```javascript
/**
* Checks if the Abp redirect `rule` has AdGuard analog. Needed for Abp->Adg conversion
* @param {string} rule - Abp rule text
* @returns {boolean} - true if the rule can be converted to AdGuard
*/
redirects.isAbpRedirectCompatibleWithAdg(rule);
```

```javascript
/**
* Converts Ubo redirect rule to AdGuard
* @param {string} rule - rule text
* @returns {string}
*/
redirects.convertUboRedirectToAdg(rule);
```

```javascript
/**
* Converts Abp redirect rule to AdGuard
* @param {string} rule - rule text
* @returns {string}
*/
redirects.convertAbpRedirectToAdg(rule);
```

```javascript
/**
* Checks if the `rule` is any redirect rule and converts it to AdGuard
* @param {string} rule - rule text
* @returns {string} - converted to Adguard redirect rule OR `rule` if it is valid Adguard rule
*/
redirects.convertRedirectToAdg(rule);
```

```javascript
/**
 * Converts Adg redirect rule to Ubo one
 * @param {string} rule
 * @returns {string}
 */
redirects.convertAdgRedirectToUbo(rule);
```


#### Corelibs library

`dist/scriptlets.corelibs.json`

File example
```
{
    "version": "1.0.0",
    "scriptlets": [
        {
            "names": [
                "abort-on-property-read",
                "ubo-abort-on-property-read.js",
                "abp-abort-on-property-read"
            ],
            "scriptlet": "function() { ...code... }"
        },
    ]
}
```

Schema
```
{
    "type": "object",
    "properties": {
        "version": {
            "type": "string"
        },
        "scriptlets": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "names": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "scriptlet": {
                        "type": "string"
                    }
                },
            }
        }
    }
}
```

#### Redirects library
```
dist/redirects.js
dist/redirects.yml
```

Creates a global variable `Redirects`.

```javascript
// Usage

/**
 * Converts rawYaml into JS object with sources titles used as keys
 */
const redirects = new Redirects(rawYaml)

/**
 * Returns redirect source object by title
 */
const redirect = redirect.getRedirect('noopjs');

/**
 * Redirect - object with following props
 * {
 *      title: 1x1-transparent.gif
 *      comment: http://probablyprogramming.com/2009/03/15/the-tiniest-gif-ever
 *      contentType: image/gif;base64
 *      content: R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
 * }
 */
```

## <a id="browser-compatibility"> Browser Compatibility
| Chrome | Edge | Firefox | IE | Opera | Safari |
|--|--|--|--|--|--|
| 55 | 15 | 52 | 11 | 42 | 10 |