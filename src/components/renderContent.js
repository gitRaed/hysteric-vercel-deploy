import { CartPage } from './content/cartPage';
import { Homepage } from './content/homepage';
import { Tshirts } from './content/tshirts';
import { Hoodies } from './content/hoodies';
import { Prints } from './content/prints';
import { Others } from './content/others';
import { AboutPage } from './content/aboutPage';
import { ArticlePage } from './content/articlePage';
import { ErrorPage } from './content/errorPage';


export function RenderContent(props) {

    let content;
    let { number, setDisplay, cart, setCart } = props;

    switch(number) {
        case 0:
            content = <CartPage cart={cart} setCart={setCart} setDisplay={setDisplay}/>
        break;
        case 1: 
            content = <Homepage setDisplay={setDisplay}/>
        break;
        case 2: 
            content = <Tshirts setDisplay={setDisplay}/>
        break;
        case 3: 
            content = <Hoodies setDisplay={setDisplay}/>
        break;
        case 4: 
            content = <Prints setDisplay={setDisplay}/>
        break;
        case 5: 
            content = <Others setDisplay={setDisplay}/>
        break;
        case 6: 
            content = <AboutPage />
        break;
        case 7:
            content = <ArticlePage setDisplay={setDisplay} cart={cart} setCart={setCart}/>
        break;
        default: 
            content = <ErrorPage setDisplay={setDisplay}/>
        break;
    };

    return content;
};