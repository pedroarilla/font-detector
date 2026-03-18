# Font Detector Bookmarklet

A lightweight, no-installation-required font inspector for Safari (and other browsers).

Originally developed as a Chrome Extension, now adapted to work as a cross-platform bookmarklet.

> [!IMPORTANT]
> * **Privacy:** It only executes when you explicitly click it.
> * **Compatibility note:** This tool works on 99% of the web.  If a site uses a strict *Content Security Policy (CSP)* (Twitter, GitHub, banking...) that prevents the execution of external scripts for security reasons. On those sites, the bookmarklet will simply not load.

## How to Use

### 1. Get the script URL
You can use my version directly or host your own:
* **Option A (Quick):** Use my link to always have the latest improvements and fixes:  
    `https://cdn.jsdelivr.net/gh/pedroarilla/font-detector@latest/font-detector.js`
* **Option B (Personalised):** Fork this repository to your own account if you want to customise the tooltip colours, font-size, or behaviour.. Your URL will be:  
    `https://cdn.jsdelivr.net/gh/YOUR_USERNAME/font-detector@latest/font-detector.js`

### 2. Create the Bookmarklet in your browser
1.  Create a new bookmark.
2.  Name it `Font Detector`.
3.  Paste this URL in the address field:

```
javascript:(function(){if(!document.getElementById('fd-script')){var%20js=document.createElement('script');js.src='[https://cdn.jsdelivr.net/gh/pedroarilla/font-detector@latest/font-detector.js';js.id='fd-script';document.body.appendChild(js](https://cdn.jsdelivr.net/gh/pedroarilla/font-detector@latest/font-detector.js';js.id='fd-script';document.body.appendChild(js));}})();
```

### 3. Inspect Fonts

Click the bookmark in your favourites bar to activate it.

Hover over any text to see font family, weight, and size.

Click on any text to instantly search for that font on Google.

Press `Esc` to deactivate and remove the tool.

## Licence
Copyright 2026, Pedro Arilla.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

See the License file included in this repository for further details.