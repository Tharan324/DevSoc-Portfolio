const map = L.map('map').setView([10, 100], 3); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const locations = [
  {
    name: "Delhi",
    lat: 28.6139,
    lon: 77.2090,
    description: "My older sister works in Delhi as a visual designer for a creative agency with some really cool clients, like NBA India! Probably due to her influence, I love all things design, whether it's product, interior, or fashion. I always make sure to visit the markets and thrift stores in Delhi whenever I can. I've also had some of the best meals of my life in Delhi🤤🤤",
    image1: "assets/delhi.jpg",
    image2: "assets/delhi2.jpg"
  },
  {
    name: "Chennai",
    lat: 13.0827,
    lon: 80.2707,
    description: "I was born and raised in Chennai! I attended a Montessori school from K-10 and an international school for my last two years of high school. During high school, I volunteered with a scuba diving company during COVID to supply oxygen tanks to patients, helping nearly 150 people as most hospitals were at full capacity. After graduating, I worked as an intern at an EdTech startup called Mentor Match, where I gained hands-on experience in building internal tools, SEO, R&D, and some HR tasks. At a startup, you really do get involved in a bit of everything! Now, I'm back home for the break, reconnecting with the city, friends, family, and, most especially, with my baby, Catniss. Isn’t she adorable?",
    image1: "assets/catniss.jpg",
    image2: "assets/chennai.jpg"
  },
  {
    name: "Colombo",
    lat: 6.9271,
    lon: 79.8612,
    description: "I’ve always loved nature, and it’s important for me to travel and spend time outdoors to recharge when things get hectic at uni. Last year, I made my first trip with friends to Sri Lanka, and it was a truly memorable experience.",
    image1: "assets/colombo.jpg",
    image2: "assets/colombo2.jpg"
  },
  {
    name: "Sydney",
    lat: -33.8688,
    lon: 151.2093,
    description: "I live here now and I’ve just started my third year of my Bachelor of Software Engineering (Honours) degree. So far, I’ve learned a lot—OOP in Java, Databases, Computing in Python, C, Data Structures and Algorithms, JavaScript, and TypeScript. I’ve also worked on some exciting projects at uni, like recreating Git (Grip) in Python, Rsync in C, and UNSW Memes, and an e-invoicing system. I’m now looking for opportunities to put my skills to the test, keep learning, and make meaningful contributions. I’m also really passionate about teaching and I’ve been a private tutor for 2 years now, tutoring Year 8 to HSC students. Balancing all this work can be a lot, so I like to head down to my local cat cafe or hit up a few of my favorite live music spots when I have the time.",
    image1: "assets/sydney.jpg",
    image2: "assets/sydney2.jpg" 
  },
  {
    name: "Singapore",
    lat: 1.3521,
    lon: 103.8198,
    description: "Nothing special about Singapore, except that I’ve spent several overnight layovers here every time I’ve traveled between India and Australia.",
    image1: "",
    image2: ""
  },
  {
    name: "Hong Kong",
    lat: 22.3193,
    lon: 114.1694,
    description: "Special mention because I’m currently saving up to visit Hong Kong. My girlfriend and some friends are from there and I’ve heard and seen such great things about the place. Look at these tarts, I need me some of these.",
    image1: "assets/tart.jpg",
    image2: "assets/hk.jpg"
  },
];

// Create marker and bind popup
locations.forEach(location => {
  const marker = L.marker([location.lat, location.lon]).addTo(map);

  marker.bindPopup(
    `<div>
      <button class="open-modal" 
              data-name="${location.name}" 
              data-description="${location.description}"
              data-image1="${location.image1}"
              data-image2="${location.image2}">
        Visit ${location.name}
      </button>
    </div>`
  );
});

// Modal elements
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage1 = document.getElementById('modal-image-1');
const modalImage2 = document.getElementById('modal-image-2');
const modalDescription = document.getElementById('modal-description');

// Show modal on button click inside popup
map.on('popupopen', function (e) {
  const button = e.popup._contentNode.querySelector('.open-modal');
  if (button) {
    button.addEventListener('click', () => {
      modalTitle.textContent = button.dataset.name;
      modalDescription.textContent = button.dataset.description;
      if (button.dataset.image1 && button.dataset.image2) {
        modalImage1.src = button.dataset.image1;
        modalImage2.src = button.dataset.image2;
        modalImage1.style.display = 'block';
        modalImage2.style.display = 'block';
      } else {
        modalImage1.style.display = 'none';
        modalImage2.style.display = 'none';
      }
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
