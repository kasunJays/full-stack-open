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

  const part1 ={
    name:'Fundamentals of React',
    excersie:10
  }

  const part2 ={
    name:'Using props to pass data',
    excersie:7
  }

  const part3 ={
    name:'State of a component',
    excersie:14
  }

  return (
    <div>
      <Header course={course} />
      <p>{part1.name} {part1.excersie}</p>
      <p>{part2.name} {part2.excersie}</p>
      <p>{part3.name} {part3.excersie}</p>
      <Total exercises={[part1.excersie, part2.excersie, part3.excersie]} />

    </div>
  )
}

export default App
