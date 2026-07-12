// ======================================
// Wedding RSVP Web App
// Navigation Module
// ======================================

import {

    getElement,

    scrollToElement

} from "./helpers.js";

/*
|--------------------------------------------------------------------------
| Navigation Helpers
|--------------------------------------------------------------------------
*/

/**
 * Navigate to a section by its ID.
 *
 * @param {string} sectionId
 */
function navigateTo(sectionId) {

    const section = getElement(sectionId);

    if (!section) {

        return;

    }

    scrollToElement(section);

}

/*
|--------------------------------------------------------------------------
| Navigation Initialization
|--------------------------------------------------------------------------
*/

/**
 * Initialize navigation buttons.
 */
export function initializeNavigation() {

    getElement("viewInvitation")

        .addEventListener(

            "click",

            () => navigateTo("invitation")

        );

    getElement("goRSVP")

        .addEventListener(

            "click",

            () => navigateTo("rsvp")

        );

}