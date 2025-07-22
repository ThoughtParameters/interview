/**
 * Main JavaScript file for site-wide interactivity.
 *
 * - Handles active navigation link highlighting.
 */

document.addEventListener('DOMContentLoaded', function() {

    /**
     * Active Navigation Link Highlighter
     *
     * This function checks the current page URL and adds an 'active' class
     * to the corresponding link in the main navigation bar. This provides
     * a clear visual indicator to the user about which section of the site
     * they are currently viewing.
     */
    function highlightActiveNavLink() {
        const currentLocation = window.location.pathname;
        const navLinks = document.querySelectorAll('.main-nav .nav-link');

        navLinks.forEach(link => {
            // Remove 'active' class from all links first to reset state
            link.classList.remove('active');

            // Get the href attribute from the link
            const linkPath = link.getAttribute('href');

            // Handle the index page case
            if (currentLocation === '/' || currentLocation === '/index.html') {
                if (linkPath === 'index.html' || linkPath === './') {
                    link.classList.add('active');
                }
            } else if (linkPath !== 'index.html' && currentLocation.includes(linkPath)) {
                // Check if the current location path includes the link's path
                // This handles nested pages like /learning/kubernetes.html
                link.classList.add('active');
            }
        });
    }

    // Run the function to highlight the link on page load
    highlightActiveNavLink();

});
