import {
    PRELOADER_SHOW,
    PRELOADER_HIDE
} from "../constants/actionTypes";

export function preloaderShow() {
    return {type: PRELOADER_SHOW};
}

export function preloaderHide() {
    return {type: PRELOADER_HIDE}
}
