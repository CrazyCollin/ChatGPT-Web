
export enum Path {
    Home="/",
    Chat="/chat",
    Settings="/settings",
    NewChat="/new-chat",
    Masks="/masks",
    Auth="/auth",
}

export enum StoreKey {
    Config="app-config",
}

export const DEFAULT_MODELS=[
    {
        model:"gpt-3.5-turbo",
        available:true,
    }
] as const;

