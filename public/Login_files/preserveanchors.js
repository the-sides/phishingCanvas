/**
 * Prepares the login form for submission by appending any URI
 * fragment (hash) to the form action in order to propagate it
 * through the re-direct (i.e. store it client side).
 * @param form The login form object.
 * @returns true to allow the form to be submitted.
 */
function prepareSubmit(form) {
    // Extract the fragment from the browser's current location.
    var hash = decodeURIComponent(self.document.location.hash);
 
    // The fragment value may not contain a leading # symbol
    if (hash && hash.indexOf("#") === -1) {
        hash = "#" + hash;
    }
   
    // Append the fragment to the current action so that it persists to the redirected URL.
    if (form.action.indexOf("#") === -1) {
         form.action = form.action + hash;
    }
    return true;
}
