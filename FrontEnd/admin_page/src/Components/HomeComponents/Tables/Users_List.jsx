import React, {useEffect, useState} from 'react'


function Users_List() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/api/UserView")
          .then((res) => res.json())
          .then((result) => {
            setUsers(result);
            console.log(result);
          })
          .catch((error) => {
            setError("Failed to fetch tournaments.");
          });
      }, []);
  return (
    <div class="col-6">
    <div class="bg-secondary rounded h-100 p-4">
        <h6 class="mb-4">USERS LIST</h6>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        
                        <th scope="col">Email</th>
                        <th scope="col">Usertype</th>
                        <th scope="col">Joined Date</th>
                        
                    </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr>
                          <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.usertype}</td>
                        <td>{user.created_at}</td>
                        
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

export default Users_List