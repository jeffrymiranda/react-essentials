//Option #1
/*function CoreConcept(props) {
    return (
        <li>
            <img src={props.image} alt={props.title}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
}*/

//Option #2
/*function CoreConcept({image, title, description}) {
    return (
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}*/

//Option #3
/*function CoreConcept({...concept}) {
    return (
        <li>
            <img src={concept.image} alt={concept.title}/>
            <h3>{concept.title}</h3>
            <p>{concept.description}</p>
        </li>
    );
}*/

//Option #4
function CoreConcept({concept}) {
    const {title, description, image} = concept
    return (
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

export default CoreConcept;
