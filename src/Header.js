import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    return(
        <header className="head">
            <h1>{props.title}</h1>
            <div className='button'>
            {/* <Button text='10-bit'/>
            <Button text='13-bit'/> */}
            </div>
        </header>
    )
}
Header.defaultProps = {
    title:'Example'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header