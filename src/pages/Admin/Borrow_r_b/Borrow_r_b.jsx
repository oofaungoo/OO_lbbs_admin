import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Borrow_r_b.css';

const Borrow_r_b = () => {

{/* ส่วนของการโชว์ Borrow List */}
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]); // Added state for search results
    const handleSearch = () => {
        const searchResultsElement = document.querySelector('.search-results');
        if (inputValue) {
            // Simulate API call (replace with your actual API call)
            const mockSearchResults = [
                { borrow_id: 1, user_id: 123, name: 'John Doe', title: 'The Lord of the Rings', status: 'Reserve' },
                { borrow_id: 2, user_id: 456, name: 'Jane Smith', title: 'Pride and Prejudice', status: 'Reserve' },
                { borrow_id: 3, user_id: 789, name: 'Alice', title: 'Alice in Wonderland', status: 'Approved' },
                { borrow_id: 4, user_id: 456, name: 'Jane Smith', title: 'มานีมีหม้อ', status: 'Borrow' },
                { borrow_id: 5, user_id: 456, name: 'Jane Smith', title: 'ธาตุทองซาวด์', status: 'Reserve' },
            // Add more mock search results here
            ];
  
        // Filter results based on status and matching ID
            const filteredResults = mockSearchResults.filter((result) => {
                const validStatus = result.status === 'Borrow' || result.status === 'Reserve'; // Check for valid status
                const matchingId = result.borrow_id === parseInt(inputValue) || result.user_id === parseInt(inputValue); // Check for matching ID
  
                return validStatus && matchingId; // Show only entries with valid status AND matching ID
            });
  
            console.log('Filtered results:', filteredResults); // Log filtered results for debugging
  
            setSearchResults(filteredResults); // Update search results state
      
            if (searchResultsElement) {
                searchResultsElement.style.display = 'block'; // Show results container
            }
        } else {
        // Clear search results and hide container
            setSearchResults([]);
            if (searchResultsElement) {
                searchResultsElement.style.display = 'none';
            }
        }
    };

    return (
        <div className="container" style={{ marginTop: '20px' }}>
            <div className="holder">
                <Link to="/" style={{ marginLeft: '100px' }}>
                    <back-button className="fs-22 fw-4">&lt; ย้อนกลับ</back-button>
                </Link>

                <div className="text-blue fs-26 fw-5 center" style={{ marginTop: '60px', marginBottom: '20px' }}>
                    การยืมหนังสือ
                </div>

                <div className="center">
                    <Link to="/Borrow_r_b/Borrow_add">
                        <div className="menu-button text-white fs-22 fw-4" >
                            <div>สร้างรายการการยืมหนังสือใหม่</div>
                            <div>(Add New Borrowing)</div>
                        </div>
                    </Link>
            
                </div>

                <div className="text-blue fs-26 fw-5 center" style={{ marginTop: '50px', marginBottom: '20px' }}>
                    ค้นหารายการจองและยืมหนังสือที่มีอยู่
                </div>

                <div className="search-bar input center" style={{ display: 'flex', alignItems: 'center'}}>
                    <input
                        type="text"
                        className="search-bar fs-20 fw-4"
                        placeholder="รหัสผู้ยืม หรือ รหัสการจอง"
                        onChange={(event) => setInputValue(event.target.value)}
                    />
                    <div className="search-button text-white fs-20 fw-4" style={{ display: 'flex', alignItems: 'center', marginLeft: '12px' }} onClick={handleSearch}>
                        ค้นหา
                    </div>
                </div>

                <div style={{ marginTop: '20px'}}>
                    {searchResults.length > 0 ? (
                        <div className="search-results fs-20 fw-4">
                            {searchResults.map((result) => (
                                <div key={result.borrow_id} style={{ marginLeft: '50px', marginBottom: '40px' }}>
                                    <div style={{ marginTop: '20px' }}>หมายเลขรายการยืม: {result.borrow_id}</div>
                                    <div>รหัสผู้ยืม: {result.member_id}</div>
                                    <div>ชื่อผู้ยืม: {result.name}</div>
                                    <div>UID หนังสือ: {result.unique_id}</div>
                                    <div>ชื่อหนังสือ: {result.title}</div>
                                    <div>วันที่จอง: {result.reserve_date} </div>
                                    <div>วันที่ยืม: {result.borrow_date} </div>
                                    <div>
                                        สถานะ: {result.borrow_status}
                                        {result.borrow_status === 'Reserve' && (
                                            <div className="menu-button text-white fs-20 fw-4" style={{ float: 'right', marginRight: '100px'}}>
                                                {/* change status */}
                                                เริ่มยืม
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="fs-20 fw-4" style={{textAlign: 'center'}}>
                            ไม่พบผลการค้นหา
                        </div>
                    )}
                </div>
            </div>
        </div>
  );
};

export default Borrow_r_b;