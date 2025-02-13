import sessionStore from '../utils/sessionStore';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const { MipBaseUrl } = config;
    const body = await readBody(event);

    // Validate input
    if (!body.username || !body.password) {
        throw createError({ statusCode: 400, statusMessage: "Missing credentials" });
    }

    // Request JWT from backend
    const response = await fetch(`${config.MipBaseUrl}/Login`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            username: body.username,
            password: body.password
        }).toString()
    });

    if (!response.ok) {
        throw createError({ statusCode: response.status, statusMessage: "Login request failed" });
    }

    const responseData = await response.json();
console.log("responseData:" + responseData)
    // Check if login was successful
    if (!responseData.status || !responseData.token) {
        throw createError({ statusCode: 401, statusMessage: responseData.message || "Invalid credentials" });
    }

    const jwt = responseData.token;  // Extract token from response
console.log("nieuwetoken:" + jwt)
    // Generate a Nitro session token
    const sessionToken = crypto.randomUUID();

    // Store the JWT in memory (valid until Nitro restarts)
    sessionStore.set(sessionToken, jwt);

    // Set session token as an HTTP-only cookie
    setCookie(event, "sessionToken", sessionToken, {
        httpOnly: true,
        secure: false,  // Change to true in production
        maxAge: 3600,   // 1 hour
        path: "/"
    });

    return { message: "Login successful" };
});








//

// const sessionTokens = new Map(); // Store tokens in memory

// export default defineEventHandler(async (event) => {
//     const config = useRuntimeConfig();
//     const { MipBaseUrl } = config;
//     const body = await readBody(event);
//     const request = new URLSearchParams();

//     request.append("username", body.email);
//     request.append("password", body.password);

//     const response = await fetch(`${MipBaseUrl}/Login`, {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: request.toString(),
//     });

//     if (!response.ok) {
//         return { success: false, message: "Login failed" };
//     }

//     const responseData = await response.json();
//     const token = responseData.token; // Assuming token is returned from backend

//     // Store token in memory
//     sessionTokens.set(body.email, token);

//     return { success: true, message: "Login successful" };
// });
