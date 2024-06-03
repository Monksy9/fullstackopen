const Content = (props) => {
    const contents = props.parts

    return (
        <div> 
            {contents.map(content => <p key={content.id}> {content.name} {content.exercises} </p>)}
        </div>
    )
}

export default Content