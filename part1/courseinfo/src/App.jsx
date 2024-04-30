const Header = (props) => {

  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {

  return (
    <div>
      <Part part={props.parts[0].name} excersie={props.parts[0].excersie}/>
      <Part part={props.parts[1].name} excersie={props.parts[1].excersie}/>
      <Part part={props.parts[2].name} excersie={props.parts[2].excersie}/>
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
    <p>Number of exercises {props.parts[0].excersie + props.parts[1].excersie + props.parts[2].excersie}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const parts =[{
    name:'Fundamentals of React',
    excersie:10
  },
  {
    name:'Using props to pass data',
    excersie:7
  },
  {
    name:'State of a component',
    excersie:14
  }]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts} />

    </div>
  )
}

export default App
