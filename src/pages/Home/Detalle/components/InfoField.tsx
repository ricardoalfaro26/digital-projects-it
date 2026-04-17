import { Box, Typography } from "@mui/material";

interface Props {
    label: string;
    value: string | number;
    highlight?: boolean;
}

export const InfoField = ({ label, value, highlight }: Props) => (
    <Box sx={{ mb: 2.5 }}>
        <Typography 
            variant="caption" 
            sx={{ 
                color: 'text.secondary', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                letterSpacing: 0.8,
                fontSize: 10
            }}
        >
            {label}
        </Typography>
        <Typography 
            variant="body2" 
            sx={{ 
                fontWeight: 600, 
                color: highlight ? '#F58025' : '#1F2937', 
                mt: 0.5,
                fontSize: 14
            }}
        >
            {value || "—"}
        </Typography>
    </Box>
);