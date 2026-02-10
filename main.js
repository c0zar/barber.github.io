document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Gestion de la fenêtre Modale
    const modal = document.getElementById('bookingModal');
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');
    const resForm = document.getElementById('resForm');

    // Ouvrir la fenêtre au clic sur le bouton
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            modal.classList.add('active');
        });
    }

    // Fermer la fenêtre au clic sur "Fermer"
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // Fermer la fenêtre si on clique à l'extérieur (dans le noir)
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // 2. Gestion du formulaire (Action après avoir cliqué sur Confirmer)
    if (resForm) {
        resForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche de recharger la page
            alert("Merci ! Votre demande de rendez-vous a été envoyée. L'équipe Urban Barber vous recontactera.");
            modal.classList.remove('active');
            resForm.reset();
        });
    }

    // 3. Animation au défilement (Fade In)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});