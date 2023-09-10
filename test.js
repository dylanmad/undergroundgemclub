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

        const artistElement = document.createElement('p');
        artistElement.textContent = `Artist: ${item.artist}`;

        const dateCreatedElement = document.createElement('p');
        dateCreatedElement.textContent = `Date Created: ${item.datecreated}`;

        const youtubeLinkElement = document.createElement('a');
        youtubeLinkElement.href = item.youtubelink;
        youtubeLinkElement.textContent = 'Listen on YouTube';

        // Append the created elements to the item container
        itemContainer.appendChild(imageElement);
        itemContainer.appendChild(titleElement);
        itemContainer.appendChild(artistElement);
        itemContainer.appendChild(dateCreatedElement);
        itemContainer.appendChild(youtubeLinkElement);

        // Append the item container to the data container
        dataContainer.appendChild(itemContainer);
    });
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });