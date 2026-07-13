// ======================================
// Wedding RSVP Web App
// RSVP Submit Module
// ======================================
import {

    showLoading,

    hideLoading

} from "../loading.js";

import {

    text

} from "../config.js";

import {

    getElement,

    show,

    hide,

    scrollToElement

} from "../helpers.js";

import {

    getSelectedAttendance,

    getGuestCounts

} from "./validation.js";

import {

    submitRSVP

} from "../api.js";

import {

    getGuest

} from "../guest.js";

/*
|--------------------------------------------------------------------------
| RSVP Data
|--------------------------------------------------------------------------
*/

/**
 * Collect RSVP data from the form.
 *
 * @returns {Object}
 */
function collectRSVPData() {

    const attendance =

        getSelectedAttendance();

    const {

        gents,

        ladies,

        total

    } = getGuestCounts();

    return {

        attendance:

            attendance?.value,

        gents,

        ladies,

        total

    };

}

/*
|--------------------------------------------------------------------------
| UI
|--------------------------------------------------------------------------
*/

/**
 * Show Thank You section.
 */
function showThankYou() {

    hide(

        getElement("rsvp")

    );

    show(

        getElement("thankYou")

    );

    scrollToElement(

        getElement("thankYou")

    );

}

/*
|--------------------------------------------------------------------------
| Validation
|--------------------------------------------------------------------------
*/

/**
 * Validate RSVP before submission.
 *
 * @returns {Object|null}
 */
function validateSubmission() {

    const data =

        collectRSVPData();

    if (

        !data.attendance

    ) {

        alert(

            text.selectAttendance

        );

        return null;

    }

    if (

        data.attendance === "yes"

        &&

        data.total === 0

    ) {

        alert(

            text.selectGuestCount

        );

        return null;

    }

    return data;

}

/*
|--------------------------------------------------------------------------
| Submit
|--------------------------------------------------------------------------
*/

/**
 * Handle RSVP submission.
 */
async function handleSubmit() {

    const submitButton =

        getElement(

            "submitBtn"

        );

    const rsvpData =

        validateSubmission();

    if (

        !rsvpData

    ) {

        return;

    }

    submitButton.disabled = true;
    showLoading();

    try {

        const guest =

            await getGuest();
        
        console.time("RSVP");
        const response =

            await submitRSVP({

                inviteCode:

                    guest.id,

                attendance:

                    rsvpData.attendance === "yes"

                        ? "Accepted"

                        : "Declined",

                gentlemen:

                    rsvpData.gents,

                ladies:

                    rsvpData.ladies

            });

            console.timeEnd("RSVP");

        if (

    response.status !== "success"

) {

    hideLoading();

    alert(

        response.message

    );

    submitButton.disabled = false;

    return;

}

        hideLoading();  
        showThankYou();

    }

    catch (error) {

        console.error(

            "RSVP Submission Error:",

            error

        );

        alert(

            "Unable to submit RSVP. Please try again."

        );
        
        hideLoading();
        submitButton.disabled = false;

    }

}

/*
|--------------------------------------------------------------------------
| Initialization
|--------------------------------------------------------------------------
*/

/**
 * Initialize RSVP submission.
 */
export function initializeSubmission() {

    getElement(

        "submitBtn"

    )?.addEventListener(

        "click",

        handleSubmit

    );

}