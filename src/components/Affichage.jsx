import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStagiaire} from '../data/stagiairesSlice';
import { v4 as uuidv4 } from "uuid";
import ListStagiaires from './ListStagiaires';

export default function Affichage() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [age, setAge] = useState(0);
    const stagiaires = useSelector(state => state.stagiaires.stagiaires);
    const dispatch = useDispatch();

    const handleAddStagiaire = () => {
        dispatch(
        addStagiaire({
            id: uuidv4(),
            nom,
            prenom,
            age
        })
        );
        setNom("");
        setPrenom("");
        setAge(0);
    }

    return (
        <div className="container mt-4">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                    <h2 className="card-title text-center mb-4">Ajouter un stagiaire</h2>
                    <div className="form-group">
                        <label htmlFor="nom">Nom :</label>
                        <input
                        type="text"
                        className="form-control"
                        id="nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        placeholder="Entrer votre nom ici"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom">Prénom :</label>
                        <input
                        type="text"
                        className="form-control"
                        id="prenom"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        placeholder="Entrer votre prénom ici"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Âge :</label>
                        <input
                        type="number"
                        className="form-control"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <br />
                    <button onClick={handleAddStagiaire} className="btn btn-primary mx-auto d-block btn-block">
                        Ajouter
                    </button>
                    </div>
                </div>
            </div>
            <ListStagiaires stagiaires={stagiaires}/>
            
        </div>
        </div>
    );
}
