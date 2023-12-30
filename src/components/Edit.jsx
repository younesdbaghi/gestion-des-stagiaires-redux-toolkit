import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateStagiaire } from '../data/stagiairesSlice';

export default function Edit() {
    const { id } = useParams();
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [age, setAge] = useState(0);

    const stagiaires = useSelector(state => state.stagiaires.stagiaires);
    const dispatch = useDispatch();
    const history = useNavigate();

    useEffect(() => {
        const selectedStagiaire = stagiaires.find((item) => item.id === id);
        setNom(selectedStagiaire.nom);
        setPrenom(selectedStagiaire.prenom);
        setAge(selectedStagiaire.age);
    }, [id, stagiaires]);

    const handleUpdate = () => {
        dispatch(
            updateStagiaire({
                id,
                nom,
                prenom,
                age,
            })
        );
        setNom("");
        setPrenom("");
        setAge("");
        history("/");
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Modifier un stagiaire</h2>
                    <div className="mb-3">
                        <label htmlFor="nom" className="form-label">Nom :</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nom"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            placeholder="Entrer votre nom ici"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="prenom" className="form-label">Prénom :</label>
                        <input
                            type="text"
                            className="form-control"
                            id="prenom"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                            placeholder="Entrer votre prénom ici"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Âge :</label>
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <button onClick={handleUpdate} className="btn btn-primary">
                        Modifier
                    </button>
                </div>
            </div>
        </div>
    )
}
