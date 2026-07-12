// ======================================
// Wedding RSVP Web App
// Application Entry Point
// ======================================

import {

    getGuest

} from "./modules/guest.js";

import {

    initializeUI

} from "./modules/ui.js";

import {

    initializeNavigation

} from "./modules/navigation.js";

import {

    initializeMaps

} from "./modules/maps.js";

import {

    initializeRSVP

} from "./modules/rsvp/index.js";

/*
|--------------------------------------------------------------------------
| Application Initialization
|--------------------------------------------------------------------------
*/

/**
 * Initialize the Wedding RSVP application.
 */
async function initializeApplication() {

    try {

        const guest = await getGuest();

        initializeUI(

            guest

        );

        initializeNavigation();

        initializeMaps();

        initializeRSVP(

            guest

        );

    }

    catch (error) {

        console.error(

            "Application Error:",

            error

        );

        alert(

            error.message

        );

    }

}

/*
|--------------------------------------------------------------------------
| Start Application
|--------------------------------------------------------------------------
*/

document.addEventListener(

    "DOMContentLoaded",

    initializeApplication

);