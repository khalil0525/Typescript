"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("not authorized");
}
exports.router = (0, express_1.Router)();
exports.router.get("/", (req, res) => {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        res.send(`<div><div>You are logged in</div><a href="/logout">Logout</a></div>`);
    }
    else {
        res.send(`<div><div>You are not logged in</div><a href="/login">Login</a></div>`);
    }
});
exports.router.get("/login", (req, res) => {
    res.send(`<form method="POST">
                <div>
                    <label>Email</label>
                    <input name="email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password"/>
                </div>
                <button>Submit</button>
    </form>`);
});
exports.router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === "hi@hi.com" && password === "password") {
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else {
        res.send("Invalid email or password");
    }
});
exports.router.get("/logout", (req, res) => {
    req.session = undefined;
    res.redirect("/");
});
exports.router.get("/protected", requireAuth, (req, res) => {
    res.send("Welcome to protected route, logged in user");
});
