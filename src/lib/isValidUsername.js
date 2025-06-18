export function isValidUsername(text) {
    const minSize = 3;
    const maxSize = 20;

    if (typeof text !== 'string') {
        return [true, 'Slapyvardis turi buti tekstas'];
    }

    if (text.length < minSize) {
        return [true, 'Slapyvardis turi buti ilgesnis uz 3 simbolius'];
    }

    if (text.length > maxSize) {
        return [true, 'Slapyvardis turi buti neilgesnis uz 20 simboliu'];
    }

    if (text.includes(' ')) {
        return [true, 'Slapyvardis negali tureti tarpu'];
    }

    return [false, ''];
}