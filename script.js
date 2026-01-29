// Simple scroll animation
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.style.transform = 'translateY(0)';
            card.style.opacity = '1';
        }
    });
});

// Initial state
cards.forEach(card => {
    card.style.transform = 'translateY(40px)';
    card.style.opacity = '0';
    card.style.transition = 'all 0.6s ease';
});
/* AUTH SYSTEM (LOCAL STORAGE DEMO) */

function signup() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (!email || !password) {
        alert('Please fill all fields');
        return;
    }

    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert('Account created! Please login.');
    toggleAuth();
}

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials');
    }
}

function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
}

function protectDashboard() {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
    }
}

function toggleAuth() {
    document.querySelectorAll('.auth-container')
        .forEach(box => box.classList.toggle('hidden'));
}

/* DASHBOARD CHART */
const dashCtx = document.getElementById('dashboardChart');

if (dashCtx) {
    new Chart(dashCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                data: [15000, 16200, 17000, 16800, 19000, 20500],
                borderColor: '#0a66ff',
                fill: true,
                tension: 0.4,
                backgroundColor: 'rgba(10,102,255,0.1)'
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    ticks: {
                        callback: val => '$' + val.toLocaleString()
                    }
                }
            }
        }
    });
}
