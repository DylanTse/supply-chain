import "./joinDatabase.css"

export default function JoinDatabase() {
    return (
        <div className="join">
            <h1>Join Database</h1>
            <p>
            You will need to enter the unique ID that has been sent to you in order to be added to 
            the database.
            </p>
            <textarea placeholder="Enter Database's Unique User ID"></textarea>
            <button>Request Access</button>
        </div>
    )
}