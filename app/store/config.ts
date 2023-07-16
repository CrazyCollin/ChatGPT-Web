import {create} from "zustand";
import {DEFAULT_MODELS, StoreKey} from "@/app/constant";
import {LLMModel} from "@/app/client/api";
import {persist} from "zustand/middleware/persist";

export enum SubmitKey  {
    Enter="Enter",
    CtrlEnter="CtrlEnter",
    ShiftEnter="ShiftEnter",
}

export enum Theme {
    Auto="Auto",
    Dark="Dark",
    Light="Light",
}

export type ModelType =(typeof DEFAULT_MODELS)[number]["model"]

export const DEFAULT_CONFIG = {
    submitKey:SubmitKey.Enter as SubmitKey,
    avatar:"1f603",
    fontSize: 14,
    theme:Theme.Auto as Theme,

    // todo tight border

    // preview markdown in bubble
    sendPreviewBubble:true,

    models:DEFAULT_MODELS as any as LLMModel[],

    modelConfig:{
        modelType:"gpt-3.5-turbo" as ModelType,
        temperature:0.5,
        maxTokens:2000,
        historyMessageLimit:10,
        // exceed threshold will auto compress message context
        compressMessageThreshold:1000,

    }
}

export type ChatConfig=typeof DEFAULT_CONFIG

export type ModelConfig=ChatConfig["modelConfig"]

export type ChatConfigStore=ChatConfig & {
    reset:()=>void;
    update:(updater:(config:ChatConfig)=>void)=>void;
    mergeModels:(models:LLMModel[])=>void;
    allModels:()=>LLMModel[];
};

export const useAppConfig=create<ChatConfigStore>()(
    persist(
        (set,get)=>({
            ...DEFAULT_CONFIG,

            reset(){
                set(()=>({...DEFAULT_CONFIG}));
            },

            update(updater){

            },

            mergeModels(models){

            },

            allModels(){
                return get().models;
            },
        }),
        {
            name:StoreKey.Config as StoreKey,
            version:3.6,
            migrate(persistedState,version){
                const state=persistedState as ChatConfig;

                return state as any;
            }
        }
    )
)