// ======================================
// Wedding RSVP Web App
// RSVP Validation Module
// ======================================

import {

    getElement,

    getElements,

    show,

    hide,

    toNumber

} from "../helpers.js";

/*
|--------------------------------------------------------------------------
| RSVP Helpers
|--------------------------------------------------------------------------
*/

/**
 * Get the selected attendance option.
 *
 * @returns {HTMLInputElement|null}
 */
export function getSelectedAttendance() {

    return document.querySelector(

        'input[name="attendance"]:checked'

    );

}

/**
 * Get the selected guest counts.
 *
 * @returns {{gents:number, ladies:number, total:number}}
 */
export function getGuestCounts() {

    const gents = toNumber(

        getElement("gentsCount")?.value

    );

    const ladies = toNumber(

        getElement("ladiesCount")?.value

    );

    return {

        gents,

        ladies,

        total: gents + ladies

    };

}

/*
|--------------------------------------------------------------------------
| Validation
|--------------------------------------------------------------------------
*/

/**
 * Validate the selected guest count.
 *
 * @param {Object} guest
 */
function validateGuestCount(guest) {

    const warning = getElement("warning");

    const submitButton = getElement("submitBtn");

    const { total } = getGuestCounts();

    if (total > guest.maxGuests) {

        show(warning);

        submitButton.disabled = true;

        return;

    }

    hide(warning);

    submitButton.disabled = false;

}

/*
|--------------------------------------------------------------------------
| Attendance
|--------------------------------------------------------------------------
*/

/**
 * Handle attendance selection.
 *
 * @param {Event} event
 */
function handleAttendanceChange(event) {

    const acceptSection = getElement("acceptSection");

    if (!acceptSection) {

        return;

    }

    if (event.target.value === "yes") {

        show(acceptSection);

    }

    else {

        hide(acceptSection);

    }

}

/*
|--------------------------------------------------------------------------
| Initialization
|--------------------------------------------------------------------------
*/

/**
 * Initialize RSVP validation.
 *
 * @param {Object} guest
 */
export function initializeValidation(guest) {

    const attendanceOptions =

        getElements('input[name="attendance"]');

    attendanceOptions.forEach(option => {

        option.addEventListener(

            "change",

            handleAttendanceChange

        );

    });

    getElement("gentsCount")

        ?.addEventListener(

            "change",

            () => validateGuestCount(guest)

        );

    getElement("ladiesCount")

        ?.addEventListener(

            "change",

            () => validateGuestCount(guest)

        );

}