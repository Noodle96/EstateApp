import './homePage.scss';

function HomePage() {
    return (
        <div className='homepage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1>
                        La web peruana más grande de ropa de segunda mano seleccionada
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Minus praesentium vel sapiente, commodi, corrupti dolorem
                        accusamus earum suscipit facere doloremque molestiae.
                        Aperiam vero, quidem laudantium labore amet blanditiis 
                        illum dolorem.
                    </p>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="background image" />
            </div>
        </div>
    )
}

export default HomePage