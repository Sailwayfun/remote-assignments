import "../content/Content.css"
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ViewMoreBtn from "./ui/ViewMoreBtn";



const Content = () => {
    const [page, setPage] = useState(0);
    const { isLoading, isError, data, error, isFetching, isPreviousData } = useQuery({
        queryKey: ["facebookMembers", page],
        queryFn: () => fetchFacebookMembers(page),
        keepPreviousData: true,
        staleTime: 60000
    })
    console.log("Query Data:", data);

    async function fetchFacebookMembers(page = 0) {
        const apiUrl = `https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw Error("Failed to connect to the API");
        }
        const data = await response.json();
        console.log("Fetched data from API:", data)
        return data;
    }


    function viewMore(event) {
        const hasMore = data?.length === 5;
        if (!isPreviousData && hasMore) {
            setPage(old => old + 1);
        }
        console.log("View more clicked");
        console.log(data);
        console.log(page);
    }

    if (isLoading) {
        return <span className="loading">Loading...</span>
    }

    if (isError) {
        return <span className="error">Error: {error.message}</span>
    }

    return <div>
        {data.map(member => {
            if (!member.visibility || !member.description || !member.topics) {
                throw Error(`Incomplete data for ${member.name ? member.name : "Unknown"}`);
            }
            return <div className="card" key={member.id}>
                <h2>{member.name}</h2>
                <span>{member.visibility}</span>
                <p>{member.description}</p>
                <ul>{member.topics.map((topic, i) => <li
                    key={i}>{topic}</li>)}</ul>
            </div>
        })}
        <ViewMoreBtn onClick={(event) => viewMore(event)} disabled={isPreviousData || !(data?.length === 5)}>
            More
        </ViewMoreBtn>
        {isFetching ? <span> Loading...</span> : null}{' '}
    </div>;
}

export default Content;