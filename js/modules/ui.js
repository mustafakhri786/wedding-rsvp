// ======================================
// Wedding RSVP Web App
// UI Module
// ======================================

import { wedding } from "./config.js";

import { getElement } from "./helpers.js";

/*
|--------------------------------------------------------------------------
| Hero Section
|--------------------------------------------------------------------------
*/

/**
 * Populate the Hero section.
 */
export function populateHero() {

    getElement("brideName").textContent = wedding.bride;

    getElement("groomName").textContent = wedding.groom;

    getElement("weddingDate").textContent = wedding.date;

    getElement("weddingTime").textContent = wedding.time;

}

/*
|--------------------------------------------------------------------------
| Invitation Section
|--------------------------------------------------------------------------
*/

/**
 * Populate the Invitation section.
 */
export function populateInvitation(guest) {

    getElement("guestName").textContent = guest.family;

    getElement("coupleNames").textContent =
        `${wedding.bride} & ${wedding.groom}`;

}

/*
|--------------------------------------------------------------------------
| Wedding Details Section
|--------------------------------------------------------------------------
*/

/**
 * Populate the Wedding Details section.
 */
export function populateWeddingDetails() {

    getElement("detailDate").textContent = wedding.date;

    getElement("detailTime").textContent = wedding.time;

    getElement("detailVenue").textContent = wedding.venue;

}

/*
|--------------------------------------------------------------------------
| Venue Section
|--------------------------------------------------------------------------
*/

/**
 * Populate the Venue section.
 */
export function populateVenue() {

    getElement("venueName").textContent = wedding.venue;

    getElement("venueCity").textContent =
        `${wedding.city}, ${wedding.state}`;

}

/*
|--------------------------------------------------------------------------
| RSVP Section
|--------------------------------------------------------------------------
*/

/**
 * Populate RSVP information.
 */
export function populateRSVP(guest) {

    const guestLimits =

        getElement("guestLimits");

    const totalGuestsInfo =

        getElement("totalGuestsInfo");

    const gentlemenInfo =

        getElement("gentlemenInfo");

    const ladiesInfo =

        getElement("ladiesInfo");

    /*
    ------------------------------------------------
    Populate Values
    ------------------------------------------------
    */

    getElement("maxGuests").textContent =
        guest.maxGuests;

    getElement("maxGentlemen").textContent =
        guest.maxGentlemen;

    getElement("maxLadies").textContent =
        guest.maxLadies;

    /*
    ------------------------------------------------
    Hide Everything
    ------------------------------------------------
    */

    guestLimits.style.display = "";

    totalGuestsInfo.style.display = "none";

    gentlemenInfo.style.display = "none";

    ladiesInfo.style.display = "none";

    /*
    ------------------------------------------------
    Open Invitation
    ------------------------------------------------
    */

    if (

        guest.maxGentlemen === 0 &&

        guest.maxLadies === 0

    ) {

        guestLimits.style.display = "none";

        return;

    }

    /*
    ------------------------------------------------
    Gentlemen Only
    ------------------------------------------------
    */

    if (

        guest.maxGentlemen > 0 &&

        guest.maxLadies === 0

    ) {

        gentlemenInfo.style.display = "";

        return;

    }

    /*
    ------------------------------------------------
    Ladies Only
    ------------------------------------------------
    */

    if (

        guest.maxGentlemen === 0 &&

        guest.maxLadies > 0

    ) {

        ladiesInfo.style.display = "";

        return;

    }

    /*
    ------------------------------------------------
    Mixed Invitation
    ------------------------------------------------
    */

    if (

        guest.maxGuests === guest.maxGentlemen &&

        guest.maxGuests === guest.maxLadies

    ) {

        totalGuestsInfo.style.display = "";

    }

    else {

        gentlemenInfo.style.display = "";

        ladiesInfo.style.display = "";

    }

}

/*
|--------------------------------------------------------------------------
| Initialize Complete UI
|--------------------------------------------------------------------------
*/

/**
 * Initialize the complete website UI.
 */
export function initializeUI(guest) {

    populateHero();

    populateInvitation(guest);

    populateWeddingDetails();

    populateVenue();

    populateRSVP(guest);

}