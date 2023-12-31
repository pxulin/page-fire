import { useState } from "react";
import { PostAuth } from "../../context/PostContext";

import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function Home() {
    const { posts } = PostAuth();
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 1000);

    return (

        < main className="container" >
            <br />
            <h1>Inicio.</h1>
            <br />
            {
                loading ? (
                    <div style={{ width: "100%", marginTop: '2rem' }}>
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={12} />
                        </Placeholder>
                        <Placeholder as="p" animation="wave">
                            <Placeholder xs={12} />
                        </Placeholder>
                    </div>)
                    : (<div>
                        {posts.map((post, i) => (
                            <Card key={i} style={{ width: "100%", marginTop: '2rem' }}>
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center gap-2">
                                    <div className="d-flex flex-column w-100 rounded border-1 border p-4">
                                        <Card.Subtitle className="mb-2 text-muted"><b>{post.title}</b></Card.Subtitle>
                                        <Card.Text className="d-flex align-items-center">{post.desc}</Card.Text>
                                        <Card.Text className="d-flex align-items-center">Enviado por<b style={{ paddingLeft: '0.4rem' }}>{post.currentUser}</b></Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>)
            }
        </main >
    );
}

export default Home;



