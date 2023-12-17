function DisplayContacts(props) {

    return (
        <div>
            <h1>Name: {props.contactData.name}</h1>
            <h1>Email: {props.contactData.email}</h1>
            <h1>Message: {props.contactData.message}</h1>
        </div>
    )
}

export default DisplayContacts;