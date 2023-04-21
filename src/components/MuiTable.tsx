import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

function MuiTable() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableCell>Id</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell align="center">Email</TableCell>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const tableData = [
  {
    id: 1,
    first_name: "Carlie",
    last_name: "Stang-Gjertsen",
    email: "cstanggjertsen0@tripod.com",
    gender: "Polygender",
    ip_address: "181.140.249.29",
  },
  {
    id: 2,
    first_name: "Herta",
    last_name: "Botfield",
    email: "hbotfield1@skype.com",
    gender: "Female",
    ip_address: "195.200.188.127",
  },
  {
    id: 3,
    first_name: "Eddy",
    last_name: "Mulqueeny",
    email: "emulqueeny2@sciencedaily.com",
    gender: "Female",
    ip_address: "106.165.135.151",
  },
  {
    id: 4,
    first_name: "Carleen",
    last_name: "Joye",
    email: "cjoye3@cargocollective.com",
    gender: "Genderqueer",
    ip_address: "20.121.250.69",
  },
  {
    id: 5,
    first_name: "Massimo",
    last_name: "Stachini",
    email: "mstachini4@surveymonkey.com",
    gender: "Male",
    ip_address: "177.1.42.193",
  },
  {
    id: 6,
    first_name: "Dorothea",
    last_name: "Barts",
    email: "dbarts5@geocities.com",
    gender: "Female",
    ip_address: "126.247.171.228",
  },
  {
    id: 7,
    first_name: "Chrystel",
    last_name: "Gregoretti",
    email: "cgregoretti6@bluehost.com",
    gender: "Female",
    ip_address: "68.193.10.195",
  },
  {
    id: 8,
    first_name: "Jessey",
    last_name: "Daines",
    email: "jdaines7@shutterfly.com",
    gender: "Male",
    ip_address: "221.125.72.159",
  },
  {
    id: 9,
    first_name: "Keane",
    last_name: "McKennan",
    email: "kmckennan8@t.co",
    gender: "Male",
    ip_address: "187.202.191.18",
  },
  {
    id: 10,
    first_name: "Starla",
    last_name: "Kornilov",
    email: "skornilov9@nature.com",
    gender: "Agender",
    ip_address: "143.14.200.125",
  },
];

export default MuiTable;
