import React from 'react';
import { Typography, Table, TableHead, TableBody, TableRow, TableCell,Button } from '@mui/material';
import './prescription.css';
import LandingPage from './landing';

const PrescriptionPage = () => {
  const medicines = [
    { id: 1, name: 'Paracetamol', dosage: '500mg', frequency: 'Twice a day' },
    { id: 2, name: 'Ibuprofen', dosage: '200mg', frequency: 'As needed for pain' },
    { id: 3, name: 'Amoxicillin', dosage: '250mg', frequency: 'Three times a day' },
    { id: 4, name: 'Omeprazole', dosage: '20mg', frequency: 'Once a day' },
    { id: 5, name: 'Loratadine', dosage: '10mg', frequency: 'Once a day' },
    { id: 6, name: 'Prednisone', dosage: '5mg', frequency: 'Once a day' },
    { id: 7, name: 'Ciprofloxacin', dosage: '500mg', frequency: 'Twice a day' },
    { id: 8, name: 'Diazepam', dosage: '5mg', frequency: 'As needed for anxiety' },
    { id: 9, name: 'Lisinopril', dosage: '10mg', frequency: 'Once a day' },
    { id: 10, name: 'Simvastatin', dosage: '20mg', frequency: 'Once a day' },
    { id: 11, name: 'Aspirin', dosage: '81mg', frequency: 'Once a day' },
    { id: 12, name: 'Warfarin', dosage: '2.5mg', frequency: 'Once a day' },
    { id: 13, name: 'Atorvastatin', dosage: '10mg', frequency: 'Once a day' },
    { id: 14, name: 'Metformin', dosage: '500mg', frequency: 'Twice a day' },
    { id: 15, name: 'Alprazolam', dosage: '0.5mg', frequency: 'As needed for anxiety' },
  ];

  return (
    <>
    <div className="prescription-container" >
      <Typography variant="h3" gutterBottom className="prescription-title" style={{backgroundColor:"wheat",padding:"20px",borderRadius:"10px"}}>
        Prescription
      </Typography>
      <hr className="title-divider" />
      <Table className="prescription-table">
        <TableHead>
          <TableRow>
            <TableCell>Medicine</TableCell>
            <TableCell>Dosage</TableCell>
            <TableCell>Frequency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {medicines.map((medicine) => (
            <TableRow key={medicine.id}>
              <TableCell>{medicine.name}</TableCell>
              <TableCell>{medicine.dosage}</TableCell>
              <TableCell>{medicine.frequency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
    </div>
  <div>

  <a href='/'> <Button style={{color:"white",background:"#B22222",marginLeft:"72%",marginTop:"100px",marginTop:"-10px"}} onClick={LandingPage} variant='contained'>Back</Button>
            </a>


  </div>
  </>
  );
};

export default PrescriptionPage;