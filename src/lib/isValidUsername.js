export function isValidUsername(text) {
    const minSize = 3;
    const maxSize = 20;
    const allowedSymbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    if (typeof text !== 'string') {
        return [true, 'Slapyvardis turi buti tekstas'];
    }

    if (text.length < minSize) {
        return [true, `Slapyvardis turi buti ne maziau ${minSize} simboliu`];
    }

    if (text.length > maxSize) {
        return [true, `Slapyvardis turi buti ne daugiau ${maxSize} simboliu`];
    }

    if (text.includes(' ')) {
        return [true, 'Slapyvardis negali tureti tarpu'];
    }

    const foundIllegalSymbols = [];

    for (const s of text) {
        if (!allowedSymbols.includes(s) && !foundIllegalSymbols.includes(s)) {
            foundIllegalSymbols.push(s);
        }
    }

    if (foundIllegalSymbols.length) {
        return [true, `Slapyvardyje panaudotas neleistinas simbolis: ${foundIllegalSymbols.join(', ')}`];
    }

    return [false, ''];
}