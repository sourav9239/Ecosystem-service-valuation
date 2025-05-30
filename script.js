const slides = document.querySelectorAll('.background-slide');
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
}

setInterval(showNextSlide, 5000); // Change slide every 5 seconds

function showObjective() {
    const cityDropdown = document.getElementById("cityDropdown");
    const objectiveTypeDropdown = document.getElementById("objectiveTypeDropdown");
    const cityObjective = document.getElementById("cityObjective");
    const selectedCity = cityDropdown.value;
    const selectedObjectiveType = objectiveTypeDropdown.value;
  
    // Define objectives and images for each city and objective type
    const cityData = {
      kolkata: {
        primary: {
          objective: "Kolkata:1.Flood Control: Assess East Kolkata Wetlands' role in flood mitigation and water treatment.2.Air Quality: Measure green spaces' contribution to air purification.3.Cultural Value:Value historical parks for recreational and cultural benefits.",
          backgroundImage: "url('image/KOLKATA.jpg')"
        },
        specific: {
          objective: "Kolkata: Promoting sustainable waste management and pollution control.",
          backgroundImage: "url('image/KOLKATA.jpg')"
        }
      },
      mumbai: {
        primary: {
          objective: "Mumbai:1.Flood Resilience: Value mangroves and wetlands for coastal protection and flood mitigation.2.Biodiversity: Assess ecological importance of areas like Sanjay Gandhi National Park.3.Coastal Services: Measure coastal ecosystems' role in fisheries, carbon storage, and recreation.",
          backgroundImage: "url('image/MUMBAI.jpg')"
        },
        specific: {
          objective: "Mumbai: Enhancing public transportation and flood mitigation.",
          backgroundImage: "url('image/MUMBAI.jpg')"
        }
      },
      hyderabad: {
        primary: {
          objective: "Hyderabad: 1.Water Conservation: Value lakes (e.g., Hussain Sagar) for water conservation and urban cooling.2.Air Quality: Measure green spaces' impact on air quality amid urban expansion.3.Cultural Value: Assess ecosystems around heritage sites for recreational benefits.",
          backgroundImage: "url('image/Hyderabad.jpg')"
        },
        specific: {
          objective: "Hyderabad: Improving water management and pollution control.",
          backgroundImage: "url('image/Hyderabad.jpg')"
        }
      },
      delhi: {
        primary: {
          objective: "Delhi: 1.Air Pollution: Evaluate vegetation's role in carbon sequestration and pollutant filtration.2Water Purification: Assess Yamuna floodplains' impact on water regulation and pollution control.3.Urban Cooling: Examine cooling effects of green spaces like Aravalli ridge.",
          backgroundImage: "url('image/DELHI.jpg')"
        },
        specific: {
          objective: "Delhi: Infrastructure development and green spaces expansion.",
          backgroundImage: "url('image/DELHI.jpg')"
        }
      },
      chennai: {
        primary: {
          objective: "Chennai: 1. Water Security: Evaluate water bodies for flood control and groundwater recharge.2.Heat Mitigation: Assess green cover's cooling benefits in high temperatures.3.Biodiversity: Highlight wetlands' support for migratory birds and ecosystem resilience.",
          backgroundImage: "url('image/chennai5.jpeg')"
        },
        specific: {
          objective: "Chennai: Improving waste management and flood resilience.",
          backgroundImage: "url('image/chennai5.jpeg')"
        }
      },
      bangalore: {
        primary: {
          objective: "Bangalore: 1.Water Body Restoration: Value lakes for water storage and groundwater recharge.2.Biodiversity: Assess parks' role in supporting urban wildlife.3.Heat Mitigation: Value green spaces' cooling effects to reduce the urban heat island.",
          backgroundImage: "url('image/Bangalore.jpg')"
        },
        specific: {
          objective: "Bangalore: Tackling water scarcity and traffic congestion.",
          backgroundImage: "url('image/Bangalore.jpg')"
        }
      }
    };
  
    if (selectedCity && cityData[selectedCity]) {
      const cityInfo = cityData[selectedCity][selectedObjectiveType];
      cityObjective.textContent = cityInfo.objective;
      document.body.style.backgroundImage = cityInfo.backgroundImage;
    } else {
      cityObjective.textContent = "";
      document.body.style.backgroundImage = "";
    }
  }
  
  function showProblem() {
    const cityDropdown = document.getElementById("cityDropdown");
    const cityProblem = document.getElementById("cityProblem");
    const selectedCity = cityDropdown.value;
  
    // Define problems and images for each city
    const cityData = {
      kolkata: {
        problem: "Kolkata faces challenges in urban infrastructure and heritage conservation.",
        backgroundImage: "url('image/KOLKATA.jpg')"
      },
      mumbai: {
        problem: "Mumbai deals with economic growth demands and urban resilience issues.",
        backgroundImage: "url('image/MUMBAI.jpg')"
      },
      hyderabad: {
        problem: "Hyderabad aims to balance IT expansion with cultural heritage preservation.",
        backgroundImage: "url('image/Hyderabad.jpg')"
      },
      delhi: {
        problem: "Delhi struggles with urban pollution and the need for green space expansion.",
        backgroundImage: "url('image/DELHI.jpg')"
      },
      chennai: {
        problem: "Chennai's challenges include coastal management and disaster resilience.",
        backgroundImage: "url('image/chennai5.jpeg')"
      },
      bangalore: {
        problem: "Bangalore faces water scarcity issues and traffic congestion.",
        backgroundImage: "url('image/Bangalore.jpg')"
      }
    };
  
    // Check if a city is selected and data is available
    if (selectedCity && cityData[selectedCity]) {
      const cityInfo = cityData[selectedCity];
      cityProblem.textContent = cityInfo.problem; // Display problem text
      document.body.style.backgroundImage = cityInfo.backgroundImage; // Change background
    } else {
      cityProblem.textContent = ""; // Clear text if no city selected
      document.body.style.backgroundImage = ""; // Reset background
    }
  }
 document.getElementById("goButton").addEventListener("click", function () {
    const cityDropdown = document.getElementById("cityDropdown");
    const selectedCity = cityDropdown.value;
    const cityProblem = document.getElementById("cityProblem");
    const body = document.body;

    // City Details with Backgrounds and Problems
    const cityDetails = {
        kolkata: {
            background: "url('https://example.com/kolkata.jpg')",
            problem: "Kolkata faces significant challenges related to air pollution and urban congestion.",
        },
        mumbai: {
            background: "url('https://example.com/mumbai.jpg')",
            problem: "Mumbai grapples with flooding during monsoons and a growing housing crisis.",
        },
        hyderabad: {
            background: "url('https://example.com/hyderabad.jpg')",
            problem: "Hyderabad deals with traffic congestion and water scarcity.",
        },
        delhi: {
            background: "url('https://example.com/delhi.jpg')",
            problem: "Delhi struggles with severe air pollution and overpopulation.",
        },
        chennai: {
            background: "url('https://example.com/chennai.jpg')",
            problem: "Chennai faces water logging and urban heat island effects.",
        },
        bangalore: {
            background: "url('https://example.com/bangalore.jpg')",
            problem: "Bangalore faces traffic gridlocks and loss of green cover.",
        },
    };

    if (selectedCity && cityDetails[selectedCity]) {
        // Update background image
        body.style.backgroundImage = cityDetails[selectedCity].background;

        // Show city problem
        cityProblem.classList.add("active");
        cityProblem.innerHTML = `
            <h2>${selectedCity.toUpperCase()}</h2>
            <p>${cityDetails[selectedCity].problem}</p>
        `;
    } else {
        // Reset if no city is selected
        body.style.backgroundImage = "";
        cityProblem.classList.remove("active");
        cityProblem.innerHTML = "<p>Please select a valid city.</p>";
    }
});
//Methodology
// Highlight Workflow Images on Scroll
window.addEventListener('scroll', () => {
  const images = document.querySelectorAll('.methodology-image, .workflow-diagram img');
  images.forEach(image => {
    const rect = image.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (isVisible) {
      image.style.transform = 'scale(1.1)';
      image.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
    } else {
      image.style.transform = 'scale(1)';
      image.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    }
  });
});

// Add Animation to Section Titles on Hover
const sectionTitles = document.querySelectorAll('h2');
sectionTitles.forEach(title => {
  title.addEventListener('mouseenter', () => {
    title.style.color = '#16a085';
    title.style.transform = 'scale(1.05)';
  });

  title.addEventListener('mouseleave', () => {
    title.style.color = '#2c3e50';
    title.style.transform = 'scale(1)';
  });
});



//acknowledgement
// Example for adding dynamic hover effect (optional)
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('mouseover', () => {
      member.style.border = '2px solid #0077b5';
    });
    member.addEventListener('mouseout', () => {
      member.style.border = 'none';
    });
  });
  