const Details = ({detailsdata}) => {
    return(
            <table className="table">
                <thead>
                    <tr>
                        <td>ID</td>
              
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        
                    </tr>
                </thead>
                <tbody>
                {
                    detailsdata.map((item=>(
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.avatar}</td>
                     
                    </tr>
                    )))
                    }
                    
                </tbody>
            </table>
    )
}

export default Details;