import { useEffect,useState } from "react";
import axios from "axios";

function App(){

const [employees,setEmployees] = useState([]);

useEffect(()=>{
    fetchEmployees();
},[]);

const fetchEmployees = async()=>{

const result = await axios.get(
"http://localhost:5000/employees"
);

setEmployees(result.data);

};

return(
<div style={{padding:"20px"}}>

<h1>Employee Portal</h1>

<table border="1">
<thead>
<tr>
<th>ID</th>
<p>Iam Shivam Upadhyay</p>
<th>Name</th>
<th>Department</th>
<th>Salary</th>
</tr>
</thead>

<tbody>
{
employees.map(emp=>(
<tr key={emp.id}>
<td>{emp.id}</td>
<td>{emp.name}</td>
<td>{emp.department}</td>
<td>{emp.salary}</td>
</tr>
))
}
</tbody>

</table>

</div>
);
}

export default App;