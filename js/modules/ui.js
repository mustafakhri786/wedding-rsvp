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

    getElement("maxGuests").textContent = guest.maxGuests;

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