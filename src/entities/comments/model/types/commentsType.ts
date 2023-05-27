export type initialStateCommentsType = {
    "name": string,
    "review": string,
    "date": string
}

export type commentsProps = {
    "ru": { [x: string]: initialStateCommentsType }
    "en": { [x: string]: initialStateCommentsType }
}

export type countsType = {
    ru: number,
    en: number
}

export type actionComments = {
    comments: commentsProps,
    countRu: number,
    countEn: number
}

export interface initialStateComments {
    comments: commentsProps,
    counts: countsType
    isLoading: boolean,
    error: string
}