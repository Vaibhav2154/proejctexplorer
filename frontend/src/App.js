import React, { useState, useEffect } from 'react';
import RepoList from './components/RepoList';

const App = () => {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/repositories')
            .then(response => response.json())
            .then(data => setRepositories(data));
    }, []);

    return (
        <div>
            <h1>Open Source Project Explorer</h1>
            <RepoList repositories={repositories} />
        </div>
    );
};

export default App;
