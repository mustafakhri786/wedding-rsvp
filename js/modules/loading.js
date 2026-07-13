// ======================================
// Wedding RSVP Web App
// Loading Module
// ======================================

const overlay = document.getElementById("loadingOverlay");
const title = document.getElementById("loadingTitle");
const message = document.getElementById("loadingMessage");

let timers = [];

function clearTimers() {

    timers.forEach(clearTimeout);

    timers = [];

}

export function showLoading() {

    overlay.classList.add("active");

    title.textContent = "Submitting RSVP";

    message.textContent =
        "Please wait while we save your response.";

    clearTimers();

    timers.push(

        setTimeout(() => {

            title.textContent = "Almost Done...";

            message.textContent =
                "We're saving your response. Thank you for your patience.";

        }, 3000)

    );

    timers.push(

        setTimeout(() => {

            title.textContent = "Just a Moment...";

            message.textContent =
                "This is taking a little longer than usual, but your RSVP is still being processed.";

        }, 7000)

    );

    timers.push(

        setTimeout(() => {

            title.textContent =
                "Please don't close this page.";

            message.textContent =
                "Google is taking a little longer to respond today. Your RSVP is still being saved.";

        }, 10000)

    );

}

export function hideLoading() {

    clearTimers();

    overlay.classList.remove("active");

}