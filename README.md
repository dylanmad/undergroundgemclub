# Underground Gem Club
### Deployed site is hosted at https://dylanmad.github.io/undergroundgemclub/

# About
The Underground Gem Club is a pet project of mine that I dreamt up in my dorm room in 2022. I'm an avid fan of 90s hip-hop -- A Tribe Called Quest, Slum Village, Nas -- and I'm always trying to discover old mixtapes released by some of my favorite artists during that time. A mixtape is a body of work that an artist makes and distributes for free, usually due to sample clearence issues as sampling is an integral part of hip-hop and many smaller, independent artists do not have the influence to clear them. The problem: since mixtapes started on cassette tapes and CDs, and are not cleared for release on streaming services, it can be hard to find them even when you know what to look for. The solution: The Underground Gem Club.

# Features
## Mixtape Card
The site is populated with "mixtape cards" which consists of the cover, title, artist, and the mixtape's release date. The card also displays the icons of music services that host the mixtape and links to them for each mixtape. 
<img src="https://i.imgur.com/P7TypxJ.png" alt="Anatomy of Mixtape Card" width="800"/>

## Search Bar
The site also features a search bar that can be used to find specific mixtapes. Mixtapes can be searched by title, artist, or date created.
<p align="center">
<img src="https://i.imgur.com/vnI5o83.png" alt="Search Bar" width="800"/>
</p>

## Discord Server
I also created a Discord server so that I can foster a community of underground hip-hop enthusiasts. Just like it is difficult to find underground mixtapes, it can be as or even more difficult to find a community that is passionate about them, so I figured that the Underground Gem Club could be a one-stop-shop for not only finding mixtapes but discussing them, too.

# Implementation
I used Microsoft SQL Server Management Studio to create and manage the database for this project. This way, during development, I can add records and update the page without refreshing it as the database is converted to JSON format and then manipulated from there to populate the page. This is what the database looks like from the management studio:
<p align="center">
<img src="https://i.imgur.com/KxmL3y2.png" alt="Database Snapshot" width="800"/>
</p>

I access the database using NodeJS/Express in the server.js file where I also convert the format to JSON. When I deploy the app, I save the current database directly as a JSON file and store it in the root directory of my repository. This way, I do not have to worry about connecting a server to my site in production when it is not neccessary (if you want to see how I connect another site to a server, check out my sound-board project).

# Backlog
Below is a backlog of features, in no particular order, that I intend to implement and deploy in the near future:
## Sorting: 
The ability to sort mixtapes alphabetically, chronologically, by services, and by other criteria.
## ~~Search Filters:~~ 
Expand search capabilities to allow for searching by title, artist, and other criteria.
## Blog Section: 
A new page on the UGC dedicated to stories about hip-hop, mixtapes, and other related interests, curated by the community.
## Roadmap/History Page: 
A page that shows the history of the mixtape and hip-hop, and celebrates each era that contributed to the genre.

# Conclusion
In closing, I want to thank you for checking out my project, and hope that you become a part of the community if you are interested in underground mixtapes. 
