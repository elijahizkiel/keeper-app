function Footer(props){
    return (
        <footer className="footer">{`${props.text} ${props.year}`}</footer>
    );
}

export default Footer;