const events = [
  {
    name: "Dubai Run 2025",
    description: "Annual city-wide run on Sheikh Zayed Road.",
    place: "Sheikh Zayed Road",
    age: "All ages (kids with 1 adult)",
    price: "Free (Prebooking Only)",
    image: "DR.jpg",
    width:"600 px",
    height:"400 px"
  },
  {
    name: "Coca-Cola Arena Concert",
    description: "Live music with international artists.",
    place: "Coca-Cola Arena",
    age: "Adults only (12+)",
    price: "AED 250",
    image: "concert.jpg"
  },
  {
    name: "Black Bunny Theme Park",
    description: "Indoor fun park with VR, trampolines, go-karts.",
    place: "Al Quoz",
    age: "Kids with 1 adult",
    price: "AED 120",
    image: "black-bunny.png"
  },
  {
    name: "Josh Baker Live",
    description: "Electronic music night at Soho Garden.",
    place: "Soho Garden Meydan",
    age: "Adults only (18+)",
    price: "AED 150–1000",
    image: "josh-baker.jpg"
  },
  {
    name: "Kids Science Festival",
    description: "Interactive science fair for children.",
    place: "Dubai Science Park",
    age: "Kids with 1 adult",
    price: "AED 50",
    image: "science.jpg"
  },
  {
    name: "Secondhand Serenade",
    description: "Live acoustic concert at P7 Arena.",
    place: "Media One Hotel",
    age: "12+",
    price: "AED 180",
    image: "serenade.jpg"
  },
  {
    name: "Future World Expo",
    description: "Tech and innovation showcase.",
    place: "Dubai World Trade Centre",
    age: "All ages",
    price: "Free",
    image: "expo.jpg"
  },
  {
    name: "Global Pediatric Congress",
    description: "Medical conference for pediatric professionals.",
    place: "Al Habtoor City",
    age: "Adults only",
    price: "AED 500",
    image: "congress.jpg"
  }
];

function searchEvent() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const match = events.find(e => e.name.toLowerCase().includes(query));
  const error = document.getElementById("searchError");

  if (!match) {
    error.textContent = "This event not found";
  } else {
    error.textContent = "";
    window.location.href = "events.html";
  }
}

if (document.getElementById("eventList")) {
  const container = document.getElementById("eventList");
  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="assets/images/${event.image}" alt="${event.name}" style="width:500px; height:500px; object-fit:cover; border-radius:8px;" />
      <h3>${event.name}</h3>
      <p>${event.description}</p>
      <p><strong>Place:</strong> ${event.place}</p>
      <p><strong>Age:</strong> ${event.age}</p>
      <p><strong>Price:</strong> ${event.price}</p>
    `;
    container.appendChild(card);
  });
}



function openBookingForm(eventName) {
  document.getElementById("bookingModal").style.display = "block";
  document.getElementById("eventTitle").textContent = `Book: ${eventName}`;
}

function closeBookingForm() {
  document.getElementById("bookingModal").style.display = "none";
}

function submitBooking(e) {
  e.preventDefault();
  alert("Booking confirmed! Check your email.");
  closeBookingForm();
}