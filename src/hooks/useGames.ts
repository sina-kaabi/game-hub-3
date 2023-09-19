import { useEffect, useState } from "react";
import axios from 'axios';
import GameGrid from "../components/GameGrid";
import apiClient from "../services/api-client";
import {CanceledError} from 'axios';

interface Game {
    id: number;
    name: string;
  }


  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {

    
        const [games, setGames] = useState<Game[]>([]);
        const [error, setError] = useState("");
        const [isLoading, setLoading] = useState(false);
      
        useEffect(() => {
        const controller = new AbortController();    


        setLoading(true);
          apiClient
            .get<FetchGamesResponse>("/games", {signal: controller.signal})
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

            return () => controller.abort();

        }, []);


        return { games, error, isLoading, setGames, setError};
}

export default useGames;