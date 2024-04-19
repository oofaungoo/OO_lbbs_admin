import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import Admin_home from './pages/Admin/Admin_home/Admin_home';
import Book_manage from './pages/Admin/Book_manage/Book_manage';
import Borrow_r_b from './pages/Admin/Borrow_r_b/Borrow_r_b';
import Borrow_add from './pages/Admin/Borrow_r_b/Borrow_add';
import Borrow_return from './pages/Admin/Borrow_return/Borrow_return';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Admin_home />} />
      <Route path="/Book_manage" element={<Book_manage />} />
      <Route path="/Borrow_r_b" element={<Borrow_r_b />} />
      <Route path="/Borrow_r_b/Borrow_add" element={<Borrow_add />} />
      <Route path="/Borrow_return" element={<Borrow_return />} />
    </Routes>
  </BrowserRouter>
);
