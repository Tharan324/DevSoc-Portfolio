// Initialize the map
const map = L.map('map').setView([20, 100], 3); // Coordinates for initial map view (world centered)

// Add tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Add markers for different locations (replace with actual locations for each section)
const locations = [
        { name: 'Asia: About Me', lat: 28.6139, lon: 77.2090 },  // New Delhi, India
        { name: 'Asia: Skills', lat: 19.0760, lon: 72.8777 },    // Mumbai, India
        { name: 'Australia: Projects', lat: -33.8688, lon: 151.2093 }, // Sydney, Australia
        { name: 'Australia: Contact', lat: -37.8136, lon: 144.9631 }, // Melbourne, Australia
];

locations.forEach(location => {
  L.marker([location.lat, location.lon]).addTo(map)
    .bindPopup(location.name)
    .openPopup();
});
