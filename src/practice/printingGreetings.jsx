import { useState } from "react";

function PrintingGreetings() {
    const [greeting, setGreeting] = useState("Hello");
    const [name, setName] = useState("World");

    return (
        <div>
            <p>{greeting}, {name}!</p>
            <input
                type="text"
                value={greeting}
                onChange={(e) => setGreeting(e.target.value)}
                placeholder="Enter greeting"
            />
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />
        </div>
    );
}

export default PrintingGreetings;