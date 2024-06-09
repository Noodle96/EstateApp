import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';

function HomePage() {
    return (
        <div className='homepage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>
                       CachinaPe: The best Place to find your dream home
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Minus praesentium vel sapiente, commodi, corrupti dolorem
                        accusamus earum suscipit facere doloremque molestiae.
                        Aperiam vero, quidem laudantium labore amet blanditiis 
                        illum dolorem.
                    </p>
                    <SearchBar /> 
                    <div className="boxes">
                        <div className="box">
                            <h1>Abc</h1>
                            <h2>Lorem ipsum</h2>
                        </div>
                        <div className="box">
                            <h1>Abc</h1>
                            <h2>Lorem ipsum</h2>
                        </div>
                        <div className="box">
                            <h1>Abc</h1>
                            <h2>Lorem ipsum</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="background image" />
            </div>
        </div>
    )
}

export default HomePage