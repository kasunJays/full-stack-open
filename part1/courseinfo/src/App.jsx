const Header = (props) => {

  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {

  return (
    <div>
      <Part part={props.contents[0].part} excersie={props.contents[0].excersie}/>
      <Part part={props.contents[1].part} excersie={props.contents[1].excersie}/>
      <Part part={props.contents[2].part} excersie={props.contents[2].excersie}/>
    </div>
  )
}

const Part = (props) => {

  return (
    <p>{props.part} {props.excersie}</p>
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
      <Total exercises={[contents[0].excersie, contents[1].excersie, contents[2].excersie]} />

    </div>
  )
}

export default App
