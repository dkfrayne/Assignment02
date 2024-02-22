let l = prompt('Enter a language code ("es", "de", "en", or "fr")');
switch(l) {
    case 'es': 
        console.log('Hola mundo');
        break;
    case 'de':
        console.log('Hallo welt');
        break;
    case 'fr':
        console.log('Bounjour le monde');
        break;
    case 'en':
    default:
        console.log('Hello world');
}