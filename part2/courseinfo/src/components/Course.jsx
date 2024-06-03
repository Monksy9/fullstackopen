import Header from "./Header"
import Content from "./Content"
import Totals from "./Total";

const Course = (props) => {

  var course = props.course

  return (
    <div key={course.id}>
      <Header header_name={course.name}/>
      <Content parts = {course.parts}/>
      <Totals course={course}></Totals>
    </div>)
};

// const Course = (props) => {


//   return (
//     <div>
//       <Header header_name={props.course.name}/>
//       <Content parts = {props.course.parts}/>
//     </div>
//   );
// };

// export default Course;

export default Course;