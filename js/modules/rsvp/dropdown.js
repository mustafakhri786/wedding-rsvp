// ======================================
// Wedding RSVP Web App
// RSVP Dropdown Module
// ======================================

import {

    getElement,

    createOption,

    clearElement

} from "../helpers.js";

/*
|--------------------------------------------------------------------------
| Dropdown Helpers
|--------------------------------------------------------------------------
*/

/**
 * Populate a dropdown with values from 0 to maxGuests.
 *
 * @param {HTMLSelectElement} dropdown
 * @param {number} maxGuests
 */
function populateDropdown(dropdown, maxGuests) {

    if (!dropdown) {

        return;

    }

    clearElement(dropdown);

    for (let i = 0; i <= maxGuests; i++) {

        dropdown.appendChild(

            createOption(i)

        );

    }

}

/*
|--------------------------------------------------------------------------
| Dropdown Initialization
|--------------------------------------------------------------------------
*/

/**
 * Initialize RSVP guest count dropdowns.
 *
 * @param {Object} guest
 */
export function initializeDropdowns(guest) {

    const gentsDropdown = getElement("gentsCount");

    const ladiesDropdown = getElement("ladiesCount");

    populateDropdown(

        gentsDropdown,

        guest.maxGuests

    );

    populateDropdown(

        ladiesDropdown,

        guest.maxGuests

    );

}