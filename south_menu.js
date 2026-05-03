function showSection(id, btn) {
    document.querySelectorAll('.section').forEach(function(s) {
        s.classList.remove('active');
    });

    document.querySelectorAll('.tab').forEach(function(t) {
        t.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
}

