import React from 'react';
import {useNavigate} from 'react-router-dom';

const AccommodationEdit = (props) => {

    const history = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: "",
        host: 0,
        numRooms: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.accommodation.name;
        const category = formData.category !== "" ? formData.category : props.accommodation.category;
        const host = formData.host !== 0 ? formData.host : props.accommodation.host.id;
        const numRooms = formData.numRooms !== 0 ? formData.numRooms : props.accommodation.numRooms;

        props.onEditAccommodation(props.accommodation.id, name, category, host, numRooms);
        history("/accommodations")
    }

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Accommodation name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.accommodation.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) => {
                                    if (props.accommodation.category !== undefined && props.accommodation.category === term)
                                        return <option selected={props.accommodation.category}
                                                       value={term}>{term}</option>
                                    else return <option value={term}>{term}</option>
                                }
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Host</label>
                        <select name="host" className="form-control" onChange={handleChange}>
                            {props.hosts.map((term) => {
                                    if (props.accommodation.host !== undefined && props.accommodation.host.id === term.id)
                                        return <option selected={props.accommodation.host.id}
                                                       value={term.id}>{term.name}</option>
                                    else return <option value={term.id}>{term.name}</option>
                                }
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="numRooms">Number of rooms</label>
                        <input type="number"
                               className="form-control"
                               id="numRooms"
                               name="numRooms"
                               placeholder={props.accommodation.numRooms}
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AccommodationEdit;