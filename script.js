
function filterMusic(category, button) {

    const cards = document.querySelectorAll(".card");
    const buttons = document.querySelectorAll(".filters button");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    cards.forEach(card => {

        if (category === "all" || card.dataset.category === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}
