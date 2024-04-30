const Header = (props) => {

  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {

  return (
    <>
      <p>{props.contents[0].part} {props.contents[0].excersie}</p>
      <p>{props.contents[1].part} {props.contents[1].excersie}</p>
      <p>{props.contents[2].part} {props.contents[2].excersie}</p>
    </>
  )
}

const Total = (props) => {

  return (
    <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const contents = [
    { part: 'Fundamentals of React', excersie: 10 },
    { part: 'Using props to pass data', excersie: 7 },
    { part: 'State of a component', excersie: 14 }
  ]

  return (
    <div>
      <Header course={course} />
      <Content contents={contents} />
      <Total exercises={[contents[0].excersie, contents[1].excersie, , contents[2].excersie]} />

    </div>
  )
}

export default App
