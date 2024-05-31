# Movie Playlist Application

This is a React application that allows users to search for movies using the OMDB API, view detailed information about a selected movie, and add movies to public and private playlists.

## Features

- Search for movies using the OMDB API.
- View detailed information about a selected movie.
- Add movies to a public or private playlist.
- Prevent duplicate movies from being added to playlists.
- Remove movies from the public playlist.

## Setup and Installation

### Prerequisites

- Node.js and npm installed on your machine.

### Steps to run the project

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/movie-playlist-app.git
   cd movie-playlist-app
2. **Install Dependencies**
   
   npm install
   
4. **Set up the OMDB API key**

   Create a .env file in the root directory of the project.

Add your OMDB API key to the .env file:

REACT_APP_OMDB_API_KEY=your_api_key_here

5. **Run the APplication**

   npm start

## Project Structure**

  src/
    components/
      Header.js - The header component of the application.
      SingleMovie.js - The component to display detailed information about a single movie.
      PublicPL.js - The component to display the public playlist.
      PrivatePL.js - The component to display the private playlist.
    context/
      context.js - The context provider for managing playlists.
    hooks/
      useFetch.js - Custom hook for fetching data from the OMDB API.
    App.js - The main App component.
    index.js - The entry point of the application.
    
## Future Enhancements

 Add user authentication to save playlists for individual users.

 Implement pagination for movie search results.

 Add more details and functionalities to the movie details page.

## Contributing

 Contributions are welcome! Please fork the repository and submit a pull request.
