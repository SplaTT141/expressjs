import { users } from "../data/users.js";
import { IsValid } from "../lib/IsValid.js";
import { loginTokens } from "../data/users.js";
import { randomStringGenerator } from "../lib/randomString.js";

export function loginAPI(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        username: 'username',
        password: 'password',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    let userObj = null;

    for (const user of users) {
        if (user.username === req.body.username && user.password === req.body.password) {
            userObj = user;
            break;
        }
    }

    if (!userObj) {
        return res.json({
            status: 'error',
            msg: 'Neteisingas username ir password pora',
        });
    }

    const randomString = randomStringGenerator();

    loginTokens.push({
        userId: userObj.id,
        randomString: randomString,
        createdAt: Date.now(),
    });

    return res
        .set({
            'Set-Cookie': `login-token=${randomString}; domain=localhost; max-age=60; HttpOnly; path=/; Secure; SameSite=Lax`,
        })
        .json({
            status: 'success',
            msg: 'Sekmingai prisijungei!!',
        });
}