const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

let capitalizeTheFirstLetterOfEachWord = function (words) {
    return String(words)
        .toLowerCase()
        .split(' ')
        .map(function (word) {
            return word.charAt(0).toUpperCase() + word.substring(1);
        })
        .join(' ');
};

let formatDate = function (date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const time = date.toLocaleString('en-US', {
        timeZone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
    return `${day}/${month}/${year} ${time} UTC`;
};

let main = function () {
    const config = JSON.parse(fs.readFileSync(path.join(ROOT, 'config.json'), 'utf8'));
    const locations = config.locations || [];
    const repository = process.env.GITHUB_REPOSITORY || 'NachoOFC/top-github-users-chile';

    let numberOfCities = 0;
    let citiesList = [];
    for (const locationDataModel of locations) {
        for (const city of locationDataModel.cities) {
            if (String(city).toLowerCase() !== String(locationDataModel.country).toLowerCase()) {
                numberOfCities++;
                citiesList.push(`\t\t\t<code>${capitalizeTheFirstLetterOfEachWord(city)}</code> `);
            }
        }
    }

    const template = fs.readFileSync(path.join(ROOT, 'templates', 'README.es.md'), 'utf8');
    let readme = template;
    readme = readme.split('{{DATE}}').join(formatDate(new Date()));
    readme = readme.split('{{NUMBER_OF_CITIES}}').join(String(numberOfCities));
    readme = readme.split('{{CITIES}}').join(citiesList.join('\n'));
    readme = readme.split('{{REPOSITORY}}').join(repository);
    const country = locations.length > 0 ? locations[0] : {};
    readme = readme.split('{{COUNTRY_NAME}}').join(country.geoName || '');
    readme = readme
        .split('{{COUNTRY_FILE}}')
        .join(String(country.country || '').replace(/\s/g, '_').toLowerCase());

    fs.writeFileSync(path.join(ROOT, 'README.md'), readme.replace(/\n+$/, '') + '\n');
    console.log('README.md generated successfully');
};

main();
