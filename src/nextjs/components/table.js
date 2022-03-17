import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
];

export default function BasicTable({ liff }) {
  const [status, setStatus] = React.useState({
    os: '',
    lang: '',
    version: '',
    lineVersion: '',
    inClient: false,
    loggedIn: false,
    AId: ''
  });

  React.useEffect(() => {
    if (!liff) return;
    console.log(liff);
    setStatus({
      os: liff.getOS(),
      lang: liff.getLanguage(),
      version: liff.getVersion(),
      lineVersion: liff.getLineVersion(),
      inClient: liff.isInClient(),
      loggedIn: liff.isLoggedIn(),
      AId: liff.getAId()
    });

    if (!liff.isLoggedIn()) {
      liff.login();
    }
  }, [liff])

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>item</TableCell>
            <TableCell>result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>OS</TableCell>
            <TableCell>{status.os}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Language</TableCell>
            <TableCell>{status.lang}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Version</TableCell>
            <TableCell>{status.version}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>LINE Version</TableCell>
            <TableCell>{`${status.lineVersion}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>in Client</TableCell>
            <TableCell>{`${status.inClient}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>is Logged In</TableCell>
            <TableCell>{`${status.loggedIn}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>a id</TableCell>
            <TableCell>{`${status.AId}`}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
