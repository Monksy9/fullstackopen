const Filter = (props) => {

    return (
        <div>
            Filter with <input value={props.searchValue} onChange={props.handleSearch} />
        </div>
    )
}
export default Filter;