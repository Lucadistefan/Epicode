export default function Alert(props) {
    const clName = `alert alert-${props.type}`;

    return (
        <div className={ clName }>{ props.message }</div>
    );
}