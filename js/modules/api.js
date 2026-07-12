// ======================================
// Wedding RSVP Web App
// API Module
// ======================================

import {

    api,

    API_ACTION

} from "./config.js";


/*
|--------------------------------------------------------------------------
| Guest API
|--------------------------------------------------------------------------
*/

/**
 * Fetch guest information from backend.
 *
 * @param {string} inviteCode
 * @returns {Promise<Object>}
 */

export async function fetchGuest(inviteCode) {

    try {

        const url =

            `${api.baseURL}` +
            `?action=${API_ACTION.GET_GUEST}` +
            `&id=${encodeURIComponent(inviteCode)}`;

        const response = await fetch(url);

        if (!response.ok) {

            throw new Error(

                `HTTP ${response.status}`

            );

        }

        return await response.json();

    }

    catch (error) {

        console.error(

            "Fetch Guest Error:",

            error

        );

        return {

            status: "error",

            message: "Unable to load invitation."

        };

    }

}


/*
|--------------------------------------------------------------------------
| RSVP API
|--------------------------------------------------------------------------
*/

/**
 * Submit RSVP to backend.
 *
 * @param {Object} rsvpData
 * @returns {Promise<Object>}
 */

export async function submitRSVP(rsvpData) {

    try {

        const url =

            `${api.baseURL}` +
            `?action=${API_ACTION.SUBMIT_RSVP}` +
            `&id=${encodeURIComponent(rsvpData.inviteCode)}` +
            `&attendance=${encodeURIComponent(rsvpData.attendance)}` +
            `&gentlemen=${encodeURIComponent(rsvpData.gentlemen)}` +
            `&ladies=${encodeURIComponent(rsvpData.ladies)}`;

        const response = await fetch(url);

        if (!response.ok) {

            throw new Error(

                `HTTP ${response.status}`

            );

        }

        return await response.json();

    }

    catch (error) {

        console.error(

            "Submit RSVP Error:",

            error

        );

        return {

            status: "error",

            message: "Unable to submit RSVP."

        };

    }

}