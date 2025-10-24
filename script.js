// =========================================================================
// !!! INSTRUCTIONS FOR STUDENTS: EDIT THE 'PROJECTS' ARRAY BELOW !!!
// =========================================================================
 
const projects = [
    // ----------------------------------------------------
    // PROJECT 1: A Sample MakeCode Arcade Game
    // ----------------------------------------------------
    {
        title: "File Management in Python",
        description: "I learnt how to open and read txt files from my python console",
        imagePath: "FileManagement Code_1.png", // NOTE: This image file must be in an 'images' folder!
        link: "file_management.html"
    },
 
    // ----------------------------------------------------
    // PROJECT 2: Another Game Example
    // ----------------------------------------------------
    {
        title: "Platformer Adventure",
        description: "In this project, I focused on tilemaps and gravity physics. I added a custom character sprite and a multi-level design.",
        imagePath: "images/platformer_screenshot.png", // NOTE: This image file must be in an 'images' folder!
        link: "john.html"
    },
 
    // ----------------------------------------------------
    // PROJECT 3: **ADD YOUR NEW PROJECT HERE**
    // Copy the block above, change the details, and make sure to add a COMMA after the closing bracket '}'
    // ----------------------------------------------------
    
    {
        title: "My Awesome New Game",
        description: "I used an array to store enemy positions and learned how to use the 'for loop' to spawn multiple enemies. It's tough!",
        imagePath: "images/new_project_screenshot.png", // REMEMBER to add your screenshot to the 'images' folder!
        link: "https://arcade.makecode.com/#####-my-new-game"
    },
    {
        title: "My jhjjhbjhbhj New Game",
        description: "I used an array to store enemy positions and learned how to use the 'for loop' to spawn multiple enemies. It's tough!",
        imagePath: "images/new_project_screenshot.png", // REMEMBER to add your screenshot to the 'images' folder!
        link: "https://arcade.makecode.com/#####-my-new-game"
    },
    
];
 
 
// =========================================================================
// !!! DO NOT EDIT BELOW THIS LINE - This code builds the website !!!
// =========================================================================
 
const projectsContainer = document.getElementById('projects-container');
 
projects.forEach(project => {
    // Create the main card div
    const card = document.createElement('div');
    card.classList.add('project-card');
 
    // Create the image element
    const image = document.createElement('img');
    image.src = project.imagePath;
    image.alt = project.title + " Screenshot";
    card.appendChild(image);
 
    // Create the content container
    const content = document.createElement('div');
    content.classList.add('card-content');
 
    // Add the title
    const title = document.createElement('h3');
    title.textContent = project.title;
    content.appendChild(title);
 
    // Add the description
    const description = document.createElement('p');
    description.textContent = project.description;
    content.appendChild(description);
 
    // Add the link button
    const link = document.createElement('a');
    link.href = project.link;
    link.textContent = "Play Game / View Project";
    link.target = "_blank"; // Opens link in a new tab
    content.appendChild(link);
 
    // Append the content to the card
    card.appendChild(content);
 
    // Append the full card to the main container
    projectsContainer.appendChild(card);

});




