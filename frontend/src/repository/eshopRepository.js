import {secondInstance as axios} from "../custom-axios/axios";

const EShopService = {
    fetchCountries: () => {
        return axios.get("/countries");
    },
    addCountry: (name, continent) => {
        return axios.post("/countries/add", {
            "name": name,
            "continent": continent
        });
    },
    fetchHosts: () => {
        return axios.get("/hosts");
    },
    addHost: (name, surname, country) => {
        return axios.post("/hosts/add", {
            "name": name,
            "surname": surname,
            "country": country
        });
    },
    fetchAccommodations: () => {
        return axios.get("/accommodations");
    },
    addAccommodation: (name, category, host, numRooms) => {
        return axios.post("/accommodations/add",{
            "name": name,
            "category": category,
            "host": host,
            "numRooms": numRooms
        });
    },
    editAccommodation: (id, name, category, host, numRooms) => {
        return axios.put(`/accommodations/edit/${id}`,{
            "name": name,
            "category": category,
            "host": host,
            "numRooms": numRooms
        });
    },
    deleteAccommodation: (id) => {
        return axios.delete(`/accommodations/delete/${id}`);
    },
    getAccommodation: (id) => {
        return axios.get(`/accommodations/${id}`);
    },
    rentAccommodation: (id) => {
        return axios.put(`/accommodations/rent/${id}`);
    },
    getCategories: () => {
        return axios.get("/categories");
    }
}

export default EShopService;