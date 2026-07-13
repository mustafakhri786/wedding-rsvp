// ======================================
// Wedding RSVP Web App
// RSVP Smart Engine
// ======================================

import {

    getElement,

    show,

    hide

} from "../helpers.js";

import {

    populateDropdown,

    getDropdownValue

} from "./dropdown.js";

/*
|--------------------------------------------------------------------------
| Invitation Modes
|--------------------------------------------------------------------------
*/

export const INVITATION_MODE = Object.freeze({

    MIXED: "mixed",

    OPEN: "open",

    GENTLEMEN: "gentlemen",

    LADIES: "ladies"

});

/*
|--------------------------------------------------------------------------
| Detect Invitation Mode
|--------------------------------------------------------------------------
*/

/**
 * Determine invitation mode.
 *
 * @param {Object} guest
 * @returns {string}
 */
export function getInvitationMode(guest) {

    const hasGentlemen =

        guest.maxGentlemen > 0;

    const hasLadies =

        guest.maxLadies > 0;

    if (

        hasGentlemen &&

        hasLadies

    ) {

        return INVITATION_MODE.MIXED;

    }

    if (

        hasGentlemen

    ) {

        return INVITATION_MODE.GENTLEMEN;

    }

    if (

        hasLadies

    ) {

        return INVITATION_MODE.LADIES;

    }

    return INVITATION_MODE.OPEN;

}

/*
|--------------------------------------------------------------------------
| Limit Calculator
|--------------------------------------------------------------------------
*/

/**
 * Calculate dynamic limits.
 *
 * @param {Object} guest
 * @returns {Object}
 */
function calculateLimits(guest) {

    const gentlemen =

        getDropdownValue(

            "gentsCount"

        );

    const ladies =

        getDropdownValue(

            "ladiesCount"

        );

    return {

        gentlemen,

        ladies,

        maxGentlemen: Math.min(

            guest.maxGentlemen,

            guest.maxGuests - ladies

        ),

        maxLadies: Math.min(

            guest.maxLadies,

            guest.maxGuests - gentlemen

        )

    };

}

/*
|--------------------------------------------------------------------------
| Synchronization
|--------------------------------------------------------------------------
*/

/**
 * Refresh dropdown limits.
 *
 * @param {Object} guest
 */
function synchronizeDropdowns(guest) {

    const limits =

        calculateLimits(

            guest

        );

    populateDropdown(

        "gentsCount",

        limits.maxGentlemen

    );

    populateDropdown(

        "ladiesCount",

        limits.maxLadies

    );

}

/*
|--------------------------------------------------------------------------
| UI Manager
|--------------------------------------------------------------------------
*/

function updateInterface(mode) {

    const gentsField =

        getElement(

            "gentsField"

        );

    const ladiesField =

        getElement(

            "ladiesField"

        );

    const membersField =

        getElement(

            "membersField"

        );

    const gentlemenInfo =

        getElement(

            "gentlemenInfo"

        );

    const ladiesInfo =

        getElement(

            "ladiesInfo"

        );

    switch (mode) {

        case INVITATION_MODE.MIXED:

            show(gentsField);

            show(ladiesField);

            hide(membersField);

            show(gentlemenInfo);

            show(ladiesInfo);

            break;

        case INVITATION_MODE.GENTLEMEN:

            show(gentsField);

            hide(ladiesField);

            hide(membersField);

            show(gentlemenInfo);

            hide(ladiesInfo);

            break;

        case INVITATION_MODE.LADIES:

            hide(gentsField);

            show(ladiesField);

            hide(membersField);

            hide(gentlemenInfo);

            show(ladiesInfo);

            break;

        case INVITATION_MODE.OPEN:

            hide(gentsField);

            hide(ladiesField);

            show(membersField);

            hide(gentlemenInfo);

            hide(ladiesInfo);

            break;

    }

}

/*
|--------------------------------------------------------------------------
| Engine Initialization
|--------------------------------------------------------------------------
*/

/**
 * Initialize the Smart RSVP Engine.
 *
 * @param {Object} guest
 */
export function initializeDropdownEngine(guest) {

    const mode =

        getInvitationMode(

            guest

        );

    updateInterface(

        mode

    );

    /*
    ------------------------------------------------
    Open Invitation
    ------------------------------------------------
    */

    if (

        mode === INVITATION_MODE.OPEN

    ) {

        return;

    }

    /*
    ------------------------------------------------
    Gentlemen Only
    ------------------------------------------------
    */

    if (

        mode === INVITATION_MODE.GENTLEMEN

    ) {

        return;

    }

    /*
    ------------------------------------------------
    Ladies Only
    ------------------------------------------------
    */

    if (

        mode === INVITATION_MODE.LADIES

    ) {

        return;

    }

    /*
    ------------------------------------------------
    Mixed Invitation
    ------------------------------------------------
    */

    const gentsDropdown =

        getElement(

            "gentsCount"

        );

    const ladiesDropdown =

        getElement(

            "ladiesCount"

        );

    if (

        !gentsDropdown ||

        !ladiesDropdown

    ) {

        return;

    }

    /*
    ------------------------------------------------
    Initial Synchronization
    ------------------------------------------------
    */

    synchronizeDropdowns(

        guest

    );

    /*
    ------------------------------------------------
    Gentlemen Changed
    ------------------------------------------------
    */

    gentsDropdown.addEventListener(

        "change",

        () => {

            synchronizeDropdowns(

                guest

            );

        }

    );

    /*
    ------------------------------------------------
    Ladies Changed
    ------------------------------------------------
    */

    ladiesDropdown.addEventListener(

        "change",

        () => {

            synchronizeDropdowns(

                guest

            );

        }

    );

}