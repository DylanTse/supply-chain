import "./joinDatabase.scss"

export default function JoinDatabase() {
    return (
        <div className="join">
            <div className="left">
                <h1>Join Database</h1>
                <p>
                Join the database that the other party has set up here. Any changes to the database will notify
                everyone with access to it. Enter a valid unique ID in order to be added to a database. 
                </p>
                <textarea maxlength="100" cols="100" placeholder="Enter Database's Unique User ID"></textarea>
                <br/>
                <button>Request Access</button>
                <p>Current Databases</p>
                <p>Divide this into archived and active databases until order finished</p>
            </div>
        </div>
    )
}