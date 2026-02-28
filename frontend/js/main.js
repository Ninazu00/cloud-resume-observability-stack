//User coutner using Azure Functions and Cosmos DB
const functionApi = '';

const getVisitorCount = () => {
  let count = -1;
  fetch(functionApi).then(response => { 
    return response.json() }).then(response =>{
      console.log("Website called function API");
      count = response.count;
      document.getElementById("visitor-count").innerText = count;
  }).catch(function(error) {
    console.log("Error calling function API: " + error);
  });
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--gold)' : '';
  });
});
