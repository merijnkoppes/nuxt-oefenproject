import sessionStore from '../utils/sessionStore';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const { MipBaseUrl } = config;

    const sessionToken = getCookie(event, "sessionToken");
    if (!sessionToken) {
        throw createError({ statusCode: 401, statusMessage: "Unauthorized: No session token" });
    }

    let token = String(sessionStore.get(sessionToken)).trim();
    if (!token) {
        throw createError({ statusCode: 401, statusMessage: "Session expired: No backend token found" });
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cache-Control", "no-cache");
    myHeaders.append("User-Agent", "PostmanRuntime/7.43.0");
    myHeaders.append("Accept", "*/*");
    myHeaders.append("Accept-Encoding", "gzip, deflate, br");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("token", token);

    const urlencoded = new URLSearchParams();
    urlencoded.append("token", token);

    const response = await fetch(`${MipBaseUrl}/UserInfo`, {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
    });

    const responseText = await response.text();

    try {
        return JSON.parse(responseText);
    } catch {
        return { message: responseText };
    }
});
