// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { UncontrolledOnOff } from './components/OnOff/UncontrolledOnOff';
import { Rating, type RatingValue } from './components/Rating/Rating';
import UncontrolledAccordiondion from './components/Accordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/Rating/UncontrolledRating';
import { OnOff } from './components/OnOff/OnOff';

// function declaration. Но функцию можно определить любым способом:
// function expression (const App = function(){return})
// стрелочная функция (const App = () => {return})
// стрелочная функция используется для обработчиков событий, а function declaration для объявлений компонет
function App() {
    // функция делает что-то полезное --->

    // const [isOn, setIsOn] = useState(false)

    // обязана вернуть JSX (то, что выглядить как html это JSX)
    const [rating, setRating] = useState<RatingValue>(0);

    const [accordionCollapsed, setAccordionCollapsed] = useState(false);

    const [isOn, setIsOn] = useState(false);
    return (
        <div className={'App'}>
            <PageTitle title={'This is APP component'} />
            {/* <PageTitle title={'My Friends'} /> */}
            {/* <Rating value={3} /> */}
            {/* <Accordion titleValue={'Users'} collapsed={false} /> */}
            <Rating onClick={setRating} value={rating} />
            <UncontrolledRating />
            <OnOff setIsOn={setIsOn} isOn={isOn} />
            <UncontrolledOnOff onChange={setIsOn} /> {isOn.toString()}
            <Accordion
                titleValue={'Tasks'}
                collapsed={accordionCollapsed}
                setAccordionCollapsed={() => {
                    setAccordionCollapsed(!accordionCollapsed);
                }}
            />
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
