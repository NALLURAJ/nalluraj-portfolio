// Typing effect
new TypeIt(".typing", {
  strings: [
    "Hi, I'm Nalluraj Babu.",
    "A Data Science Enthusiast.",
    "A Python Developer.",
    "A Curious Coder."
  ],
  speed: 80,
  breakLines: false,
  loop: true
}).go();

// Counter animation
const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = Math.ceil(target / 100);

    if (current < target) {
      counter.innerText = `${current + increment}`;
      setTimeout(updateCounter, 50);
    } else {
      counter.innerText = `${target}+`;
    }
  };

  updateCounter();
});
// Quote Rotator
const quotes = [
  "Data is the new oil.",
  "In God we trust, all others bring data.",
  "Without data, you're just another person with an opinion.",
  "Data beats emotions.",
  "Information is the oil of the 21st century, and analytics is the combustion engine."
];
let i = 0;
setInterval(() => {
  document.getElementById("quote").innerText = quotes[i++ % quotes.length];
}, 5000);

// Doughnut Chart
const ctx = document.getElementById("skillsChart").getContext("2d");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Python", "SQL", "Pandas", "Machine Learning", "Web Dev"],
    datasets: [{
      data: [35, 15, 20, 20, 10],
      backgroundColor: ["#38bdf8", "#6366f1", "#f59e0b", "#10b981", "#ef4444"]
    }]
  },
  options: {
    plugins: {
      legend: { position: "bottom" }
    }
  }
});
