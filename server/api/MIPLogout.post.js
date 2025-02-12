import sessionStore from '../utils/sessionStore';

export default defineEventHandler(async (event) => {
    // Retrieve session token from cookies
    const sessionToken = getCookie(event, "sessionToken");
    if (!sessionToken) {
        return { message: "No active session" };
    }

    // Remove session from memory
    sessionStore.delete(sessionToken);

    // Remove cookie
    setCookie(event, "sessionToken", "", {
        httpOnly: true,
        secure: false,
        maxAge: -1,
        path: "/"
    });

    return { message: "Logged out" };
});
