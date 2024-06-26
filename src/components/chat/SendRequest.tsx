import React, { useState } from 'react';


const SendRequest: React.FC = () => {
    const [to, setTo] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        setLoading(true);

        try {
            const userResponse = await fetch(`/api/users?email=${to}`);
            if (!userResponse.ok) {
                throw new Error(`User not found`);
            }

            const requestResponse = await fetch('/api/requests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ to, contact, message }),
            });

            if (!requestResponse.ok) {
                throw new Error(`Error sending request`);
            }

            setTo('');
            setContact('');
            setMessage('');
            setError('');
            alert('Заявка отправлена');
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="send-request-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Кому:</label>
                <input
                    type="email"
                    value={to}
                    onChange={e => setTo(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Свой контакт:</label>
                <input
                    type="text"
                    value={contact}
                    onChange={e => setContact(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Сообщение:</label>
                <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="submit-button" disabled={loading}>
                {loading ? 'Отправка...' : 'Отправить'}
            </button>
        </form>
    );
};

export default SendRequest;

