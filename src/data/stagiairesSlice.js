import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stagiaires : [
        
    ]
}

const stagairesSlice = createSlice({
    name: "stagiaires",
    initialState,
    reducers: {
        addStagiaire: (state, action) => {
            state.stagiaires.push(action.payload);
        },
        deleteStagiaire: (state, action) => {
            const { id } = action.payload;
            const updatedStagiaires = state.stagiaires.filter((stagiaire) => stagiaire.id !== id);
            state.stagiaires = updatedStagiaires;
        },
        updateStagiaire: (state, action) => {
            const { id, nom, prenom, age } = action.payload;
        
            // Utilisez map pour mettre à jour le stagiaire spécifique
            state.stagiaires = state.stagiaires.map((stagiaire) =>
                stagiaire.id === id ? { ...stagiaire, nom, prenom, age } : stagiaire
            );
        },
    },
});
  
export const { addStagiaire, deleteStagiaire, updateStagiaire} = stagairesSlice.actions;
export default stagairesSlice.reducer;
  