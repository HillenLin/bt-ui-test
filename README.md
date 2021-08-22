# BtUiTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.14.

# Deployed URL

This Angular Application has been deployed to Github Pages. Please review this link: https://hillenlin.github.io/bt-ui-test/users to check.

# Acceptance criteria

Stage 1:

1. SPA landing page, will show the header, and make a call to fetch the users, which showing a “Loading icon/indicator”.
2. Once fetched, the set of users (first name only from the “name” property) will be displayed as selectable buttons.
3. This will allow the user to select any single name

Stage 2:

1. When the user selects a name, there’s a “Loading icon/indicator” shown below the names,
   while an API call is made to fetch the posts from that user.
2. Once fetched, the posts are shown as a list, with the title, and body properties displayed.
3. Posts are initially limited to the first 3, with a “Load all” button, which reveals the rest of the posts.
4. There is also an expand button against the post – used to load comments.

Stage 3 (Not wireframed):

1. When the user expands a post, comments against that post are retrieved from the
   comments API.
2. Display them in some sensible format in the screen.

# Installation

1. Use Visual Studio Code to open this project folder
2. In the project directory, run "npm install" to install all necessary node modules
3. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
4. Supported Browser: Chrome, Firefox, Safari, Edge and most modern web browsers

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
