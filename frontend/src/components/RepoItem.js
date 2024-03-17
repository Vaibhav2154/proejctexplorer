import React from 'react';

const RepoItem = ({ repo }) => {
    return (
        <div>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <p>Stars: {repo.stargazers_count}</p>
        </div>
    );
};

export default RepoItem;
