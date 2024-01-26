"use client";

import Modal from "@/components/Modal";
import useAuthModal from "@/hooks/useAuthModal";

import {useRouter} from "next/navigation";
import {useEffect} from "react";

import {useSessionContext, useSupabaseClient} from "@supabase/auth-helpers-react";
import {Auth} from "@supabase/auth-ui-react";
import {ThemeSupa} from "@supabase/auth-ui-shared"

const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const { session } = useSessionContext();
    const { onClose, isOpen } = useAuthModal();

    useEffect(() => {
        if(session){
            router.refresh();
            onClose();
        }
    },[session, router, onClose])

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }

    return(
        <Modal
            isOpen={isOpen}
            onChange={onChange}
            title={"Welcome Back"}
            description={"Login to your account"}
        >
            <Auth
                theme="dark"
                magicLink
                providers={["github"]}
                supabaseClient={supabaseClient}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: '#404040',
                                brandAccent: '#22c55e'
                            }
                        }
                    }
                }}
            />
        </Modal>
    )    
}

export default AuthModal;