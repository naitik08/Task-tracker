import propTypes from 'prop-types'
import Button from './Button';

const Header = ({ title , onAdd , changeBtn }) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={ changeBtn ? 'green' : 'black' } text={ changeBtn ? 'Hide' : 'Show' } onClick={ onAdd }/>
        </header>
    )
}

Header.defaultProps = ({
    title :'Task Tracker',
})
Header.protoTypes = {
    title : propTypes.string,
}
export default Header
