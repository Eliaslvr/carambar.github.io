import React, { useState } from 'react';
import "./Main.css";
import jokes from "../joke.json";

const Main = () => {
    const [currentJoke, setCurrentJoke] = useState(null); // Blague actuelle
    const [showJoke, setShowJoke] = useState(false);      // État pour contrôler la visibilité de la réponse

    const getRandomJoke = () => {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        setCurrentJoke(jokes[randomIndex]);
        setShowJoke(false); // Réinitialise l'affichage de la réponse lors d'une nouvelle blague
    };

    const toggleJoke = () => {
        setShowJoke(!showJoke); // Change la visibilité de la réponse
    };

    return (
        <div className='main'>
            <div>
                {currentJoke === null ? (
                    <div className='joke'>
                        <span>Cliquez sur le bouton pour voir une blague!</span>
                        <button className='buttonBeforeJoke' onClick={getRandomJoke}>Nouvelle blague</button>
                    </div>
                ) : (
                    <div>
                        <div className='joke'>
                            <span>{currentJoke.joke}</span>
                            {showJoke && <span className='spanResponse'>{currentJoke.response}</span>} {/* Affiche la réponse seulement si showJoke est vrai */}
                        </div>
                        <div className='button'>
                            <button className='buttonResponse' onClick={toggleJoke}>
                                {showJoke ? "Cacher la réponse" : "Afficher la réponse"} {/* Change le texte du bouton */}
                            </button>
                            <button className='buttonJoke' onClick={getRandomJoke}>Nouvelle blague</button>
                        </div>
                    </div>
                )
                }
            </div>
        </div>

    );
};

export default Main;
