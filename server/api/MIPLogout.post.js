import sessionStore from '../utils/sessionStore';

export default defineEventHandler(async (event) => {
    const sessionToken = getCookie(event, "sessionToken");
    if (!sessionToken) {
        return { message: "No active session" };
    }

    sessionStore.delete(sessionToken);

    setCookie(event, "sessionToken", "", {
        httpOnly: true,
        secure: false,
        maxAge: -1,
        path: "/"
    });

    return { message: "Logged out" };
});
