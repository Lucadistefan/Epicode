export default function Hero(props) {
    return (
        <div className="row">
            <div className="col-lg-12">{ props.hero.name } - { props.hero.lifePoints }</div>
            <div className="col-lg-12">
                <img src={props.hero.img} alt="Hero" />
            </div>
            <div className="col-lg-12">
                <button
                    className="btn btn-primary"
                    disabled={props.cantAttack || props.hero.lifePoints <= 0}
                    onClick={() => props.onAttack(props.hero)}
                >Attack</button>
            </div>
        </div>
    );
}