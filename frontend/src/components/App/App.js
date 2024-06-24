import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import EShopService from "../../repository/eshopRepository";
import Countries from "../Countries/CountryList/countries";
import Hosts from "../Hosts/HostList/hosts";
import CountryAdd from "../Countries/CountryAdd/countryAdd";
import HostAdd from "../Hosts/HostAdd/hostAdd";
import Header from "../Header/header";
import Accommodations from "../Accommodations/AccommodationList/accommodations";
import AccommodationAdd from "../Accommodations/AccommodationAdd/accommodationAdd";
import AccommodationEdit from "../Accommodations/AccommodationEdit/accommodationEdit";
import Categories from "../Categories/categories";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            hosts: [],
            accommodations: [],
            categories: [],
            selectedAccommodation: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className={"container"}>
                        <Routes>
                            <Route path={"/countries/add"} element={<CountryAdd onAddCountry={this.addCountry}/>}/>
                            <Route path={"/accommodations/add"}
                                   element={<AccommodationAdd categories={this.state.categories}
                                                              hosts={this.state.hosts}
                                                              onAddAccommodation={this.addAccommodation}/>}/>
                            <Route path={"/hosts/add"}
                                   element={<HostAdd countries={this.state.countries} onAddHost={this.addHost}/>}/>

                            <Route path={"/accommodations/edit/:id"}
                                   element={<AccommodationEdit categories={this.state.categories}
                                                               hosts={this.state.hosts}
                                                               onEditAccommodation={this.editAccommodation}
                                                               accommodation={this.state.selectedAccommodation}/>}/>

                            <Route path={"/countries"} element={<Countries countries={this.state.countries}/>}/>
                            <Route path={"/categories"} element={<Categories categories={this.state.categories}/>}/>
                            <Route path={"/hosts"} element={<Hosts hosts={this.state.hosts}/>}/>
                            <Route path={"/accommodations"}
                                   element={<Accommodations accommodations={this.state.accommodations}
                                                            onEdit={this.getAccommodation}
                                                            onDelete={this.deleteAccommodation}
                                                            onRent={this.rentAccommodation}/>}/>

                            <Route path={"*"} element={<Accommodations accommodations={this.state.accommodations}/>}/>
                        </Routes>
                    </div>
                </main>
            </Router>
        )
    }

    componentDidMount() {
        this.loadCountries();
        this.loadHosts();
        this.loadAccommodations();
        this.loadCategories();
    }

    loadCountries = () => {
        EShopService.fetchCountries()
            .then((data) => {
                this.setState({
                    countries: data.data
                })
            });
    }

    addCountry = (name, continent) => {
        EShopService.addCountry(name, continent)
            .then(() => {
                this.loadCountries();
            })
    }

    loadHosts = () => {
        EShopService.fetchHosts()
            .then((data) => {
                this.setState({
                    hosts: data.data
                })
            })
    }

    addHost = (name, surname, country) => {
        EShopService.addHost(name, surname, country)
            .then(() => {
                this.loadHosts();
            })
    }

    loadAccommodations = () => {
        EShopService.fetchAccommodations()
            .then((data) => {
                this.setState({
                    accommodations: data.data
                })
            })
    }

    addAccommodation = (name, category, host, numRooms) => {
        EShopService.addAccommodation(name, category, host, numRooms)
            .then(() => {
                this.loadAccommodations();
            })
    }

    editAccommodation = (id, name, category, host, numRooms) => {
        EShopService.editAccommodation(id, name, category, host, numRooms)
            .then(() => {
                this.loadAccommodations();
            })
    }

    deleteAccommodation = (id) => {
        EShopService.deleteAccommodation(id)
            .then(() => {
                this.loadAccommodations();
            })
    }

    rentAccommodation = (id) => {
        EShopService.rentAccommodation(id)
            .then(() => {
                this.loadAccommodations();
            })
    }

    getAccommodation = (id) => {
        EShopService.getAccommodation(id)
            .then((data) => {
                this.setState({
                    selectedAccommodation: data.data
                })
            })
    }

    loadCategories = () => {
        EShopService.getCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            })
    }
}

export default App;
