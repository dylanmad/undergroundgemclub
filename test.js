const baseUrl = 'http://localhost:5000';
    fetch(`${baseUrl}/api/data`)
      .then((response) => response.json())
      .then((data) => {
        // Process and populate the table with the data
        const dataContainer = document.getElementById('data-container');

        // Extract the 'recordset' array from the 'data' object
        const recordset = data.recordset;
        console.log(data.recordset);
        // Create HTML elements to display each item in the recordset
        recordset.forEach((item) => {
        // Create a container div for each item
        const itemContainer = document.createElement('div');
        itemContainer.id = 'item';

        // Create and populate HTML elements with data
        const imageElement = document.createElement('img');
        imageElement.src = "/assets/covers/" + item.imagelink;
        imageElement.id = 'cover-image';
        imageElement.alt = item.alt;

        const titleElement = document.createElement('h2');
        titleElement.textContent = item.title;
        titleElement.className = 'title';

        const artistElement = document.createElement('p');
        artistElement.textContent = `Artist: ${item.artist}`;
        artistElement.className = 'artist';

        const dateCreatedElement = document.createElement('p');
        dateCreatedElement.textContent = `Date Created: ${item.datecreated}`;
        dateCreatedElement.className = 'date';

        const platformContainer = document.createElement('div');
        platformContainer.id = 'center-links';

        if (item.youtubelink !== null) {
          const linkContainer = document.createElement('a');
          linkContainer.href = item.youtubelink;
          const youtubeLinkElement = document.createElement('img');
          youtubeLinkElement.id = 'link-logo';
          youtubeLinkElement.class = 'yt-link';
          youtubeLinkElement.src = "/assets/youtubemusic-logo.png";
          linkContainer.appendChild(youtubeLinkElement);
          platformContainer.appendChild(linkContainer);
        }
        if (item.soundcloudlink !== null) {
          const linkContainer2 = document.createElement('a');
          linkContainer2.href = item.soundcloudlink;
          const soundcloudLinkElement = document.createElement('img');
          soundcloudLinkElement.id = 'link-logo';
          soundcloudLinkElement.class = 'sc-link';
          soundcloudLinkElement.src = "/assets/soundcloud-logo.png";
          linkContainer2.appendChild(soundcloudLinkElement);
          platformContainer.appendChild(linkContainer2);
        }
        if (item.applemusiclink !== null) {
          const linkContainer3 = document.createElement('a');
          linkContainer3.href = item.applemusiclink;
          const applemusicLinkElement = document.createElement('img');
          applemusicLinkElement.id = 'link-logo';
          applemusicLinkElement.class = 'apple-link';
          applemusicLinkElement.src = "/assets/applemusic-logo.png";
          linkContainer3.appendChild(applemusicLinkElement);
          platformContainer.appendChild(linkContainer3);
        }
        if (item.spotifylink !== null) {
          const linkContainer4 = document.createElement('a');
          linkContainer4.href = item.spotifylink;
          const spotifyLinkElement = document.createElement('img');
          spotifyLinkElement.id = 'link-logo';
          spotifyLinkElement.class = 'spotify-link';
          spotifyLinkElement.src = "/assets/spotify-logo.png";
          linkContainer4.appendChild(spotifyLinkElement);
          platformContainer.appendChild(linkContainer4);
        }

        // Append the created elements to the item container
        itemContainer.appendChild(imageElement);
        itemContainer.appendChild(titleElement);
        itemContainer.appendChild(artistElement);
        itemContainer.appendChild(dateCreatedElement);
        itemContainer.appendChild(platformContainer);

        // Append the item container to the data container
        dataContainer.appendChild(itemContainer);
    });
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });


// Default Search Value
let x = document.getElementsByClassName('title');

// Search Bar Functionality
function search_tapes() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();

  //let x = document.getElementsByClassName('title');
  console.log(x);
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          item[i].style.display="none";
      } else {
        item[i].style.display="flex";                 
    }

  }
}

// Updates search criteria when radio button pressed
function updateSearch(searchAttribute) {
  x = document.getElementsByClassName(searchAttribute.toLowerCase());
  document.getElementById('searchbar').placeholder = "Search Mixtapes by " + searchAttribute;
}

// Scroll To Top Button

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
  //document.body.scrollTop = 0; // For Safari
  //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}