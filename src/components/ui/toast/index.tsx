import { memo } from "react";


interface ToastProps {
    status: 'Error' | 'Success' | 'Info';
    message: string;
}

function Toast (props: ToastProps) {
    return(
        <>
            {props.message !== '' && (
                <article className={`border-4 px-16 py-4 text-white
                ${props.status == 'Success' && 'bg-green-600'}
                ${props.status == 'Info' && 'bg-blue-400'}
                ${props.status == 'Error' && 'bg-red-600'}`}>
                    <p>{props.message}</p>
                </article>
            )}
        </>
    )
}

export default memo(Toast);