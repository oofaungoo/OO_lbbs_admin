import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import './Borrow_r_b.css';

const Borrow_add = () => {

    const [buttonText, setButtonText] = useState('สร้าง');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [timerRunning, setTimerRunning] = useState(false);

    const handleCreate = () => {
        setTimerRunning(true); // Start the timer
        setTimeout(() => {
            setButtonText('สร้างรายการยืมเรียบร้อยแล้ว');
            setIsSubmitted(true);
            setTimerRunning(false); // Stop the timer after delay
        }, 3000); // Replace 3000 with actual API call duration or desired delay
    };

    return (
        <div className="container" style={{ marginTop: '20px' }}>
            <div className="holder">
                <Link to="/Borrow_r_b" style={{ marginLeft: '100px' }}>
                    <back-button className="fs-22 fw-4">&lt; ย้อนกลับ</back-button>
                </Link>

                <div className="text-blue fs-26 fw-5 center" style={{ marginTop: '60px', marginBottom: '20px' }}>
                    สร้างรายการการยืมหนังสือใหม่
                </div>
                
                <div class="create-box">
                    {/* รหัสสมาชิก */}
                    <div style={{ marginLeft: '50px', marginBottom: '10px' }}>
                        <label style={{ marginRight: '14px' }}>รหัสสมาชิก:</label>
                        <input
                            type="text"
                            className="fs-20 fw-4"
                            placeholder="User ID"
                            style={{
                                padding: '5px 10px', /* Adjust padding as needed */
                                border: '1px solid #ccc', /* Define border style */
                                borderRadius: '4px', /* Add rounded corners */
                            }}
                        />
                    </div>

                    {/* รหัสหนังสือ */}
                    <div style={{ marginLeft: '50px', marginBottom: '20px' }}>
                        <label style={{ marginRight: '12px' }}>รหัสหนังสือ:</label>
                        <input 
                            type="text" 
                            className="fs-20 fw-4" 
                            placeholder="Book UID" 
                            style={{
                                padding: '5px 10px', /* Adjust padding as needed */
                                border: '1px solid #ccc', /* Define border style */
                                borderRadius: '4px', /* Add rounded corners */
                            }}/>
                    </div>

                    <div>

                        {isSubmitted ? (
                            <label style={{marginLeft:'200px'}}>
                                สร้างรายการยืมเรียบร้อยแล้ว กดปุ่มเพื่อย้อนกลับ
                                <Link to="/Borrow_r_b">
                                    <label className="menu-button text-white fs-18 fw-5" style={{marginLeft:'20px'}}>ย้อนกลับ</label>
                                </Link>
                            </label>
                        ) : timerRunning ? (
                            <label className="menu-button text-white fs-18 fw-5" style={{ marginLeft: '500px' }} >กรุณารอสักครู่</label>
                        ) : (

                            <label className="menu-button text-white fs-18 fw-5" style={{ marginLeft: '550px' }} onClick={handleCreate} >
                                {buttonText}
                            </label>
                        )}
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Borrow_add;