var options = [
  ["Cat", "dog"],
  ["Tea", "coffee"],
  ["Mountains", "beach"],
  ["Classical music", "rock music"],
  ["Football", "basketball"],
  ["Pulp Fiction", "Fight Club"],
  ["Tesla", "Bugatti"],
  ["Monet", "Picasso"],
  ["Marvel", "DC"],
  ["Hiking", "swimming"],
  ["Picasso", "Van Gogh"],
  ["Bike", "car"],
  ["Netflix", "Disney+"],
  ["Science fiction", "fantasy"],
  ["Cardio", "weight lifting"],
  ["Morning person", "night owl"],
  ["Fiction", "non-fiction"],
  ["Digital books", "physical books"],
  ["Freelance work", "traditional employment"],
  ["Star Wars", "Star Trek"],
  ["Winter", "summer"],
  ["Save", "spend"],
  ["Cooking at home", "eating out"],
  ["Sweet", "savory"],
  ["Comedy", "horror"],
  ["City", "countryside"],
  ["Facebook", "Twitter"],
  ["Coding", "designing"],
  ["PlayStation", "Xbox"],
  ["Board games", "video games"],
  ["Nature", "technology"],
  ["Pasta", "pizza"],
  ["Swimming", "sunbathing"],
  ["Basketball", "baseball"],
  ["Spring", "fall"],
  ["Classical", "jazz"],
  ["London", "New York"],
  ["Introvert", "extrovert"],
  ["Pen", "pencil"],
  ["Physical exercise", "mental exercise"],
  ["Hot", "cold weather"],
  ["Reading", "writing"],
  ["Travel by plane", "train"],
  ["Early bird", "night owl"],
  ["Ice cream", "frozen yogurt"],
  ["Shower in the morning", "at night"],
  ["Comedy movies", "thriller movies"],
  ["Math", "history"],
  ["VR", "AR"],
  ["Dine in", "take away"],
  ["Captain America", "Iron Man"],
  ["Star Wars", "Star Trek"],
  ["Phone call", "messaging"],
  ["Reading books", "watching movies"],
  ["Beer", "whisky"],
  ["Pizza", "burger"],
  ["Linear algebra", "calculus"],
  ["Cardio", "yoga"],
  ["Tea", "juice"],
  ["Classical ballet", "modern dance"],
  ["Skiing", "surfing"],
  ["Thriller movies", "romantic movies"],
  ["Running", "cycling"],
  ["City life", "farm life"],
  ["Volunteering", "donating"],
  ["Stand-up comedy", "improv"],
  ["Pop art", "surrealism"],
  ["Going out for breakfast", "dinner"],
  ["Baking", "frying"],
  ["Studio Ghibli", "Disney"],
  ["Snapchat", "Instagram"],
  ["Tom and Jerry", "Scooby-Doo"],
  ["Drums", "guitar"],
  ["Photography", "videography"],
  ["Fitness", "wellness"],
  ["Coding", "graphic design"],
  ["Superman", "Batman"],
  ["Spotify", "Apple Music"],
  ["Renaissance", "Baroque art"],
  ["Greek mythology", "Norse mythology"],
  ["Leather jackets", "denim jackets"],
  ["Lipstick", "lip gloss"],
  ["GoT", "Breaking Bad"],
  ["Reptiles", "birds"],
  ["Archaeology", "anthropology"],
  ["Flipkart", "Amazon"],
  ["Sketching", "painting"],
  ["Super Mario", "Sonic the Hedgehog"],
  ["The Beatles", "Rolling Stones"],
  ["Latin", "Greek"],
  ["Peanut butter", "Nutella"],
  ["Manga", "comic books"],
  ["Cappuccino", "latte"],
  ["Sudoku", "crossword puzzles"],
  ["Fast food", "home-cooked meal"],
  ["Solar power", "wind power"],
  ["Snapchat", "TikTok"],
  ["Gymnastics", "athletics"],
  ["Smoothies", "milkshakes"],
  ["Portraits", "landscapes"]

];


var images = [
  "https://media.makeameme.org/created/huh-you-are.jpg",
  "https://i.pinimg.com/564x/9a/50/16/9a50163735af5c8c7f499f2aadc444e7.jpg",
  "https://media.tenor.com/lFrdRid5QBMAAAAM/youre-boring-me-sleepy.gif",
  "https://i.pinimg.com/564x/f2/c4/94/f2c49486a88a159af7d3df930c21aafe.jpg",
  "https://i.pinimg.com/564x/86/8c/af/868caf35cb0a10a9350f707784df1bac.jpg",
  "https://media.makeameme.org/created/youre-boring-f8b0fc9876.jpg",
  "https://www.happierhuman.com/wp-content/uploads/2022/05/memes-being-bored-askideas-bored-since-birth.jpg",
  "https://media.makeameme.org/created/yaaaaaawn-you.jpg",
  "https://media.makeameme.org/created/youre-so-boring-7ce289c3d0.jpg",
  "https://www.askideas.com/media/49/Funny-Bored-Meme-I-Am-So-Bored-I-Wish-I-Was-Hungry-Picture.jpg",
  "https://media.tenor.com/exoxIMeCxF0AAAAM/youre-boring-dry.gif",
  "https://i.pinimg.com/564x/1b/2a/1d/1b2a1d330571305895ec789c3b0619df.jpg",
  "https://i.pinimg.com/564x/6f/c1/ad/6fc1ade4ed382c3abf18c9eafb763bc5.jpg"
  
];



var currentIndex = 0;
var currentImageIndex = 0;

// Play background music
var bgMusic = document.getElementById("bg-music");
bgMusic.volume = 0.2;

// Set up particles effect
particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.json', function() {
  console.log('callback - particles.js config loaded');
});



function showMessage() {
  var message = document.getElementById("message");
  message.style.opacity = 0;

  // Create new image
  var img = new Image();
  img.className = "torchlight w-full md:w-1/2 my-4 transition-opacity duration-500";
  img.src = images[currentImageIndex];

  // If image loads successfully, display it
  img.onload = function() {
    message.innerHTML = '';
    message.appendChild(img);
    message.style.opacity = 1;

    // After 1 second, show the next message and options
    setTimeout(function() {
      message.style.opacity = 0;
      setTimeout(function() {
        message.innerHTML = "Choose wisely...";
        message.style.opacity = 1;
        showOptions();
      }, 500);
    }, 1000);
  };

  // If image fails to load, display "You ARE BORING!"
  img.onerror = function() {
    message.innerHTML = "You ARE BORING!";
    message.style.opacity = 1;

    // After 1 second, show the next message and options
    setTimeout(function() {
      message.style.opacity = 0;
      setTimeout(function() {
        message.innerHTML = "Choose wisely...";
        message.style.opacity = 1;
        showOptions();
      }, 500);
    }, 1000);
  };

  // Cycle through images
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

function showOptions() {
  var optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  var currentOptions = options[currentIndex];
  
  currentOptions.forEach(function(option) {
    var btn = document.createElement("button");
    btn.innerHTML = option;
    btn.className = "transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold";
    btn.onclick = function() {
      // Start the music when the first button is clicked
      if (!bgMusic.currentTime) {
        bgMusic.play();
      }
      
      showMessage();
      currentIndex = (currentIndex + 1) % options.length;
    };
    optionsContainer.appendChild(btn);
  });
}

showOptions();
