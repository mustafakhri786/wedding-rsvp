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
 * Populate a dropdown from 0 to max
 * while preserving the selected value
 * whenever possible.
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

    // Remember previous value

    const previousValue = Number(

        dropdown.value || 0

    );

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

    // Restore previous value if possible

    dropdown.value = Math.min(

        previousValue,

        max

    );

}

/*
|--------------------------------------------------------------------------
| Get Dropdown Value
|--------------------------------------------------------------------------
*/

/**
 * Get the selected value of a dropdown.
 *
 * @param {string} id
 * @returns {number}
 */
export function getDropdownValue(id) {

    return Number(

        getElement(id)?.value || 0

    );

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