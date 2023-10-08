import CompTest from "./CompTest";
import propTypes from 'prop-types'

const Student = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <CompTest name={props.name} />
    </>
  );
};

Student.propTypes ={
    name: propTypes.string,
    age: propTypes.number
}

Student.defaultProps={
    name:"Name",
    age:0
}

export default Student;
