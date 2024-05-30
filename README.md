# Pokedex Application

This project is a simple web application that displays a list of Pokémon using data fetched from the PokeAPI. The application allows users to view additional details about each Pokémon in a modal dialog. It is built using HTML, CSS, JavaScript, and Bootstrap for styling.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Demo

You can see a live demo of the application [here](https://nxlim-00.github.io/simple-js-app/).

## Features

- Display a list of 150 Pokémon.
- View detailed information about each Pokémon, including an image, height, weight, and types.
- Loading message displayed while data is being fetched.


## Usage

After opening the application in a web browser, you will see a list of Pokémon. Click on a Pokémon name to view detailed information about it in a modal dialog.

## Code Structure

### HTML

- **index.html**: The main HTML file containing the structure of the application, including the modal for displaying Pokémon details.

### JavaScript

- **js/script.js**: Contains the raw JavaScript code for fetching and displaying Pokémon data, as well as handling user interactions.
- **dist/script.js**: Minified Javascript code for better performance.
- **js/promise-polyfill.js**: A polyfill for supporting promises in older browsers.
- **js/fetch.umd.js**: A polyfill for the Fetch API to ensure compatibility with older browsers.
- **js/tota11y.min.js**: A tool for assessing the accessibility of the application.

### Fonts

- **Google Fonts**: The application uses the 'Open Sans' font from Google Fonts.

### Dependencies

- [Bootstrap 4.3.1](https://getbootstrap.com/)
- [jQuery 3.3.1](https://jquery.com/)
- [Popper.js 1.14.7](https://popper.js.org/)
- [PokeAPI](https://pokeapi.co/)


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or feedback! Happy coding!
