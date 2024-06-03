const Totals = (props) => {

    var course_parts = props.course.parts 

    // var total = 0
    // for (let index = 0; index < course_parts.length; index++) {
    //     total += course_parts[index].exercises
    // }

    var total = course_parts.reduce((accumulator, currentcourse) => {
        return accumulator + currentcourse.exercises
    }, 0)

    

    return (
        <div>
            <b> total of {total} exercises </b>
        </div>
    )
};

export default Totals;