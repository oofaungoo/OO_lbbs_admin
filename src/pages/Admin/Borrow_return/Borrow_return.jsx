import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Borrow_return.css';

const Borrow_return = () => {

{/* ส่วนของการโชว์ Borrow List */}
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]); // Added state for search results
    const handleSearch = () => {
        const searchResultsElement = document.querySelector('.search-results');
        if (inputValue) {
            // Simulate API call (replace with your actual API call)
            const mockSearchResults = [
                { borrow_id: 1, user_id: 123, name: 'John Doe', title: 'The Lord of the Rings', status: 'Reserve' },
                { borrow_id: 2, user_id: 456, name: 'Jane Smith', title: 'Pride and Prejudice', status: 'Borrow' },
                { borrow_id: 3, user_id: 789, name: 'Alice', title: 'Alice in Wonderland', status: 'Return' },
            // Add more mock search results here
            ];
  
        // Filter results based on status and matching ID
            const filteredResults = mockSearchResults.filter((result) => {
                const validStatus = result.status === 'Borrow' || result.status === 'Return'; // Check for valid status
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

    function handleReturn(itemId) {
        // 1. Make an API call (if applicable)
        fetch(`/api/items/${itemId}/return`, {
          method: 'PUT',
        })
        .then(response => response.json())
        .then(data => {
          // 2. Update application state (if applicable)
          console.log('Item returned successfully:', data);
          // Update your application state to reflect the new status (e.g., redux dispatch)
        })
        .catch(error => {
          console.error('Error returning item:', error);
          // Handle errors appropriately (e.g., display an error message)
        });
      }

    return (
        <div className="container" style={{ marginTop: '20px' }}>
            <div className="holder">
                <Link to="/" style={{ marginLeft: '100px' }}>
                    <back-button className="fs-22 fw-4">&lt; ย้อนกลับ</back-button>
                </Link>

                <div className="text-blue fs-26 fw-5 center" style={{ marginTop: '60px', marginBottom: '20px' }}>
                    การคืนหนังสือ
                </div>

                <div className="text-blue fs-26 fw-5 center" style={{ marginTop: '50px', marginBottom: '20px' }}>
                    ค้นหารายการยืมหนังสือที่มีอยู่
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
                                <div key={result.borrow_id} style={{ marginLeft: '50px', marginBottom: '20px' }}>
                                    <div style={{ marginTop: '20px' }}>หมายเลขรายการยืม: {result.borrow_id}</div>
                                    <div>รหัสผู้ยืม: {result.user_id}</div>
                                    <div>ชื่อผู้ยืม: {result.name}</div>
                                    <div>ชื่อหนังสือ: {result.title}</div>
                                    <div>วันที่ยืม: {result.borrow_date} </div>
                                    <div>
                                        สถานะ: {result.status}
                                        {result.status === 'Borrow' && (
                                            <div className="menu-button text-white fs-20 fw-4" style={{ float: 'right', marginRight: '100px' }}>
                                                <form onSubmit={() => handleReturn(result.id)}>
                                                    คืนหนังสือ
                                                </form>
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

export default Borrow_return;