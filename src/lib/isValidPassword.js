export function isValidPassword(text) {
    const minSize = 3;
    const maxSize = 100;

    if (typeof text !== 'string') {
        return [true, 'Slaptazodis turi buti tesktas']
    }

    if (text.length < minSize) {
        return [true, 'Slaptazodis turi buti ilgesnis uz 3 simbolius']
    }

    if (text.length > maxSize) {
        return [true, 'Slaptazodis turi buti neilgesnis uz 100 simboliu']
    }

}