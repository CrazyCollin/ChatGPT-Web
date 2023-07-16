import {useEffect} from "react";
import {useAppConfig} from "@/app/store/config";

export function useLoadData() {
    const config=useAppConfig();

    useEffect(()=>{
        (
            async ()=>{
                return config.models;
            }
        )();
    },[])
}

export function Home(){

    useLoadData();

    useEffect(()=>{

    },[])



    return (
        <>

        </>
    )

}