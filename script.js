const map = L.map('map').setView([10, 100], 3); // Initial map view

// Add tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Add markers with dynamic modal content
const locations = [
  {
    name: 'Delhi',
    lat: 28.6139,
    lon: 77.2090,
    description: 'This project focuses on urban planning in Delhi.',
  },
  {
    name: 'Chennai',
    lat: 13.0827,
    lon: 80.2707,
    description: 'A sustainable development project in Chennai.',
  },
  {
    name: 'Sydney',
    lat: -33.8688,
    lon: 151.2093,
    description: 'Urban planning and infrastructure projects in Sydney, Australia.',
  },
  {
    name: 'Singapore',
    lat: 1.3521,
    lon: 103.8198,
    description: 'Urban planning and infrastructure projects in Sydney, Australia.',
  },
  {
    name: 'Hong Kong',
    lat: 22.3193,
    lon: 114.1694,
    description: 'Urban planning and infrastructure projects in Sydney, Australia.',
  },
];

// Create markers and bind popups with a "View Details" button
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

// Close modal when clicking the "X" button
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
