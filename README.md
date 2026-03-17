# Font Detector Bookmarklet

A lightweight, no-installation-required font inspector for Safari (and other browsers). Originally developed as a Chrome Extension, now adapted to work as a versatile bookmarklet.

## Why a Bookmarklet?

Unlike Chrome extensions that are always running in the background, this **Bookmarklet** is a "clean and lightweight" solution:

* **Privacy:** It only executes when you explicitly click it.
* **Performance:** Zero impact on Safari's speed; no background processes or memory consumption.
* **Simplicity:** No installation or developer mode required.

> [!IMPORTANT]
> **Compatibility Note:** This tool works on **99% of the web**. However, some highly secure sites like **X (Twitter), GitHub, or Banking portals** use a strict *Content Security Policy (CSP)* that prevents the execution of external scripts for security reasons. On those sites, the bookmarklet will simply not load.

## How to Use

### 1. Get the Script URL
You can use my version directly (and keep updated) or host your own (and make your own version):
* **Option A (Quick):** Use my link:  
    `https://cdn.jsdelivr.net/gh/pedroarilla/font-detector@latest/font-detector.js`
* **Option B (Recommended):** **Fork** this repository to your own account to have full control. Your URL will be:  
    `https://cdn.jsdelivr.net/gh/YOUR_USERNAME/font-detector@latest/font-detector.js`

### 2. Create the Bookmarklet in Safari
1.  Show your **Favorites Bar** (`Cmd + Shift + B`).
2.  Create a new Bookmark (or drag any page to the bar) and name it `Font Detector`.
3.  Right-click it, select **Edit Address**, and paste the following code (make sure to replace the URL if you made a fork):

```
javascript
javascript:(function(){if(!document.getElementById('fd-script')){var%20js=document.createElement('script');js.src='[https://cdn.jsdelivr.net/gh/pedroarilla/font-detector@latest/font-detector.js';js.id='fd-script';document.body.appendChild(js](https://cdn.jsdelivr.net/gh/pedroarilla/font-detector@latest/font-detector.js';js.id='fd-script';document.body.appendChild(js));}})();
```

### 3. Inspect Fonts

Click the bookmark in your favorites bar to activate it.

Hover over any text to see font family, weight, and size.

Click on any text to instantly search for that font on Google.

Press Esc to deactivate and remove the tool.

## License
Copyright 2026, Pedro Arilla.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

See the License file included in this repository for further details.