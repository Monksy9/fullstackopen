const Persons = (props) => {

    const list_of_persons = props.persons
    const searchString = props.search.toLowerCase()

    const containsSearch = (name) => name.toLowerCase().includes(searchString);
    const new_list = list_of_persons.filter(person => containsSearch(person.name))

    return (
        <div>
        <ul>
            {new_list.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
        </ul>
        </div>
    )

};

export default Persons;