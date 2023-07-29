import axios from "axios";

export const imagesApi = axios.create({
  baseURL: 'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});