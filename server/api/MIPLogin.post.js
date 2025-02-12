export default defineEventHandler( async(event) => {
    const config = useRuntimeConfig();
    const {MipBaseUrl} = config
    const body = await readBody(event)
    const request = new URLSearchParams();

    request.append("username", body.email);
    request.append("password", body.password);


    const response = await fetch(`${MipBaseUrl}/Login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: request.toString(),
    })

    // const responseData = await response.json();
    // return responseData
    return "succes"
})