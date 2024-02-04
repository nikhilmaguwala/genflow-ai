"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("95608e29-acf0-49ce-82b3-09b2aaaabb14");
    }, []);

    return null;
};