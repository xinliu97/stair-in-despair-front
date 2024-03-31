export const uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
export const pPattern = /^[a-zA-Z0-9_-]{8,16}$/;
export const ePattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
export const phPattern = /^1[34578]\d{9}$/;
export const isUsername = (str) => {
    return uPattern.test(str);

}

export const isPassword = (str) => {
    return pPattern.test(str);
}

export const isEmail = (str) => {
    return ePattern.test(str);
}

export const isPhoneNumber = (str) => {
    return phPattern.test(str);
}
// Path: src/utils/rem.js