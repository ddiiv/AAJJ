import jwt from "jsonwebtoken";
import moment from "moment";

const TOKEN_KEY = "If0qs7QGkXGe99G?rSFUcfZm2Kf2NWz15NDD5JQh9=CTS3XjD5RgRrW?fcfRVEpP/hD24ZZe-W9r9?kt/nXT/XxRHFwJgxrL/VRbeyepuvd0x-sP?yWV6s=AA2eNzSjHmwOFw=wg8pV8/?CXlvRtHJ!KWqlTjeZmL4MXyahlu1STzwu0A09!v7hgzuGXf94UkvZMkKqtfY7bUugZj/FJL?5CDKfH3NDko3EpEqTFAD6HrITtQji?KcqvzQeaz=Qi"

class jwtservice {
    createToken = (user) => {
        let payload = {
            idUser: user.IdUsuario,
            createAt: moment().unix(),
            expiresAt: moment().add(1, "day").unix(),
        };
        return jwt.sign(payload,TOKEN_KEY,{expiresIn: "12 h"});
    };

    checktoken = (req, res, next) => {
        if (!req.headers["user_token"]) {
            return res.json({
                error: "You must include the header",
            });
        }

        const token = req.headers["user_token"];
        let payload = null;

        try {
            payload = jwt.decode(token, process.env.TOKEN_KEY);
        } catch (err) {
            return res.json({
                error: "Invalid token",
            });
        }
        if (moment().unix() > payload.expiresAt) {
            return res.json({ error: "Expired token" });
        }
        req.idUser = payload.idUser;
        next();
    };
}
export default jwtservice;