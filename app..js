// Create navigation links
const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// Create navigation bar
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
links.forEach(link => {
  const a = document.createElement('a');
  a.textContent = link.label;
  a.href = link.href;
  navbar.appendChild(a);
});

// Toggle navigation bar
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
