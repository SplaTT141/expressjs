export function isValidPassword(text) {
    const minSize = 12;
    const maxSize = 100;

    if (typeof text !== 'string') {
        return [true, 'Slaptazodis turi buti tesktas']
    }

    if (text.length < minSize) {
        return [true, `Slaptazodis turi buti ilgesnis uz ${minSize} simbolius`]
    }

    if (text.length > maxSize) {
        return [true, `Slaptazodis turi buti neilgesnis uz ${maxSize} simboliu`]
    }

    return [false, ''];
}