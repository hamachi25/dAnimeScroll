// ==UserScript==
// @name        dアニメストアで横スクロール
// @namespace   https://github.com/chimaha/dAnimeScroll
// @match       https://animestore.docomo.ne.jp/animestore/tp_pc
// @match       https://animestore.docomo.ne.jp/animestore/CF/search_index
// @match       https://animestore.docomo.ne.jp/animestore/CR/*
// @match       https://animestore.docomo.ne.jp/animestore/ci_pc?workId=*
// @grant       none
// @version     2.0
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

let sliderItem;
const observer = new MutationObserver(() => {
    const slider = document.querySelectorAll(".p-slider__itemList");

    for (let i = 0; i < slider.length; i++) {
        if (slider[i].dataset.addScroll == "true") { continue; }
        slider[i].dataset.addScroll = "true";

        slider[i].addEventListener('mousedown', e => {
            if (e.button == 0) {
                e.preventDefault();
                sliderItem = slider[i];
                sliderItem.dataset.down = "true";
                sliderItem.dataset.x = e.clientX;
                sliderItem.dataset.scrollleft = sliderItem.scrollLeft;
            } else if (e.button == 2) {
                e.stopPropagation();
            }
        });
        slider[i].addEventListener('mousemove', e => {
            if (e.button == 0 && slider[i].dataset.down == "true") {
                slider[i].scrollLeft = Number(slider[i].dataset.scrollleft) + Number(slider[i].dataset.x) - e.clientX;
            }
        });
    }
    document.addEventListener('mouseup', e => {
        if (e.button == 0) {
            sliderItem.dataset.down = "false";
        }
    });
});
const config = { childList: true, subtree: true };
observer.observe(document.body, config);
