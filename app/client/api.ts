type ProviderType="openai"|"azure"|"claude"

export interface Model {
    name:String,
    provider:ProviderType,
    contextLength:number,
}

export interface LLMUsage {
    used:number,
    total:number,
}

export interface LLMModel {
    model:String,
    available:boolean,
}



