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
        titleElement.className = 'tape';

        const artistElement = document.createElement('p');
        artistElement.textContent = `Artist: ${item.artist}`;

        const dateCreatedElement = document.createElement('p');
        dateCreatedElement.textContent = `Date Created: ${item.datecreated}`;

        const platformContainer = document.createElement('div');
        platformContainer.id = 'center-links';

        if (item.youtubelink !== null) {
          const linkContainer = document.createElement('a');
          linkContainer.href = item.youtubelink;
          const youtubeLinkElement = document.createElement('img');
          youtubeLinkElement.id = 'link-logo';
          youtubeLinkElement.src = "/assets/youtubemusic-logo.png";
          linkContainer.appendChild(youtubeLinkElement);
          platformContainer.appendChild(linkContainer);
        }
        if (item.soundcloudlink !== null) {
          const linkContainer2 = document.createElement('a');
          linkContainer2.href = item.soundcloudlink;
          const soundcloudLinkElement = document.createElement('img');
          soundcloudLinkElement.id = 'link-logo';
          soundcloudLinkElement.src = "/assets/soundcloud-logo.png";
          linkContainer2.appendChild(soundcloudLinkElement);
          platformContainer.appendChild(linkContainer2);
        }
        if (item.applemusiclink !== null) {
          const linkContainer3 = document.createElement('a');
          linkContainer3.href = item.applemusiclink;
          const applemusicLinkElement = document.createElement('img');
          applemusicLinkElement.id = 'link-logo';
          applemusicLinkElement.src = "/assets/applemusic-logo.png";
          linkContainer3.appendChild(applemusicLinkElement);
          platformContainer.appendChild(linkContainer3);
        }
        if (item.spotifylink !== null) {
          const linkContainer4 = document.createElement('a');
          linkContainer4.href = item.spotifylink;
          const spotifyLinkElement = document.createElement('img');
          spotifyLinkElement.id = 'link-logo';
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

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	 document.body.scrollTop = 0;
	 document.documentElement.scrollTop = 0;
}

// JavaScript code
function search_tapes() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('tape');
  console.log(x);
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          item[i].style.display="none";
      } else {
        item[i].style.display="flex";                 
    }

  }
}