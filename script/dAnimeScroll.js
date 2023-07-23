// ==UserScript==
// @name        dアニメストアで横スクロール
// @namespace   https://github.com/chimaha
// @match       https://animestore.docomo.ne.jp/*
// @grant       none
// @version     1.0.2
// @author      chimaha
// @description dアニメストアの横スクロールを、Firefoxで使用できるようにします
// @license     MIT license
// @compatible  firefox
// @require     https://unpkg.com/scrollbooster@2/dist/scrollbooster.min.js
// @downloadURL https://raw.githubusercontent.com/chimaha/dAnimeScroll/main/script/dAnimeScroll.js
// @updateURL   https://raw.githubusercontent.com/chimaha/dAnimeScroll/main/script/dAnimeScroll.js
// @supportURL  https://github.com/chimaha/dAnimePlus/issues
// ==/UserScript==

/*! dアニメストアで横スクロール | MIT license | https://github.com/chimaha/dAnimeScroll/blob/main/LICENSE */
/*! ScrollBooster | MIT license | https://github.com/ilyashubin/scrollbooster/blob/master/LICENSE */

const observer = new MutationObserver(records => {
    const slider = document.querySelectorAll(".p-slider");
    for (let i = 0; i < slider.length; i++) {
        new ScrollBooster({
            viewport: slider[i],
            scrollMode: 'native',
            direction: 'horizontal'
        });
    }
});
const config = { childList: true, subtree: true };
observer.observe(document.body, config);
setTimeout(function () { observer.disconnect() }, 1000);