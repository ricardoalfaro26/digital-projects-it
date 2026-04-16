// import * as React from "react";
// import { Box, Typography, TextField, type TextFieldProps } from "@mui/material";

// export type FormInputProps = {
//     identifier: string;
//     value: string;
//     label: string;
//     onValueChange: (identifier: string, value: string) => void;
//     placeholder?: string;
//     type?: string;
//     disabled?: boolean;
//     required?: boolean;
//     textFieldProps?: Omit<
//         TextFieldProps,
//         | "value"
//         | "onChange"
//         | "label"
//         | "placeholder"
//         | "type"
//         | "disabled"
//         | "required"
//         | "name"
//         | "id"
//         | "inputProps"
//     > & {
//         inputProps?: TextFieldProps["inputProps"];
//     };
// };

// export const FormInput: React.FC<FormInputProps> = ({
//                                                         identifier,
//                                                         value,
//                                                         label,
//                                                         onValueChange,
//                                                         placeholder,
//                                                         type = "text",
//                                                         disabled = false,
//                                                         required = false,
//                                                         textFieldProps,
//                                                     }) => {
//     const mergedInputProps: TextFieldProps["inputProps"] = {
//         ...(textFieldProps?.inputProps ?? {}),
//         "data-field-id": identifier,
//     };

//     const handleChange = (
//         e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//     ) => onValueChange(identifier, e.target.value);

//     return (
//         <Box sx={{ width: "100%", minWidth: 0 }}>
//             {/* ✅ Título arriba */}
//             <Typography
//                 sx={{
//                     fontSize: 12.5,
//                     fontWeight: 700,
//                     color: "rgba(0,0,0,0.75)",
//                     mb: 0.75,
//                     lineHeight: 1.2,
//                 }}
//             >
//                 {label}
//                 {required ? " *" : ""}
//             </Typography>

//             <TextField
//                 fullWidth
//                 variant="outlined"
//                 id={identifier}
//                 name={identifier}
//                 placeholder={placeholder}
//                 value={value ?? ""}
//                 type={type}
//                 disabled={disabled}
//                 {...textFieldProps}
//                 inputProps={mergedInputProps}
//                 onChange={handleChange}
//                 sx={{
//                     width: "100%",
//                     minWidth: 0,

//                     "& .MuiOutlinedInput-root": {
//                         backgroundColor: disabled ? "rgba(0,0,0,0.04)" : "#fff",
//                         borderRadius: 2,
//                         minHeight: 56,

//                         "& fieldset": {
//                             borderColor: "rgba(0,0,0,0.20)",
//                         },
//                         "&:hover fieldset": {
//                             borderColor: disabled ? "rgba(0,0,0,0.20)" : "rgba(0,0,0,0.35)",
//                         },
//                         "&.Mui-focused fieldset": {
//                             borderColor: "#003A70",
//                             borderWidth: 2,
//                         },
//                     },
//                     "& .MuiOutlinedInput-input": {
//                         padding: "16px 14px",
//                         fontSize: 15,
//                     },

//                     ...(textFieldProps?.sx ?? {}),
//                 }}
//             />
//         </Box>
//     );
// };



import * as React from "react";
import { Box, Typography, TextField, type TextFieldProps } from "@mui/material";

export type FormInputProps = {
    identifier: string;
    value: string;
    label: string;
    onValueChange: (identifier: string, value: string) => void;
    placeholder?: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    textFieldProps?: Omit<
        TextFieldProps,
        | "value"
        | "onChange"
        | "label"
        | "placeholder"
        | "type"
        | "disabled"
        | "required"
        | "name"
        | "id"
        | "inputProps"
    > & {
        inputProps?: TextFieldProps["inputProps"];
    };
};

export const FormInput: React.FC<FormInputProps> = ({
    identifier,
    value,
    label,
    onValueChange,
    placeholder,
    type = "text",
    disabled = false,
    required = false,
    textFieldProps,
}) => {
    const mergedInputProps: TextFieldProps["inputProps"] = {
        ...(textFieldProps?.inputProps ?? {}),
        "data-field-id": identifier,
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
        onValueChange(identifier, e.target.value);

    // ✅ SOLUCIÓN AL ESLINT: 
    // Casteamos sx a un objeto que puede tener height de forma segura sin usar 'any'
    const sxStyles = textFieldProps?.sx as React.CSSProperties;
    const customHeight = sxStyles?.height;

    return (
        <Box sx={{ width: "100%", minWidth: 0 }}>
            <Typography
                sx={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "rgba(0,0,0,0.7)",
                    mb: 0.5,
                    lineHeight: 1,
                }}
            >
                {label}
                {required ? " *" : ""}
            </Typography>

            <TextField
                fullWidth
                variant="outlined"
                id={identifier}
                name={identifier}
                placeholder={placeholder}
                value={value ?? ""}
                type={type}
                disabled={disabled}
                {...textFieldProps}
                inputProps={mergedInputProps}
                onChange={handleChange}
                sx={{
                    ...(textFieldProps?.sx ?? {}),
                    "& .MuiOutlinedInput-root": {
                        backgroundColor: disabled ? "rgba(0,0,0,0.04)" : "#fff",
                        borderRadius: 2,
                        // ✅ Usamos la altura extraída
                        height: customHeight || 56,
                        minHeight: customHeight || 56,
                        display: "flex",
                        alignItems: "center",

                        "& fieldset": { borderColor: "rgba(0,0,0,0.20)" },
                        "&:hover fieldset": { borderColor: disabled ? "rgba(0,0,0,0.20)" : "rgba(0,0,0,0.35)" },
                        "&.Mui-focused fieldset": { borderColor: "#003A70", borderWidth: 2 },
                    },
                    "& .MuiOutlinedInput-input": {
                        // ✅ Centramos el texto si hay altura personalizada
                        padding: customHeight ? "0 14px" : "16px 14px",
                        height: customHeight ? "100%" : "auto",
                        fontSize: 14,
                        boxSizing: "border-box",
                    },
                }}
            />
        </Box>
    );
};