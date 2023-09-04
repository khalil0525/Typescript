"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
exports.router = (0, express_1.Router)();
// router.get("/", (req: Request, res: Response) => {
// 	if (req.session?.loggedIn) {
// 		res.send(
// 			`<div><div>You are logged in</div><a href="/logout">Logout</a></div>`
// 		);
// 	} else {
// 		res.send(
// 			`<div><div>You are not logged in</div><a href="/login">Login</a></div>`
// 		);
// 	}
// });
// router.get("/login", (req: RequestWithBody, res: Response) => {
// 	res.send(`<form method="POST">
//                 <div>
//                     <label>Email</label>
//                     <input name="email"/>
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input name="password" type="password"/>
//                 </div>
//                 <button>Submit</button>
//     </form>`);
// });
// router.post("/login", (req: Request, res: Response) => {
// 	const { email, password } = req.body;
// 	if (email && password && email === "hi@hi.com" && password === "password") {
// 		req.session = { loggedIn: true };
// 		res.redirect("/");
// 	} else {
// 		res.send("Invalid email or password");
// 	}
// });
// router.get("/logout", (req: Request, res: Response) => {
// 	req.session = undefined;
// 	res.redirect("/");
// });
// router.get("/protected", requireAuth, (req: Request, res: Response) => {
// 	res.send("Welcome to protected route, logged in user");
// });
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    return LoginController;
}());
