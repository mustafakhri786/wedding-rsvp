// ======================================
// Wedding RSVP Web App
// Configuration Module
// ======================================

/*
|--------------------------------------------------------------------------
| Wedding Information
|--------------------------------------------------------------------------
| Edit this section only if any wedding details change.
*/

export const wedding = {

    bride: "Zahra Husain Fakhri ",

    groom: " M Husain Najmi",

    date: "22nd September 2026",

    time: "8:00 PM",

    venue: "Shehabi Hall",

    city: "Surat",

    state: "Gujarat",

    country: "India",

    maps: "https://maps.app.goo.gl/SGS9FiauLQ6EsXPv8"

};


/*
|--------------------------------------------------------------------------
| Application Configuration
|--------------------------------------------------------------------------
| General application settings.
*/

export const appConfig = {

    appName: "Wedding RSVP",

    version: "1.0.0",

    guestIdParameter: "id",

};


/*
|--------------------------------------------------------------------------
| Google Apps Script Configuration
|--------------------------------------------------------------------------
| Will be updated after deploying Apps Script.
*/

export const api = {

    baseURL: "https://script.google.com/macros/s/AKfycbzo3acARYMB8tB4qhQq-Qa5P92EbwInSFV6T0GXBfMDwFGgM2oFuOXqMHOg5CpwZOiN/exec",

    timeout: 10000

};


/*
|--------------------------------------------------------------------------
| RSVP Configuration
|--------------------------------------------------------------------------
*/

export const rsvp = {

    allowGuestMessage: true,

    maxMessageLength: 500,

    minimumGuests: 0

};


/*
|--------------------------------------------------------------------------
| UI Configuration
|--------------------------------------------------------------------------
*/

export const ui = {

    scrollBehavior: "smooth",

    animationDuration: 300,

    hiddenClass: "hidden"

};


/*
|--------------------------------------------------------------------------
| Website Text
|--------------------------------------------------------------------------
| Central place for reusable UI text.
*/

export const text = {

    invitationNotFound: "Invitation not found.",

    mapsUnavailable: "Google Maps link will be added soon.",

    selectAttendance: "Please select whether you will be attending.",

    selectGuestCount: "Please select at least one guest.",

    guestLimitExceeded: "Total guests exceed your invitation."

};

export const API_ACTION = Object.freeze({

    GET_GUEST: "getGuest",

    SUBMIT_RSVP: "submitRSVP"

});