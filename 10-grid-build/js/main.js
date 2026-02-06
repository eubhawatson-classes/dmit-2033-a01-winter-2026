const btn = document.querySelector('.btn');
const nav = document.querySelector('nav');

if (btn && nav) {
    /**
     * This is a centralised helper function. This is the one place where we keep the menu state in sync.
     */
    const setMenu = (open) => {
        // Tell assistive tech whether the button currently controls an expanded menu or not.
        btn.setAttribute("aria-expanded", String(open));

        // Tell assistive tech whether the nav content should be considered hidden.
        nav.setAttribute("aria-hidden", String(!open));

        nav.classList.toggle("show", open);
    };

    setMenu(btn.getAttribute("aria-expanded") === "true");

    btn.addEventListener("click", () => {
        const isOpen = btn.getAttribute("aria-expanded") === "true";
        setMenu(!isOpen);
    });

/**
 * Keyboard Affordance: if the menu is open and the user hits ESC, close it and put things back to how they were.
 */
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && nav.classList.contains("show")) setMenu(false);
    });
}