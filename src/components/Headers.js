/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import Button from './Button'


const Headers = ({title}) => {

  const onClick = () => {
    console.log('Click');
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick = {onClick}/>
    </header>
  )
}

Headers.defaultProps = {
    title: 'Task Tracker',
}

Headers.protoTypes = {
    title: PropTypes.string.isRequired,
}
//CSS in JS
const headingStyle = {
    color: 'red', backgroundColor: 'black'
}

export default Headers
