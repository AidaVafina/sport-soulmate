import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

interface PopupProps {
    onClose: () => void;
    backgroundImage: string;
}

const RegisterPopup: React.FC<PopupProps> = ({ onClose, backgroundImage }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [submitted, setSubmitted] = useState(false);

    const handleUsernameChange = (value: string) => {
        setUsername(value);
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
        setPasswordError('');
        setPasswordMismatch(false);
        setSubmitted(false);
    };

    const handleConfirmPasswordChange = (value: string) => {
        setConfirmPassword(value);
        // сбрасываем состояния при изменении повторного пароля
        setPasswordError('');
        setPasswordMismatch(false);
        setSubmitted(false);
    };

    const handleSubmit = () => {
        setSubmitted(true); // ввод данных
        // проверка на совпадение паролей
        if (password !== confirmPassword) {
            setPasswordError('Пароли не совпадают');
            setPasswordMismatch(true);
            return;
        }
        // проверка на минимальную длину пароля
        if (password.length < 6) {
            setPasswordError('Пароль должен содержать не менее 6 символов');
            return;
        }
        // логика для отправки данных регистрации на сервер
        console.log('Submitting with username:', username, 'and password:', password);
        onClose();
        setIsVisible(false);
    };

    return (
        <>
            <div className={`popup-overlay ${isVisible ? '' : 'hidden'}`}>
                <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                <div className="popup">
                    <span className="close" onClick={() => { onClose(); setIsVisible(false); }}>&times;</span>
                    <div className="input-container">
                        <InputField label="Логин" value={username} onChange={handleUsernameChange} />
                        <InputField label="Пароль" type="password" value={password} onChange={handlePasswordChange} className={submitted && passwordMismatch ? 'password-mismatch' : ''} />
                        <InputField label="Повторите пароль" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} className={submitted && passwordMismatch ? 'password-mismatch' : ''} />
                        {submitted && passwordError && <span className="error">{passwordError}</span>}
                    </div>
                    <div className="button-container">
                        <Button label="Зарегистрироваться" onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPopup;