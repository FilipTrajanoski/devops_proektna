import React from "react";
import {Link} from "react-router-dom";

const accommodationTerm = (props) => {

    return (
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.category}</td>
            <td scope={"col"}>{props.term.host.name}</td>
            <td scope={"col"}>{props.term.numRooms}</td>
            <td scope={"col"} className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger mx-1"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2 mx-1"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/accommodations/edit/${props.term.id}`}>
                    Edit
                </Link>
                <Link className={"btn btn-outline-primary ml-2 mx-1"}
                      onClick={() => props.onRent(props.term.id)}
                      to={"/accommodations"}>
                    Rent
                </Link>
            </td>
        </tr>
    );
}

export default accommodationTerm;