// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Donation Amount Selection
let selectedAmount = 100;

document.querySelectorAll('.donation-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const amount = parseInt(e.target.dataset.amount);
        document.getElementById('customAmount').value = '';
        updateDonationUI(btn, amount);
    });
});

document.getElementById('customAmount').addEventListener('input', (e) => {
    if (e.target.value) {
        document.querySelectorAll('.donation-btn').forEach(btn => {
            btn.classList.remove('bg-amber-600', 'text-white', 'border-amber-600', 'shadow');
            btn.classList.add('bg-gray-50', 'text-gray-700', 'border-gray-200');
        });
        updateImpactText(parseInt(e.target.value) || 100);
    }
});

function updateDonationUI(btn, amount) {
    document.querySelectorAll('.donation-btn').forEach(b => {
        b.classList.remove('bg-amber-600', 'text-white', 'border-amber-600', 'shadow');
        b.classList.add('bg-gray-50', 'text-gray-700', 'border-gray-200');
    });
    btn.classList.add('bg-amber-600', 'text-white', 'border-amber-600', 'shadow');
    btn.classList.remove('bg-gray-50', 'text-gray-700', 'border-gray-200');
    selectedAmount = amount;
    updateImpactText(amount);
}

function updateImpactText(amount) {
    const impactText = document.getElementById('impactText');
    if (amount >= 2500) {
        impactText.textContent = 'A founding-level gift! You will be recognized as a Community Founder on our center wall.';
    } else if (amount >= 1000) {
        impactText.textContent = 'Covers legal and permitting costs for a portion of the project.';
    } else if (amount >= 500) {
        impactText.textContent = 'Funds one month of community outreach and planning meetings.';
    } else if (amount >= 250) {
        impactText.textContent = 'Covers survey materials and community needs assessment tools.';
    } else if (amount >= 100) {
        impactText.textContent = 'Contributes toward site evaluation and feasibility studies.';
    } else {
        impactText.textContent = 'Every dollar helps bring our community center closer to reality.';
    }
}

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real implementation, this would send data to a server
    alert('Thank you for reaching out! We will respond to your message within 24 hours.');
    document.getElementById('contactForm').reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Adjust for fixed header
                window.scrollBy(0, -80);
            }
        }
    });
});

// Initialize impact text on page load
updateImpactText(selectedAmount);
