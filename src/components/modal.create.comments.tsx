import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {useRef, useState} from "react";
import {TextField} from "@mui/material";


const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function ModalCreateComments({createComments}) {
    const [open, setOpen] = useState(false);


    const [name, setName] = useState(false);
    const [email, setEmail] = useState();
    const [body, setBody] = useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const create = () => {
        const comment = {
            name,
            email,
            body,
        };
        console.log(comment);

        createComments(comment);
        handleClose();
    };

    return (
      <>
          <Button onClick={handleOpen}>Open modal</Button>
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                     Agregar un nuevo posts
                  </Typography>
                  <TextField name="name"  onChange  ={ (e) => setName(e.target.value)}  id="outlined-basic" label="Outlined" variant="outlined" />
                  <TextField name="email" onChange={ (e) => setEmail(e.target.value)}   id="outlined-basic" label="Outlined" variant="outlined" />
                  <TextField name="body" onChange={ (e) => setBody(e.target.value)}   id="outlined-basic" label="Outlined" variant="outlined" />

                  <Button xs={{ marginTop: 3 }} onClick={create}>Crear Post</Button>
              </Box>
          </Modal>
      </>
    );
}