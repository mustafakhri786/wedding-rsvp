// ======================================
// Wedding RSVP Web App
// RSVP Dropdown Module
// ======================================

import {

    getElement,

    clearElement,

    createOption

} from "../helpers.js";

/*
|--------------------------------------------------------------------------
| Dropdown Builder
|--------------------------------------------------------------------------
*/

/**
 * Populate a dropdown from 0 to max.
 *
 * @param {string} id
 * @param {number} max
 */
export function populateDropdown(id, max) {

    const dropdown = getElement(id);

    if (!dropdown) {

        console.error(

            `Dropdown '${id}' not found.`

        );

        return;

    }

    clearElement(dropdown);

    for (

        let i = 0;

        i <= max;

        i++

    ) {

        dropdown.appendChild(

            createOption(i)

        );

    }

}

/*
|--------------------------------------------------------------------------
| RSVP Initialization
|--------------------------------------------------------------------------
*/

/**
 * Populate every RSVP dropdown.
 *
 * @param {Object} guest
 */
export function initializeDropdowns(guest) {

    populateDropdown(

        "gentsCount",

        guest.maxGentlemen

    );

    populateDropdown(

        "ladiesCount",

        guest.maxLadies

    );

    populateDropdown(

        "membersCount",

        guest.maxGuests

    );

}