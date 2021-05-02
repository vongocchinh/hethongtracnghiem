import React, { useState } from "react";
import "./styles.scss";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
// import { Link } from "react-router-dom";
export default function HomeLeft(props) {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState('');
  var { CategoryDetailStore } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
    props.checkCode(code);
  };
  const onChange=(e)=>{
    setCode(e.target.value);
  }
  return (
    <>
      {CategoryDetailStore.data ? (
        <>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Mã Code
              </DialogContentText>
              <form onSubmit={handleClose}>
                <input  autoComplete="off" name="code" onChange={onChange} />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Thoát
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Bắt Đầu
              </Button>
            </DialogActions>
          </Dialog>
          <div className="container-main-right-layout">
            <p>{CategoryDetailStore.data.name}</p>
            <p>Tổng số câu hỏi : {CategoryDetailStore.data.totalQuestion}</p>
            <p>Thời gian lam bài :{CategoryDetailStore.data.time} phút</p>
            <div>
              <a to={"/thi/"+CategoryDetailStore.id}  onClick={handleClickOpen} href="###">
                Bắt Đầu
              </a>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
