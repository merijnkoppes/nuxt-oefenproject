import sessionStore from '../utils/sessionStore';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const { MipBaseUrl } = config;
    const body = await readBody(event);

    console.log("Received request body:", JSON.stringify(body, null, 2));

    // Retrieve session token from cookies
    const sessionToken = getCookie(event, "sessionToken");
    if (!sessionToken) {
        throw createError({ statusCode: 401, statusMessage: "Unauthorized: No session token" });
    }

    console.log("Retrieved sessionToken:", sessionToken);

    // Get JWT from in-memory store
    const jwt = sessionStore.get(sessionToken);
    if (!jwt) {
        throw createError({ statusCode: 401, statusMessage: "Session expired: No JWT found" });
    }

    console.log("Retrieved JWT:", jwt);

    const requestBody = JSON.stringify({
        username: body.username,
        password: body.password,
        token: jwt  // Send raw, unencoded token
    });
    
    const response = await fetch(`${MipBaseUrl}/UserInfo`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: requestBody
    });
    console.log('requestBody:' + requestBody)
    if (!response.ok) {
        throw createError({ statusCode: response.status, statusMessage: "Failed to fetch user info" });
    }

    const responseData = await response.json();
    
    console.log("Backend Response:", JSON.stringify(responseData, null, 2));

    return responseData;
});
