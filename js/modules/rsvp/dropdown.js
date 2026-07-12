// ======================================
// Wedding RSVP Web App
// RSVP Dropdown Module
// ======================================

import {

    getElement,

    createOption,

    clearElement

} from "../helpers.js";

import {

    getInvitationMode,

    INVITATION_MODE

} from "./engine.js";

/*
|--------------------------------------------------------------------------
| Dropdown Helpers
|--------------------------------------------------------------------------
*/

/**
 * Populate a dropdown.
 *
 * @param {HTMLSelectElement} dropdown
 * @param {number} max
 */
function populateDropdown(dropdown, max) {

    if (!dropdown) {

        return;

    }

    clearElement(dropdown);

    for (let i = 0; i <= max; i++) {

        dropdown.appendChild(

            createOption(i)

        );

    }

}

/*
|--------------------------------------------------------------------------
| Initialization
|--------------------------------------------------------------------------
*/

/**
 * Initialize RSVP dropdowns.
 *
 * @param {Object} guest
 */
export function initializeDropdowns(guest) {

    const mode = getInvitationMode(guest);

    switch (mode) {

        case INVITATION_MODE.MIXED:

            populateDropdown(

                getElement("gentsCount"),

                guest.maxGentlemen

            );

            populateDropdown(

                getElement("ladiesCount"),

                guest.maxLadies

            );

            break;

        case INVITATION_MODE.GENTLEMEN:

            populateDropdown(

                getElement("gentsCount"),

                guest.maxGentlemen

            );

            break;

        case INVITATION_MODE.LADIES:

            populateDropdown(

                getElement("ladiesCount"),

                guest.maxLadies

            );

            break;

        case INVITATION_MODE.OPEN:

            populateDropdown(

                getElement("membersCount"),

                guest.maxGuests

            );

            break;

    }

}