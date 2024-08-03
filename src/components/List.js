import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems, setSelectedItem } from '../redux/actions/itemActions';
import { useNavigate } from 'react-router-dom';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import shadows from '@mui/material/styles/shadows';

const List = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.items);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchedItems = [
      { id: 1, col1: 'ITsecgames active scanning from VM', col2: 'Engine-jan 10', col3: 'Completed', col4: 'B', col5: '212', col6: '5 78 99 30' },
      { id: 2, col1: 'Decirius Scanning from VM', col2: 'tanishq doing testing (wow)', col3: 'Completed', col4: 'B', col5: '212', col6: '5 78 99 30' },
      { id: 3, col1: 'BMAPP recon Scan from VM', col2: 'tanishq doing testing (wow)', col3: 'Completed', col4: 'B', col5: '212', col6: '5 78 99 30' },
      { id: 4, col1: 'BMAPP recon Scan from docker2', col2: 'tanishq doing testing (wow)', col3: 'Completed', col4: 'B', col5: '212', col6: '5 78 99 30' },
      { id: 5, col1: 'BMAPP recon Scan from docker', col2: 'tanishq doing testing (wow)', col3: 'Completed', col4: 'B', col5: '212', col6: '5 78 99 30' },
      { id: 6, col1: 'BMAPP recon Scan', col2: 'tanishq doing testing (wow)', col3: 'Completed', col4: 'B', col5: '212', col6: '5 78 99 30' },
    ];
    dispatch(setItems(fetchedItems));
  }, [dispatch]);

  useEffect(() => {
    setFilteredItems(
      items.filter(item => item.col1.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [items, searchTerm]);

  const handleRowClick = (item) => {
    dispatch(setSelectedItem(item));
    navigate('/list/details');
  };

  const renderCol6 = (col6) => {
    const colors = { 
      '5': 'hsl(0, 60%, 50%)',
      '78': '#ffa500',
      '99': 'Tomato',
      '30': '#008000'
    };

    
    return col6.split(' ').map((digit, index) => (
      <span key={index} style={{ backgroundColor: colors[digit] || 'lightgray', margin: '0px', padding: '16px', borderRadius: '1px' }}>
        {digit}
      </span>
    ));
  };

  const commonStyles = {
    fontWeight: 'bold',
    fontSize: '16px',
    bgcolor: '#E8E8E8',
    boxShadow:"20px"
  };

  return (
    <Container>
      <h2 className='text-[24px] font-bold text-center mt-3'>Random List Data</h2>
      <div className="flex justify-center mb-4">
        <input 
          type="text"
          placeholder="Search by Scan Name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2 max-w-xl px-4 py-3 mt-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
         
      </div> 
      <Table className='mt-4 border border-gray-200'>
      <TableHead>
      <TableRow className="bg-gray-50">
        <TableCell sx={commonStyles}>Scan Name</TableCell>
        <TableCell sx={commonStyles}>Scan Engine</TableCell>
        <TableCell sx={commonStyles}>Status</TableCell>
        <TableCell sx={commonStyles}>Risk Score</TableCell>
        <TableCell sx={commonStyles}>Total Vulnerabilities</TableCell>
        <TableCell sx={commonStyles}>Severity</TableCell>
      </TableRow>
    </TableHead> 
        <TableBody> 
          {filteredItems.map((item) => ( 
            <TableRow key={item.id} >
              <TableCell 
                sx={{ fontSize: '15px', color: 'blue', padding: "20px" }}
                onClick={() => handleRowClick(item)}
                style={{ cursor: 'pointer' }}
              >
                {item.col1}
              </TableCell> 
              <TableCell sx={{ fontSize: '15px' }}>{item.col2}</TableCell>
              <TableCell sx={{ fontSize: '15px' }}>{item.col3}</TableCell>
              <TableCell sx={{ fontSize: '15px', fontWeight: 'bold' }}>{item.col4}</TableCell>
              <TableCell sx={{ fontSize: '15px' }}>{item.col5}</TableCell>
              <TableCell sx={{ fontSize: '15px', color: 'white' }}>{renderCol6(item.col6)}</TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </Container>
  );
};

export default List;
