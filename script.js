function openAbout() {
    document.getElementById('about-page').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAbout() {
    document.getElementById('about-page').classList.remove('active');
    document.body.style.overflow = 'auto';
}

