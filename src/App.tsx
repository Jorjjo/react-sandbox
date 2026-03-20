// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { OnOff } from './components/OnOff/OnOff';
import { Rating } from './components/Rating/Rating';
import UncontrolledAccordiondion from './components/Accordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/Rating/UncontrolledRating';

// function declaration. Но функцию можно определить любым способом:
// function expression (const App = function(){return})
// стрелочная функция (const App = () => {return})
// стрелочная функция используется для обработчиков событий, а function declaration для объявлений компонет
function App() {
    // функция делает что-то полезное --->

    // const [isOn, setIsOn] = useState(false)

    // обязана вернуть JSX (то, что выглядить как html это JSX)
    return (
        <div>
            <PageTitle title={'This is APP component'} />
            {/* <PageTitle title={'My Friends'} />
            Article 1
            <Rating value={3} />
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false} />
            Article 2 */}
            {/* <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} /> */}
            <UncontrolledRating />
            {/* <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating /> */}
            <OnOff />
            <OnOff />
            <UncontrolledAccordiondion titleValue={'Menu'} />
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
};

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>;
}

export default App;

// Компонент это функция которая объявлена с Большой буквы, эта функция принимает объект(props) и на основе этого объекта props возвращает jsx разметку. Компоненты позволяют дробить приложение на семантические блоки.
