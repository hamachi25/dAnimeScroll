// ==UserScript==
// @name        dアニメストアで横スクロール
// @namespace   https://github.com/chimaha/dAnimeScroll
// @match       https://animestore.docomo.ne.jp/animestore/tp_pc
// @match       https://animestore.docomo.ne.jp/animestore/CF/search_index
// @match       https://animestore.docomo.ne.jp/animestore/CR/*
// @match       https://animestore.docomo.ne.jp/animestore/ci_pc?workId=*
// @grant       none
// @version     2.1
// @author      chimaha
// @description dアニメストアの横スクロールを、Firefoxで使用できるようにします
// @license     MIT license
// @icon        https://animestore.docomo.ne.jp/favicon.ico
// @compatible  firefox
// @downloadURL https://github.com/chimaha/dAnimeScroll/raw/main/script/dAnimeScroll.user.js
// @updateURL   https://github.com/chimaha/dAnimeScroll/raw/main/script/dAnimeScroll.user.js
// @supportURL  https://github.com/chimaha/dAnimeScroll/issues
// ==/UserScript==

/*! dアニメストアで横スクロール | MIT license | https://github.com/chimaha/dAnimeScroll/blob/main/LICENSE */

"use strict";

const observer = new MutationObserver(() => {
    const sliders = document.querySelectorAll(".p-slider__itemList");

    for (const slider of sliders) {
        if (slider.dataset.addScroll == "true") { continue; }
        slider.dataset.addScroll = "true";

        slider.addEventListener('mousedown', e => {
            if (e.button == 0) {
                e.preventDefault();
            } else if (e.button == 2) {
                e.stopPropagation();
            }
        });
    }
});
const config = { childList: true, subtree: true };
observer.observe(document.body, config);
