## <a id="redirect-resources"></a> Available Redirect resources
* [1x1-transparent.gif](#1x1-transparent.gif)
* [2x2-transparent.png](#2x2-transparent.png)
* [3x2-transparent.png](#3x2-transparent.png)
* [32x32-transparent.png](#32x32-transparent.png)
* [noopframe](#noopframe)
* [noopcss](#noopcss)
* [noopjs](#noopjs)
* [nooptext](#nooptext)
* [noopvast-2.0](#noopvast-2.0)
* [noopvast-3.0](#noopvast-3.0)
* [noopmp3-0.1s](#noopmp3-0.1s)
* [noopmp4-1s](#noopmp4-1s)
* [google-analytics-ga](#google-analytics-ga)
* [google-analytics](#google-analytics)
* [googlesyndication-adsbygoogle](#googlesyndication-adsbygoogle)
* [googletagmanager-gtm](#googletagmanager-gtm)
* [googletagservices-gpt](#googletagservices-gpt)
* [metrika-yandex-tag](#metrika-yandex-tag)
* [metrika-yandex-watch](#metrika-yandex-watch)
* [noeval](#noeval)
* [prevent-fab-3.2.0](#prevent-fab-3.2.0)
* [prevent-popads-net](#prevent-popads-net)
* [scorecardresearch-beacon](#scorecardresearch-beacon)
* [set-popads-dummy](#set-popads-dummy)
* * *
### <a id="1x1-transparent.gif"></a> ⚡️ 1x1-transparent.gif
**Example**
```
||example.org^$image,redirect=1x1-transparent.gif
```
[Redirect source](../src/redirects/static-redirects.yml)
* * *

### <a id="2x2-transparent.png"></a> ⚡️ 2x2-transparent.png
**Example**
```
||example.org^$image,redirect=2x2-transparent.png
```
[Redirect source](../src/redirects/static-redirects.yml)
* * *

### <a id="3x2-transparent.png"></a> ⚡️ 3x2-transparent.png
**Example**
```
||example.org^$image,redirect=3x2-transparent.png
```
[Redirect source](../src/redirects/static-redirects.yml)
* * *

### <a id="32x32-transparent.png"></a> ⚡️ 32x32-transparent.png
**Example**
```
||example.org^$image,redirect=32x32-transparent.png
```
[Redirect source](../src/redirects/static-redirects.yml)
* * *

### <a id="noopframe"></a> ⚡️ noopframe
**Example**
```
||example.com^$subdocument,redirect=noopframe,domain=example.org
```
[Redirect source](../src/redirects/static-redirects.yml)
* * *

### <a id="noopcss"></a> ⚡️ noopcss
**Example**
```
||example.org^$stylesheet,redirect=noopcss
```
[Redirect source](../src/redirects/static-redirects.yml)
* * *

### <a id="noopjs"></a> ⚡️ noopjs
**Example**
```
||example.org^$script,redirect=noopjs
```
[Redirect source](../src/redirects/static-redirects.yml)
* * *

### <a id="nooptext"></a> ⚡️ nooptext
**Example**
```
||example.org^$xmlhttprequest,redirect=nooptext
```
[Redirect source](../src/redirects/static-redirects.yml)
* * *

### <a id="noopvast-2.0"></a> ⚡️ noopvast-2.0
Redirects request to an empty VAST response.

**Example**
```
||example.org^$xmlhttprequest,redirect=noopvast-2.0
```
[Redirect source](../src/redirects/static-redirects.yml)
* * *

### <a id="noopvast-3.0"></a> ⚡️ noopvast-3.0
Redirects request to an empty VAST response.

**Example**
```
||example.org^$xmlhttprequest,redirect=noopvast-3.0
```
[Redirect source](../src/redirects/static-redirects.yml)
* * *

### <a id="noopmp3-0.1s"></a> ⚡️ noopmp3-0.1s
**Example**
```
||example.org^$media,redirect=noopmp3-0.1s
```
[Redirect source](../src/redirects/static-redirects.yml)
* * *

### <a id="noopmp4-1s"></a> ⚡️ noopmp4-1s
**Example**
```
||example.org^$media,redirect=noopmp4-1s
```
[Redirect source](../src/redirects/static-redirects.yml)
* * *

### <a id="google-analytics-ga"></a> ⚡️ google-analytics-ga

Mocks old Google Analytics API.

Related UBO redirect resource:
https://github.com/gorhill/uBlock/blob/a94df7f3b27080ae2dcb3b914ace39c0c294d2f6/src/web_accessible_resources/google-analytics_ga.js

**Example**
```
||example.org/index.js$script,redirect=google-analytics-ga
```
[Redirect source](../src/redirects/google-analytics-ga.js)
* * *

### <a id="google-analytics"></a> ⚡️ google-analytics

Mocks Google Analytics API.

Related UBO redirect resource:
https://github.com/gorhill/uBlock/blob/a94df7f3b27080ae2dcb3b914ace39c0c294d2f6/src/web_accessible_resources/google-analytics_analytics.js

**Example**
```
||example.org/index.js$script,redirect=google-analytics
```
[Redirect source](../src/redirects/google-analytics.js)
* * *

### <a id="googlesyndication-adsbygoogle"></a> ⚡️ googlesyndication-adsbygoogle

Mocks Google AdSense API.

Related UBO redirect resource:
https://github.com/gorhill/uBlock/blob/a94df7f3b27080ae2dcb3b914ace39c0c294d2f6/src/web_accessible_resources/googlesyndication_adsbygoogle.js

**Example**
```
||example.org/index.js$script,redirect=googlesyndication-adsbygoogle
```
[Redirect source](../src/redirects/googlesyndication-adsbygoogle.js)
* * *

### <a id="googletagmanager-gtm"></a> ⚡️ googletagmanager-gtm

Mocks Google Tag Manager API.

Related UBO redirect resource:
https://github.com/gorhill/uBlock/blob/a94df7f3b27080ae2dcb3b914ace39c0c294d2f6/src/web_accessible_resources/googletagmanager_gtm.js

**Example**
```
||example.org/index.js$script,redirect=googletagmanager-gtm
```
[Redirect source](../src/redirects/googletagmanager-gtm.js)
* * *

### <a id="googletagservices-gpt"></a> ⚡️ googletagservices-gpt

Mocks Google Publisher Tag API.

Related UBO redirect resource:
https://github.com/gorhill/uBlock/blob/a94df7f3b27080ae2dcb3b914ace39c0c294d2f6/src/web_accessible_resources/googletagservices_gpt.js

**Example**
```
||example.org/index.js$script,redirect=googletagservices-gpt
```
[Redirect source](../src/redirects/googletagservices-gpt.js)
* * *

### <a id="metrika-yandex-tag"></a> ⚡️ metrika-yandex-tag

Mocks Yandex Metrika API.
https://yandex.ru/support/metrica/objects/method-reference.html

**Example**
```
||example.org/index.js$script,redirect=metrika-yandex-tag
```
[Redirect source](../src/redirects/metrika-yandex-tag.js)
* * *

### <a id="metrika-yandex-watch"></a> ⚡️ metrika-yandex-watch

Mocks the old Yandex Metrika API.
https://yandex.ru/support/metrica/objects/_method-reference.html

**Example**
```
||example.org/index.js$script,redirect=metrika-yandex-watch
```
[Redirect source](../src/redirects/metrika-yandex-watch.js)
* * *

### <a id="noeval"></a> ⚡️ noeval

Redirects request to the source which sets static properties to PopAds and popns objects.

Prevents page to use eval.
Notifies about attempts in the console

Related UBO redirect resource:
https://github.com/gorhill/uBlock/wiki/Resources-Library#noevaljs-
https://github.com/gorhill/uBlock/wiki/Resources-Library#noeval-silentjs-

**Example**
```
||example.org/index.js$script,redirect=noeval
```
[Redirect source](../src/redirects/noeval.js)
* * *

### <a id="prevent-fab-3.2.0"></a> ⚡️ prevent-fab-3.2.0

Redirects fuckadblock script to the source js file.

**Example**
```
\*\/fuckadblock-$script,redirect=prevent-fab-3.2.0
```
[Redirect source](../src/redirects/prevent-fab-3.2.0.js)
* * *

### <a id="prevent-popads-net"></a> ⚡️ prevent-popads-net

Redirects request to the source which sets static properties to PopAds and popns objects.

**Example**
```
||popads.net/pop.js$script,redirect=prevent-popads-net
```
[Redirect source](../src/redirects/prevent-popads-net.js)
* * *

### <a id="scorecardresearch-beacon"></a> ⚡️ scorecardresearch-beacon

Mocks Scorecard Research API.

Related UBO redirect resource:
https://github.com/gorhill/uBlock/blob/a94df7f3b27080ae2dcb3b914ace39c0c294d2f6/src/web_accessible_resources/scorecardresearch_beacon.js

**Example**
```
||example.org/index.js$script,redirect=scorecardresearch-beacon
```
[Redirect source](../src/redirects/scorecardresearch-beacon.js)
* * *

### <a id="set-popads-dummy"></a> ⚡️ set-popads-dummy

Redirects request to the source which sets static properties to PopAds and popns objects.

**Example**
```
||popads.net^$script,redirect=set-popads-dummy,domain=example.org
```
[Redirect source](../src/redirects/set-popads-dummy.js)
* * *
