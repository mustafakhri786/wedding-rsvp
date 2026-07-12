// ======================================
// Wedding RSVP Web App
// Guest Module
// ======================================

import { appConfig, text } from "./config.js";

import { fetchGuest } from "./api.js";

/*
|--------------------------------------------------------------------------
| Read Guest ID
|--------------------------------------------------------------------------
*/

export function getGuestId() {

    const params = new URLSearchParams(window.location.search);

    return (

        params.get(appConfig.guestIdParameter)

        ||

        appConfig.defaultGuestId

    );

}


/*
|--------------------------------------------------------------------------
| Get Guest
|--------------------------------------------------------------------------
*/

/**
 * Fetch guest information from backend.
 *
 * @returns {Promise<Object>}
 */
export async function getGuest() {

    const guestId = getGuestId();

    const response = await fetchGuest(guestId);

    if (

        response.status !== "success"

    ) {

        throw new Error(

            response.message ||

            text.invitationNotFound

        );

    }

    return {

        id: response.guest.inviteCode,

        family: response.guest.family,

        maxGuests: response.guest.maxGuests,

        maxGentlemen: response.guest.maxGentlemen,

        maxLadies: response.guest.maxLadies,

        locked: response.guest.locked

    };

}