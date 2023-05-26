const menu = document.getElementById('menu')
const list = document.getElementById('list')

const content = document.getElementById('content')
const dropdown = document.getElementById('dropdown')
const dropdownContent = document.getElementById('dropdown-content')

const back = document.getElementById('back')


function toggleMenu(){
    if (list.classList.contains("hidden")) {
        list.classList.remove("hidden");
      } else {
        list.classList.add("hidden");
      }
    }
    

menu.addEventListener('click', toggleMenu)

function toggleContent(){
    if (dropdown.classList.contains('hidden')){
        dropdown.classList.remove('hidden')
        list.classList.add('hidden')
      
    } else {
        dropdown.classList.add('hidden')
    }
}

content.addEventListener('click', toggleContent)

back.addEventListener('click', () => {
    list.classList.remove('hidden')
    dropdown.classList.add('hidden')
})


// maps

  var openMapLink = document.getElementById("open-map-link");
  
  openMapLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the link from navigating immediately
    
    var address = "Vibevej 7, 2630 Taastrup";
    
    // Detect the user's operating system
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var os = "";
    
    if (/windows phone/i.test(userAgent)) {
      os = "windows";
    } else if (/android/i.test(userAgent)) {
      os = "android";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      os = "ios";
    }
    
    // Set the URL based on the detected operating system
    var mapUrl = "";
    
    switch (os) {
      case "windows":
        mapUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
        break;
        
      case "android":
        mapUrl = "https://maps.google.com/maps?q=" + encodeURIComponent(address);
        break;
        
      case "ios":
        mapUrl = "https://maps.apple.com/?address=" + encodeURIComponent(address);
        break;
        
      default:
        mapUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
    }
    
    // Open the map URL in a new tab/window
    window.open(mapUrl, "_blank");
  });

