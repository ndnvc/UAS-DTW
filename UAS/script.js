// Logic Pengiriman Pesan yang Profesional
function handleForm(e) {
    e.preventDefault();

    const btn = e.target.querySelector('button[type="submit"]');
    const nameInput = document.getElementById('name').value;
    const originalBtnHtml = btn.innerHTML;

    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Mengirim...';
    btn.disabled = true;

    setTimeout(() => {
        Swal.fire({
            title: 'Pesan Terkirim!',
            text: `Halo ${nameInput}, terima kasih telah menghubungi saya. Pesan Anda telah masuk ke kotak masuk dan akan segera saya balas.`,
            icon: 'success',
            confirmButtonColor: '#8338ec',
            confirmButtonText: 'Oke, Siap!',
            background: '#fff',
            iconColor: '#8338ec'
        });

        e.target.reset();
        btn.innerHTML = originalBtnHtml;
        btn.disabled = false;
    }, 2000);
}

// Auto collapse navbar on mobile
document.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => {
        const nav = document.getElementById('navbarNav');
        if (nav.classList.contains('show')) {
            bootstrap.Collapse.getInstance(nav).hide();
        }
    });
});
