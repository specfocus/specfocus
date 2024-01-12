import { TextBreakpoints } from "@specfocus/spec-texts/lib/contextualize";
import { useContext, useEffect, useState } from "react";
import Contextual from "./context";
const useTextual = ({ replace, textual, size = TextBreakpoints.md }) => {
    const { format } = useContext(Contextual);
    const [text, setText] = useState('');
    useEffect(() => {
        let isMounted = true;
        format(textual, size, ...(replace !== null && replace !== void 0 ? replace : []))
            .then(formattedText => {
            if (isMounted) {
                setText(formattedText);
            }
        })
            .catch(error => {
            // Handle error
            console.error('Error formatting text:', error);
            setText(String(textual));
        });
        return () => {
            isMounted = false;
        };
    }, [format, replace, size, textual]);
    return text;
};
export default useTextual;
