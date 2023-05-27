type initialStateCommentsType = {
    [x:string]: {
        "name": string,
        "review": string,
        "date": string
    }
}

export type commentsProps = {
    "ru": initialStateCommentsType
    "en":initialStateCommentsType
}

export type countsType = {
    ru:number,
    en:number
}

export type actionComments = {
    comments:commentsProps,
    countRu:number,
    countEn:number}

export interface initialStateComments {
    comments:commentsProps,
    counts:countsType
    isLoading:boolean,
    error:string
}