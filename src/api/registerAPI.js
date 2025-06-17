import { users } from "../data/users.js";

export function registerAPI(req, res) {
    for (const user of users) {
        if (user.username === req.body.username) {
            return res.send('Toks username jau uzimtas')
        };
    }

    users.push(req.body);
}