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
            <div class='itemviewtextflex-container'>
                <div class="itemviewflex-container">
                    <div class="itemviewflex-item-left">Category:</div>
                    <div class="itemviewflex-item-right">item here</div>
                </div>


                <div class="itemviewflex-container">
                    <div class="itemviewflex-item-left">Event Date:</div>
                    <div class="itemviewflex-item-right">item here</div>
                </div>

                <div class="itemviewflex-container">
                    <div class="itemviewflex-item-left">Auction End:</div>
                    <div class="itemviewflex-item-right">item here</div>
                </div>

                <div class="itemviewflex-container">
                    <div class="itemviewflex-item-left">Starting Bid:</div>
                    <div class="itemviewflex-item-right">item here</div>
                </div>

                <div class="itemviewflex-container">
                    <div class="itemviewflex-item-left">Current Bid:</div>
                    <div class="itemviewflex-item-right">item here</div>
                </div>

                <div class="itemviewflex-container">
                    <div class="itemviewflex-item-left">New Bid:</div>
                    <div class="itemviewflex-item-right">item here</div>
                </div>

                <div class="itemviewflex-container">
                    <div class="itemviewflex-item-left">Seller:</div>
                    <div class="itemviewflex-item-right">item here</div>
                </div>

                <div class="itemviewflex-container">
                    <div class="itemviewflex-item-left">Description:</div>
                    <div class="itemviewflex-item-right">item here</div>
                </div>
            </div>
        )}

    </div>
}
