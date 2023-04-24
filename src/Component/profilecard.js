import './profilecard.css'


export function Profile(props) {
    const { name, designation, jobDiscription, image, } = props

    function Buttonclick() {
        alert('Saurabh Sakhare')
    }

    return (
        <div className='div'>
            <div className='text' >
                <img src={image} />
                <h3 className='head'>{designation}</h3>
                <h1 className='head1'>{name}</h1>
                <p className='para'>{jobDiscription}</p>
                <button className={props.externalClassName || 'btn'}
                    onClick={props.onClickFunction || Buttonclick}
                    style={props.buttonStyle}>SeeMore</button>
            </div>
        </div>
    )

}