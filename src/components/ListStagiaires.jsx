import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteStagiaire } from '../data/stagiairesSlice';
import { Link } from 'react-router-dom';

export default function ListStagiaires(props) {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(
            deleteStagiaire({ id })
        );
    }

    return (
        <div className="col-md-8">
            <h2 className='text-center alert alert-info mb-4'>Liste des stagiaires</h2>
            {props.stagiaires && props.stagiaires.length === 0 ? 
            (<p className='text-center'>Pas de stagiaires à afficher !</p>) : 
            (
                <div className="row">
                    {props.stagiaires &&
                        props.stagiaires.map((item) => (
                        <div key={item.id} className="col-md-4 mb-4 text-center">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                    {item.nom.toUpperCase()}{' '}
                                    {item.prenom.charAt(0).toUpperCase() + item.prenom.slice(1).toLowerCase()}
                                    </h5>
                                    <p className="card-text">{item.age} ans</p>
                                    <Link  to={`/edit/${item.id}`} className="btn btn-warning me-1 btn-sm">
                                        Modifier
                                    </Link>
                                    <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm">Supprimer</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
