const route = require("express").Router();
const { AuthController } = require("../controller");

route.post("/auth/change", async(req, res) => {
    try {
        const result = await AuthController.check(req.body);
        res.json({...result });
        return result;
    } catch (error) {
        res.status(400).json(error);
    }
});

route.post("/auth/login", async(req, res) => {
    try {
        const result = await AuthController.login(req.body);
        res.json({ ok: result });
    } catch (error) {
        res.status(400).json(error);
    }
});
route.put("/auth/change", async(req, res) => {
    try {
        const result = await AuthController.change(req.body);
        return result;
    } catch (error) {
        res.status(400).json(error);
    }
});
module.exports = route;