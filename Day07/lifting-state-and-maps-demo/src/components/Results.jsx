const Results = props => {
    return(
        <div>
            <h1>Results</h1>
            <table className="table table-striped">
                <tr>
                    <th>Name</th>
                    <th>Real Name</th>
                    <th>Power</th>
                    <th># of Sidekicks</th>
                    <th>Is Alive</th>
                    <th>Universe</th>
                </tr>
                {
                    props.allChars.map((character) => {
                        return <tr>
                            <td>{character.Name}</td>
                            <td>{character.RealName}</td>
                            <td>{character.Power}</td>
                            <td>{character.NumSidekicks}</td>
                            <td>{character.IsAlive ? "Yes" : "No"}</td>
                            <td>{character.Universe}</td>
                        </tr>
                    })
                }
            </table>
            
        </div>
    );
}

export default Results;