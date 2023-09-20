import "../content/Container.css"
import { useQuery } from "@tanstack/react-query";
const apiUrl = "https://api.github.com/orgs/facebook/repos?per_page=5&page=1"


const MainContainer = () => {

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["facebookMembers"],
        queryFn: fetchFacebookMembers,
    })

    async function fetchFacebookMembers() {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw Error("Failed to connect to the API");
        }
        const data = await response.json();
        return data;
    }

    function arrayValidation(arr) {
        const noName = (element) => element.name
    }


    if (isLoading) {
        return <span className="loading">Loading...</span>
    }

    if (isError) {
        return <span className="error">Error: {error.message}</span>
    }

    return data.map(member => {
        if (!member.visibility || !member.description || !member.topics) {
            throw Error(`Incomplete data for ${data.name ? data.name : "Unknown"}`);
        }
        return <div className="main-container" key={member.id}>
            <h2>{member.name}</h2>
            <span>{member.visibility}</span>
            <p>{member.description}</p>
            <ul>{member.topics.map((topic, i) => <li
                key={i}>{topic}</li>)}</ul>
        </div>
    });
}

export default MainContainer;