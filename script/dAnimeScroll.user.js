// ==UserScript==
// @name        dアニメストアで横スクロール
// @namespace   https://github.com/chimaha/dAnimeScroll
// @match       https://animestore.docomo.ne.jp/animestore/*
// @grant       none
// @version     1.1
// @author      chimaha
// @description dアニメストアの横スクロールを、Firefoxで使用できるようにします
// @license     MIT license
// @icon        https://animestore.docomo.ne.jp/favicon.ico
// @compatible  firefox
// @require     https://unpkg.com/scrollbooster@2/dist/scrollbooster.min.js
// @downloadURL https://github.com/chimaha/dAnimeScroll/raw/main/script/dAnimeScroll.user.js
// @updateURL   https://github.com/chimaha/dAnimeScroll/raw/main/script/dAnimeScroll.user.js
// @supportURL  https://github.com/chimaha/dAnimeScroll/issues
// ==/UserScript==

/*! dアニメストアで横スクロール | MIT license | https://github.com/chimaha/dAnimeScroll/blob/main/LICENSE */
/*! ScrollBooster | MIT license | https://github.com/ilyashubin/scrollbooster/blob/master/LICENSE */

const observer = new MutationObserver(records => {
    const slider = document.querySelectorAll(".p-slider");
    for (let i = 0; i < slider.length; i++) {
        if (slider[i].classList.contains("ScrollBooster")) { continue }
        slider[i].classList.add("ScrollBooster");
        new ScrollBooster({
            viewport: slider[i],
            scrollMode: 'native',
            direction: 'horizontal'
        });
    }
});
const config = { childList: true, subtree: true };
observer.observe(document.body, config);