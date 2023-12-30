import { configureStore } from "@reduxjs/toolkit";
import stagiaireReducer from "./stagiairesSlice";

export const store = configureStore({
    reducer : {
        stagiaires : stagiaireReducer
    }
})