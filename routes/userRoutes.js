const userRouter = require("express").Router();
const userController = require("../controllers/userController");

// Get all users
userRouter.get("/", userController.getAllUsers);

userRouter.post("/", userController.createNewUser);

userRouter.get("/:id", userController.getUserById);

userRouter.put("/:id", userController.editUserById);

userRouter.delete("/:id", userController.deleteUserById);

module.exports = userRouter;
