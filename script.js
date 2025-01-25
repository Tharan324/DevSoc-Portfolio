const map = L.map('map').setView([10, 100], 3); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const locations = [
  {
    name: 'Delhi',
    lat: 28.6139,
    lon: 77.2090,
    description: "My older sister works in Delhi as a visual designer for a creative agency with some really cool clients, like NBA India! Thanks to her influence, I love fashion, and I always make sure to hit up the markets and thrift stores in Delhi whenever I visit.",
  },
  {
    name: 'Chennai',
    lat: 13.0827,
    lon: 80.2707,
    description: "I was born and raised in Chennai! I attended a Montessori school from K-10 and an international school for my last two years of high school. After graduating, I worked at an EdTech startup called Mentor Match as an intern, where I got my first hands-on experience in building internal tools, SEO, R&D, and some HR tasks. At a startup, you really do get involved in a bit of everything!",
  },
  {
    name: 'Sydney',
    lat: -33.8688,
    lon: 151.2093,
    description: "I live here now! I’ve just started my third year of my Bachelor of Software Engineering (Honours) degree. So far, I’ve learned a lot—OOP in Java, Databases, Computing in Python, C, Data Structures and Algorithms, JavaScript, and TypeScript. I’ve also worked on some exciting projects at uni, like recreating Git (Grip) in Python, Rsync in C, and UNSW Memes. I’m now looking for opportunities to put my skills to the test, keep learning, and make meaningful contributions. I’m also really passionate about teaching and I’ve been a private tutor for 2 years now, tutoring Year 8 to HSC students.",
  },
  {
    name: 'Singapore',
    lat: 1.3521,
    lon: 103.8198,
    description: "Nothing special about Singapore, except that I’ve spent several overnight layovers here every time I’ve traveled between India and Australia.",
  },
  {
    name: 'Hong Kong',
    lat: 22.3193,
    lon: 114.1694,
    description: "Special mention because I’m currently saving up to visit Hong Kong. My girlfriend and some friends are from there and I’ve heard such great things about the place.",
  },
];

// Create marker and bind popup
locations.forEach(location => {
  const marker = L.marker([location.lat, location.lon]).addTo(map);

  marker.bindPopup(
    `<div>
      <strong>${location.name}</strong><br>
      <button class="open-modal" 
              data-name="${location.name}" 
              data-description="${location.description}">
        Go here
      </button>
    </div>`
  );
});

// Modal elements
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

// Show modal on button click inside popup
map.on('popupopen', function (e) {
  const button = e.popup._contentNode.querySelector('.open-modal');
  if (button) {
    button.addEventListener('click', () => {
      modalTitle.textContent = button.dataset.name;
      modalDescription.textContent = button.dataset.description;
      modal.style.display = 'flex';
    });
  }
});

// Close modal when clicking the "X" button or outside
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
