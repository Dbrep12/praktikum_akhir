import React, { useEffect, useState } from "react"

export function MyComponent() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("http://belajaroracle.com/api/hrapi/employees/read.php")
        .then(response => response.json())
        .then(json => setData(json))
    }, [])

    if (!data) {
    return <p>Loading...</p>
    }
    return (
        <div className="ApiContainer">
            <ul>
                {data.map(item => (
                <li key={item.EMPLOYEE_ID}>{item.FIRST_NAME} {item.LAST_NAME}</li>
                ))}
            </ul>
        </div>
    )
}
export default MyComponent