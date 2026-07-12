// ======================================
// Wedding RSVP Web App
// RSVP Smart Engine
// ======================================

import {

    getElement,

    show,

    hide

} from "../helpers.js";


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

        hasGentlemen &&

        !hasLadies

    ) {

        return INVITATION_MODE.GENTLEMEN;

    }

    if (

        !hasGentlemen &&

        hasLadies

    ) {

        return INVITATION_MODE.LADIES;

    }

    return INVITATION_MODE.OPEN;

}


/*
|--------------------------------------------------------------------------
| UI
|--------------------------------------------------------------------------
*/

/**
 * Show fields according
 * to invitation type.
 *
 * @param {Object} guest
 */
export function initializeDropdownEngine(guest) {

    console.log("Engine running")

    const mode =

        getInvitationMode(guest);
        console.log("Mode:", mode)
        console.log(guest)

    const gentsField =

        getElement("gentsField");

    const ladiesField =

        getElement("ladiesField");

    const membersField =

        getElement("membersField");

    const gentlemenInfo =

        getElement("gentlemenInfo");

    const ladiesInfo =

        getElement("ladiesInfo");

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