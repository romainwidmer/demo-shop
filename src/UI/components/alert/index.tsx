type Props = {
    type?: string,
    message: string
}

const Alert = ({ type = 'info', message }:Props) => (
    <div className={`custom-alert ${type}`}>
        <p className={'no-margin'}>{ message }</p>
    </div>
)

export default Alert
