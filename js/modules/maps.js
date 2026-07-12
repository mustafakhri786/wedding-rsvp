// ======================================
// Wedding RSVP Web App
// Maps Module
// ======================================

import {

    wedding,

    text

} from "./config.js";

import {

    getElement

} from "./helpers.js";

/*
|--------------------------------------------------------------------------
| Open Google Maps
|--------------------------------------------------------------------------
*/

/**
 * Open the wedding venue in Google Maps.
 */
function openGoogleMaps() {

    if (!wedding.maps) {

        alert(text.mapsUnavailable);

        return;

    }

    window.open(

        wedding.maps,

        "_blank",

        "noopener,noreferrer"

    );

}

/*
|--------------------------------------------------------------------------
| Maps Initialization
|--------------------------------------------------------------------------
*/

/**
 * Initialize the Google Maps button.
 */
export function initializeMaps() {

    const mapButton = getElement("mapButton");

    if (!mapButton) {

        return;

    }

    mapButton.addEventListener(

        "click",

        openGoogleMaps

    );

}