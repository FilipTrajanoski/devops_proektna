import {firstInstance, secondInstance} from "../custom-axios/axios";

const EShopService = {
    fetchCountries: () => {
        return firstInstance.get("/countries")
            .catch(() => secondInstance.get("/countries"));
    },
    addCountry: (name, continent) => {
        return firstInstance.post("/countries/add", {
            "name": name,
            "continent": continent
        }).catch(() => secondInstance.post("/countries/add", {
            "name": name,
            "continent": continent
        }));
    },
    fetchHosts: () => {
        return firstInstance.get("/hosts")
            .catch(() => secondInstance.get("/hosts"));
    },
    addHost: (name, surname, country) => {
        return firstInstance.post("/hosts/add", {
            "name": name,
            "surname": surname,
            "country": country
        }).catch(() => secondInstance.post("/hosts/add", {
            "name": name,
            "surname": surname,
            "country": country
        }));
    },
    fetchAccommodations: () => {
        return firstInstance.get("/accommodations")
            .catch(() => secondInstance.get("/accommodations"));
    },
    addAccommodation: (name, category, host, numRooms) => {
        return firstInstance.post("/accommodations/add", {
            "name": name,
            "category": category,
            "host": host,
            "numRooms": numRooms
        }).catch(() => secondInstance.post("/accommodations/add", {
            "name": name,
            "category": category,
            "host": host,
            "numRooms": numRooms
        }));
    },
    editAccommodation: (id, name, category, host, numRooms) => {
        return firstInstance.put(`/accommodations/edit/${id}`, {
            "name": name,
            "category": category,
            "host": host,
            "numRooms": numRooms
        }).catch(() => secondInstance.put(`/accommodations/edit/${id}`, {
            "name": name,
            "category": category,
            "host": host,
            "numRooms": numRooms
        }));
    },
    deleteAccommodation: (id) => {
        return firstInstance.delete(`/accommodations/delete/${id}`)
            .catch(() => secondInstance.delete(`/accommodations/delete/${id}`));
    },
    getAccommodation: (id) => {
        return firstInstance.get(`/accommodations/${id}`)
            .catch(() => secondInstance.get(`/accommodations/${id}`));
    },
    rentAccommodation: (id) => {
        return firstInstance.put(`/accommodations/rent/${id}`)
            .catch(() => secondInstance.put(`/accommodations/rent/${id}`));
    },
    getCategories: () => {
        return firstInstance.get("/categories")
            .catch(() => secondInstance.get("/categories"));
    }
}

export default EShopService;