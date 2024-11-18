document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs a");
    const sections = document.querySelectorAll(".content");

    tabs.forEach(tab => {
        tab.addEventListener("click", event => {
            event.preventDefault();

            // Deactivate all tabs and sections
            tabs.forEach(t => t.classList.remove("active"));
            sections.forEach(section => section.classList.remove("active"));

            // Activate the clicked tab and corresponding section
            tab.classList.add("active");
            const target = document.querySelector(tab.getAttribute("href"));
            if (target) target.classList.add("active");
        });
    });

    // Activate the first tab by default
    tabs[0].classList.add("active");
    sections[0].classList.add("active");
});

