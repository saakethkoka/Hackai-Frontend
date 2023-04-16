import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const InitialPromptBox = ({ onTextSubmit }) => {
    const [inputText, setInputText] = useState("");
    const [isImmutable, setIsImmutable] = useState(false);

    const handleInputChange = (event) => {
        if (!isImmutable) {
            setInputText(event.target.value);
        }
    };

    const handleSubmit = () => {
        onTextSubmit(inputText);
        setIsImmutable(true);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "70%",
                margin: "auto",
            }}
        >
            <TextField
                label="Enter text"
                value={inputText}
                onChange={handleInputChange}
                fullWidth
                disabled={isImmutable}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                sx={{ ml: 2 }}
                disabled={isImmutable}
            >
                Submit
            </Button>
        </Box>
    );
};


