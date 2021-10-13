type CategoryTag = {
    title: string;
    color: string;
    expense: boolean;
}

export type Category = {
    [tag: string]: CategoryTag
}