import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Itemview.css';
import '../../App.css';

export default function ItemView() {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const params = useParams();
    useEffect(() => {
        const fetchItem = async () => {
            try {
                setLoading(true)
                const res = await fetch(`/api/items/get/${params.itemid}`);
                const data = await res.json();
                if (data.success === false) {
                    setError(true);
                    setLoading(false);
                    return;
                }
                setItem(data);
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }
        fetchItem()
    }, [params.itemid]
    );
    return <div>
        {loading && <p>Loading...</p>}
        {item && item.name}
        {error && <p>An issue occurred, please try again</p>}
        {item && !loading && !error && (
            <p>Item data to appear here</p>
        )}

    </div>
}
