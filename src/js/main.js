document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // FAQ Accordion Logic (if present on page)
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');
    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const content = trigger.nextElementSibling;
            const icon = trigger.querySelector('[data-lucide="chevron-down"]');

            // Toggle current
            content.classList.toggle('hidden');
            if (icon) {
                icon.classList.toggle('rotate-180');
            }

            // Optional: Close others
            accordionTriggers.forEach(otherTrigger => {
                if (otherTrigger !== trigger) {
                    const otherContent = otherTrigger.nextElementSibling;
                    const otherIcon = otherTrigger.querySelector('[data-lucide="chevron-down"]');
                    if (!otherContent.classList.contains('hidden')) {
                        otherContent.classList.add('hidden');
                        if (otherIcon) otherIcon.classList.remove('rotate-180');
                    }
                }
            });
        });
    });

    // Re-initialize icons if added dynamically (though lucide.createIcons() runs at end of body)
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
