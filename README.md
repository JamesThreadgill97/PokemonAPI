# Pokedex App!

Welcome to my first working Pokedex app! This is a react project built around the PokeAPI V2.

This is a WIP so check back frequently. 

# How To Use!

You have two options for how to run this App:

1: You can find the deployed app at the following link:
    [Pokedex React App](https://pokedex-react-app.onrender.com/)
This deployed version is linked to this repo, and so it will always been up to date.

2. If you want to have this app on your local machine, you can. Just follow these stems

   - The one front of this repo, click on the 'Code' button, and copy either the SSH or the HTTPS option depending on how you have your workflow setup
   - In your CLI, navigate to where you want to have this code set up
   - Run the command `git clone <ssh/https link goes here>`
   - You can then navigate into the project file by running `cd PokemonAPI`
   - Run `code .` and the project file will be opened in your default code editing software (this was built on VSCode)
  
- Dependencies
  
   - You need to run some extra line before this code will work:
   - Either within your CLI that you cloned in with, or within the CLI in your code editor, you'll need to run the following;
   - `npm install` or `npm i`
   - This will download the required dependencies for this app to work.
   - Once successfully downloaded, you should see a node_modules folder, and a package-lock.json file appear.
   - You can then run the command `npm run dev`, and the app should be booted up on your localhost, [localhost:5173](https://localhost:5173) for example.
   - Navigate to this link in your browser, and the app should be running!
 



## Future Feature: 

- Adding more generations (Currently 1-3) - Completed 19/10/23
- Add Filter options
- Create Team option

Thanks for checking this out!
James
v1.0.2

### Update 19/10/23
- Added NavLinks to filter through API by generation, using a context for setting Offset & Limits
- Added a Random Encounter function - go to the dropdown menu and click on random, then you can refresh the page or click on the 'Random Encounter!' button.
- Bugs: 
    - API content isn't fully working in the later generations - missing names, wrong styles, and therefore not all pokemon will play the screech correctly
    - Still needs styling on NavLinks

### Update 20/10/23
- Created background type dependant within /pokedex/:name path - including random
