"use client";

import {useEffect, useState} from "react";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

const ModelProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    //Trick to check if loaded
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }

    return (
        <>
            <AuthModal/>
            <UploadModal/>
        </>
    );
}

export default ModelProvider;