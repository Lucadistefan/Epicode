import { useState } from "react";
import Hero from "../../models/Hero";
import HeroComponent from '../Hero/Hero';

export default function Arena(props) {
    const [hero1, setHero1] = useState(new Hero('Captain America', 150, 10));
    const [hero2, setHero2] = useState(new Hero('Iron Man', 120, 13));

    const onAttack = (hero) => {
        if (hero === hero1) {
            setHero2(Object.assign(new Hero(), hero2, {
                _lifePoints: hero2.lifePoints - hero1.attack
            }));
        } else {
            setHero1(Object.assign(new Hero(), hero1, {
                _lifePoints: hero1.lifePoints - hero2.attack
            }));
        }
    };

    return (
        <div className="row">
            <div className="col-lg-6">
                <HeroComponent cantAttack={hero2.lifePoints <= 0} hero={hero1} onAttack={onAttack} />
            </div>
            <div className="col-lg-6">
                <HeroComponent cantAttack={hero1.lifePoints <= 0} hero={hero2} onAttack={onAttack} />
            </div>
        </div>
    );
}