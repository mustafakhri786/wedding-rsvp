// ======================================
// Wedding RSVP Web App
// Helper Functions
// ======================================

import { ui } from "./config.js";

/*
|--------------------------------------------------------------------------
| DOM Helpers
|--------------------------------------------------------------------------
*/

/**
 * Get element by ID.
 */
export function getElement(id) {

    return document.getElementById(id);

}

/**
 * Get all matching elements.
 */
export function getElements(selector) {

    return document.querySelectorAll(selector);

}

/**
 * Get first matching element.
 */
export function getElementBySelector(selector) {

    return document.querySelector(selector);

}

/*
|--------------------------------------------------------------------------
| Visibility Helpers
|--------------------------------------------------------------------------
*/

/**
 * Show an element.
 */
export function show(element) {

    element.classList.remove(ui.hiddenClass);

}

/**
 * Hide an element.
 */
export function hide(element) {

    element.classList.add(ui.hiddenClass);

}

/**
 * Toggle an element.
 */
export function toggle(element) {

    element.classList.toggle(ui.hiddenClass);

}

/*
|--------------------------------------------------------------------------
| Scroll Helper
|--------------------------------------------------------------------------
*/

/**
 * Smooth scroll to an element.
 */
export function scrollToElement(element) {

    element.scrollIntoView({

        behavior: ui.scrollBehavior

    });

}

/*
|--------------------------------------------------------------------------
| Form Helpers
|--------------------------------------------------------------------------
*/

/**
 * Create a dropdown option.
 */
export function createOption(value) {

    const option = document.createElement("option");

    option.value = value;

    option.textContent = value;

    return option;

}

/**
 * Clear all child elements.
 */
export function clearElement(element) {

    element.innerHTML = "";

}

/*
|--------------------------------------------------------------------------
| Validation Helpers
|--------------------------------------------------------------------------
*/

/**
 * Convert any value to a number safely.
 */
export function toNumber(value) {

    return Number(value) || 0;

}

/*
|--------------------------------------------------------------------------
| Utility Helpers
|--------------------------------------------------------------------------
*/

/**
 * Check if a value is empty.
 */
export function isEmpty(value) {

    return value === null ||

           value === undefined ||

           value === "";

}

/**
 * Delay execution.
 */
export function sleep(milliseconds) {

    return new Promise(resolve =>

        setTimeout(resolve, milliseconds)

    );

}