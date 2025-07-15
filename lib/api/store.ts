import { Store } from "@/schemas/Store";
import api from "../axios"

export const fetchAllStores = async ():Promise<Store[]> => {
    const res = await api.get("/stores");
    return res.data;
}