console.log('%cis this thing working?', 'color: lightgreen');
const baseURL = 'http://localhost:4000';
const charactersURL = `${baseURL}/characters`;

fetch(charactersURL)
    .then(parseJSON)
    .then(displayCharacters)

function displayCharacters(characters) {
    console.log('Presenting Yallz Characters: ', characters)
    const charactersSection = document.querySelector('.characters')
    characters.forEach((character) => {
        showCharacter(character, charactersSection)
    })
}

function showCharacter(character, charactersSection) {
    const characterCard = document.createElement('div')
    characterCard.classList.add('character-card')

    const name = document.createElement('h2')
    name.textContent = character.name;

    const image = document.createElement('img')
    image.src = character.image

    const favoriteFood = document.createElement('p')
    favoriteFood.textContent = character.favorite_food

    const affiliation = document.createElement('p')
    affiliation.textContent = character.affiliation
        ? 'Believes in The Force'
        : 'Follows the Dark Side'

    characterCard.append(name, image, favoriteFood, affiliation);
    charactersSection.append(characterCard)
}

function parseJSON(response) {
    return response.json();
}