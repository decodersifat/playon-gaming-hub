import { useState, useEffect } from "react";
import axios from "axios";

const useGame = () => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const [games, setGames] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                setLoading(true);
                const response = await axios.get('/games-data.json');
                setGames(response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                await delay(2000); 
                setLoading(false);
            }
        };

        fetchGames();
    }, []);

    return { games, loading, error };
};

export default useGame;