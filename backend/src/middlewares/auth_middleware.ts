// middlewares/AuthMiddleware.ts
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).send("Access Denied");
    try {
        const decoded = JwtHelper.verify(token);
        req.user = decoded; // Attach to request context
        next();
    } catch (err) {
        res.status(400).send("Invalid Token");
    }
};