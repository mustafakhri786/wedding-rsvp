// ======================================
// Wedding RSVP Web App
// RSVP Dropdown Module
// ======================================

import {

    getElement,

    createOption,

    clearElement,

    toNumber

} from "../helpers.js";


/*
|--------------------------------------------------------------------------
| Populate Dropdown
|--------------------------------------------------------------------------
*/

/**
 * Populate a dropdown while preserving
 * the current value whenever possible.
 *
 * @param {HTMLSelectElement} dropdown
 * @param {number} maximum
 */
export function populateDropdown(
    dropdown,
    maximum
) {

    if (!dropdown) {

        return;

    }

    const previousValue = Math.min(

        toNumber(dropdown.value),

        maximum

    );

    clearElement(dropdown);

    for (

        let i = 0;

        i <= maximum;

        i++

    ) {

        dropdown.appendChild(

            createOption(i)

        );

    }

    dropdown.value = previousValue;

}


/*
|--------------------------------------------------------------------------
| Get Dropdown Values
|--------------------------------------------------------------------------
*/

/**
 * Get selected gentlemen count.
 *
 * @returns {number}
 */
export function getGentlemenCount() {

    return toNumber(

        getElement("gentsCount")?.value

    );

}


/**
 * Get selected ladies count.
 *
 * @returns {number}
 */
export function getLadiesCount() {

    return toNumber(

        getElement("ladiesCount")?.value

    );

}


/*
|--------------------------------------------------------------------------
| Set Dropdown Values
|--------------------------------------------------------------------------
*/

/**
 * Set gentlemen count.
 *
 * @param {number} value
 */
export function setGentlemenCount(value) {

    const dropdown =

        getElement("gentsCount");

    if (!dropdown) {

        return;

    }

    dropdown.value = value;

}


/**
 * Set ladies count.
 *
 * @param {number} value
 */
export function setLadiesCount(value) {

    const dropdown =

        getElement("ladiesCount");

    if (!dropdown) {

        return;

    }

    dropdown.value = value;

}


/*
|--------------------------------------------------------------------------
| Update Limits
|--------------------------------------------------------------------------
*/

/**
 * Update dropdown limits while
 * preserving selected values.
 *
 * @param {number} maxGentlemen
 * @param {number} maxLadies
 */
export function updateDropdownLimits(

    maxGentlemen,

    maxLadies

) {

    populateDropdown(

        getElement("gentsCount"),

        maxGentlemen

    );

    populateDropdown(

        getElement("ladiesCount"),

        maxLadies

    );

}


/*
|--------------------------------------------------------------------------
| Initialization
|--------------------------------------------------------------------------
*/

/**
 * Initialize guest count dropdowns.
 *
 * @param {Object} guest
 */
export function initializeDropdowns(guest) {

    updateDropdownLimits(

        guest.maxGentlemen,

        guest.maxLadies

    );

}