
const University = (props) => {
    const {name, web_pages } = props


    return(
        <div>
            <a href={web_pages[0]}>{name}</a>
            <hr></hr>
        </div>
    )


}

export default University