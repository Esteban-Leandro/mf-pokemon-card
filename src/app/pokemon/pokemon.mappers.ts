export const replacePath = (path: string, newValue: string) => {
    let context = path;
    context = context.replace(/#(.*?)#/g, newValue);
    return context;
}

export enum MS_POKEMON_API_CONTEXT {
    POKEMON = '/pokemon',
    POKEMON_NAME = '/#pokemon#',
}