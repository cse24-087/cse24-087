document.addEventListener('DOMContentLoaded', function() {
  // Highlight current page in navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (currentPage === linkPage) {
      link.classList.add('active');
    }
  });

  // News ticker animation
  const newsItems = document.querySelectorAll('.news-list li');
  let index = 0;
  
  function rotateNews() {
    newsItems.forEach(item => item.style.display = 'none');
    newsItems[index].style.display = 'block';
    index = (index + 1) % newsItems.length;
  }
  
  // Only animate if there are news items
  if (newsItems.length > 0) {
    rotateNews();
    setInterval(rotateNews, 3000);
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Last updated footer
  const lastUpdated = new Date(document.lastModified);
  const footer = document.querySelector('footer');
  const updateText = document.createElement('p');
  updateText.textContent = `Last updated: ${lastUpdated.toLocaleString()}`;
  footer.appendChild(updateText);
});




  const searchInput = document.getElementById("searchInput");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const playerCards = document.querySelectorAll(".player-card");
  const modal = document.getElementById("playerModal");
  const modalName = document.getElementById("modalName");
  const modalImg = document.getElementById("modalImg");
  const modalDetails = document.getElementById("modalDetails");
  const closeModalBtn = document.getElementById("closeModal");

  // Filter functionality
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const pos = btn.getAttribute("data-position");
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      playerCards.forEach(card => {
        const role = card.querySelector("p").textContent.toLowerCase();
        if (pos === "all" || role.includes(pos)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Search functionality
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    playerCards.forEach(card => {
      const name = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = name.includes(query) ? "block" : "none";
    });
  });

  // Modal functionality
  playerCards.forEach(card => {
    card.addEventListener("click", () => {
      const name = card.querySelector("h3").textContent;
      const imgSrc = card.querySelector("img").src;
      const details = Array.from(card.querySelectorAll("p")).map(p => p.textContent).join("<br>");
      modalName.textContent = name;
      modalImg.src = imgSrc;
      modalDetails.innerHTML = details;
      modal.style.display = "block";
    });
  });

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });

document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    const newsFull = button.previousElementSibling;
    if (newsFull.style.display === "none" || !newsFull.style.display) {
      newsFull.style.display = "block";
      button.textContent = "Read less";
    } else {
      newsFull.style.display = "none";
      button.textContent = "Read more";
    }
  });
});


const playerModal = document.getElementById("playerModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

playerCards.forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.querySelector("h3").textContent;
    modalImage.src = card.querySelector("img").src;
    modalText.innerHTML = Array.from(card.querySelectorAll("p")).map(p => p.innerHTML).join("<br>");
    modal.style.display = "block";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});




document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedbackMsg = document.getElementById("feedbackMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    feedbackMsg.className = "loading";
    feedbackMsg.textContent = "Sending...";

    setTimeout(() => {
      if (!name || !email || !message) {
        showFeedback("Please fill in all fields.", "error");
      } else if (!validateEmail(email)) {
        showFeedback("Please enter a valid email address.", "error");
      } else {
        showFeedback(`Thank you for contacting us, ${name}! We'll get back to you soon.`, "success");
        form.reset();
      }
    }, 1000); // Simulate network delay
  });

  function showFeedback(message, type) {
    feedbackMsg.textContent = message;
    feedbackMsg.className = type;
  }

  function validateEmail(email) {
    // Simple email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});



