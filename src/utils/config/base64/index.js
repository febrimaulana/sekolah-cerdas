export const getBase64 = (img) => {
    return new Promise((resolve) => {
        const base64 = new FileReader();
        base64.readAsDataURL(img);
        resolve(base64)
    })
}