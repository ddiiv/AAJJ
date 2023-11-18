import jwt from "jsonwebtoken";
import moment from "moment";

class jwtservice {
    createToken = (user) => {
        let payload = {
            idUser: user.IdUsuario,
            createAt: moment().unix(),
            expiresAt: moment().add(1, "day").unix(),
        };
        return jwt.sign(payload, process.env.TOKEN_KEY);
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