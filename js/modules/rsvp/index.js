// ======================================
// Wedding RSVP Web App
// RSVP Module
// ======================================

import {

    initializeDropdowns

} from "./dropdown.js";

import {

    initializeDropdownEngine

} from "./engine.js";

import {

    initializeValidation

} from "./validation.js";

import {

    initializeSubmission

} from "./submit.js";

/*
|--------------------------------------------------------------------------
| RSVP Initialization
|--------------------------------------------------------------------------
*/

/**
 * Initialize the complete RSVP feature.
 *
 * @param {Object} guest
 */
export function initializeRSVP(guest) {

    initializeDropdowns(

        guest

    );

    initializeDropdownEngine(

        guest

    );

    initializeValidation(

        guest

    );

    initializeSubmission(

        guest

    );

}