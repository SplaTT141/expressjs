import { users } from "../data/users.js";
import { isValidPassword } from "../lib/isValidPassword.js";
import { isValidUsername } from "../lib/isValidUsername.js";

export function registerAPI(req, res) {
    const [errUser, User] = isValidUsername(req.body.username);
    if (errUser) {
        return res.json(User)
    }

    const [errPass, msgPass] = isValidPassword(req.body.password);
    if (errPass) {
        return res.json(msgPass);
    }

    for (const user of users) {
        if (user.username === req.body.username) {
            return res.json('Toks username jau uzimtas')
        };
    }

    users.push(req.body);

    return res.json('Tu esi, nr:' + users.length);
}

// import { users } from "../data/users.js";
// import { isValidUsername } from "../lib/isValidUsername.js";

// export function registerAPI(req, res) {
//     const usernameResult = isValidUsername(req.body.username);

//     if (!usernameResult[0]) {
//         return res.status(400).json({ success: false, message: usernameResult[1] });
//     }

//     for (const user of users) {
//         if (user.username === req.body.username) {
//             return res.status(400).json({ success: false, message: 'Toks username jau užimtas' });
//         }
//     }

//     users.push(req.body);

//     return res.status(201).json({ success: true, message: 'Tu esi, nr: ' + users.length });
// }