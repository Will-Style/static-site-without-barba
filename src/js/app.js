'use strict'

import '@babel/polyfill'

import lazysizes from "lazysizes"
import unveil from "lazysizes/plugins/unveilhooks/ls.unveilhooks.min.js"

if ('NodeList' in window && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
require('intersection-observer');

// import ReplaceHead from "./lib/ReplaceHead"
// import GA from "./lib/GA"

// import ViewportUnitsBuggyfill from "./lib/ViewportUnitsBuggyfill"
// import IeFix from "./lib/IeFix"
import Svg from "./lib/Svg"
import Resources from "./lib/Resources"
import Share from "./lib/Share"
import NewWindow from "./lib/NewWindow"
import Datepicker from "./lib/Datepicker"
import Drawer from "./lib/Drawer"
import Form from "./lib/Form"
import Lightbox from "./lib/Lightbox"
import Headroom from "./lib/Headroom"
import ScrollTrigger from "./lib/ScrollTrigger"
import SmoothScroll from "./lib/SmoothScroll"
import Slider from "./lib/Slider"

import Dropdown from "./lib/Dropdown"

import Tab from "./lib/Tab"
import ObjectFitImages from "./lib/ObjectFitImages"
import Accordion from "./lib/Accordion"
import Intro from "./lib/Intro"
import StickySide from "./lib/StickySide"


document.addEventListener('DOMContentLoaded', () => {

    new Resources
    new Svg
    new ObjectFitImages
    new Form

})

window.addEventListener('load', () => {

    new NewWindow
    new Datepicker
    new Slider
    new Drawer
    new Dropdown
    new Lightbox

    new Accordion
    new Tab
    new ScrollTrigger
    new Headroom
    new SmoothScroll
    new StickySide
    new Share
    new Intro
})


